/**
 * Pyodide Manager Module
 * 
 * This module provides a clean API to communicate with the Pyodide Web Worker,
 * handling message passing, state management, and animation throttling.
 */

// Default configuration for the manager
const DEFAULT_CONFIG = {
  workerUrl: '/js/pyodide-worker.js',
  packages: ['matplotlib', 'numpy'],
  targetFps: 30,  // Target frames per second for animations
  messageTimeout: 30000,  // Maximum time to wait for a worker response (30 seconds)
};

/**
 * Class to manage Pyodide execution in a Web Worker
 */
export class PyodideManager {
  constructor(config = {}) {
    // Merge default config with provided config
    this.config = { ...DEFAULT_CONFIG, ...config };
    
    // Worker instance
    this.worker = null;
    
    // State tracking
    this.isInitialized = false;
    this.isAnimating = false;
    this.isPaused = false;
    this.currentFrame = 0;
    this.totalFrames = 100;
    
    // Animation control
    this.animationTimerId = null;
    this.lastFrameTime = 0;
    this.targetFrameInterval = 1000 / this.config.targetFps;
    
    // Message handling
    this.messageId = 0;
    this.pendingMessages = new Map();
    this.callbacks = {
      output: [],
      error: [],
      status: [],
      frame: [],
      image: [],
      animationStarted: [],
      animationPaused: [],
      animationResumed: [],
      animationStopped: [],
      animationCompleted: [],
      initialized: [],
    };
  }
  
  /**
   * Initialize the Pyodide manager and load the worker
   * @returns {Promise<void>} - Resolves when Pyodide is initialized
   */
  async initialize() {
    if (this.isInitialized) {
      return;
    }
    
    // Create a new Web Worker
    this.worker = new Worker(this.config.workerUrl);
    
    // Set up message handler
    this.worker.onmessage = this._handleWorkerMessage.bind(this);
    
    // Initialize the worker
    await this._sendMessage('initialize', { packages: this.config.packages });
    
    this.isInitialized = true;
    return true;
  }
  
  /**
   * Run Python code in the worker
   * @param {string} code - Python code to execute
   * @returns {Promise<any>} - Resolves with the execution result
   */
  async runCode(code) {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    // Reset animation state
    this._stopAnimation();
    
    // Send the code to the worker
    const result = await this._sendMessage('runCode', { code });
    
    // Check if the code produced an animation
    if (result.hasAnimation) {
      this._triggerCallbacks('status', { status: 'animation-ready' });
    }
    
    return result;
  }
  
  /**
   * Start an animation
   * @returns {Promise<void>} - Resolves when animation has started
   */
  async startAnimation() {
    if (!this.isInitialized) {
      throw new Error('Pyodide not initialized. Call initialize() first.');
    }
    
    // Send start animation command to worker
    await this._sendMessage('runAnimation', { command: 'start' });
    
    // Set up the animation loop
    this.isAnimating = true;
    this.isPaused = false;
    this.currentFrame = 0;
    this.lastFrameTime = performance.now();
    
    // Start the animation loop
    this._animationLoop();
  }
  
  /**
   * Pause the current animation
   * @returns {Promise<void>} - Resolves when animation is paused
   */
  async pauseAnimation() {
    if (!this.isAnimating) {
      return;
    }
    
    // Cancel any pending animation frame
    if (this.animationTimerId) {
      cancelAnimationFrame(this.animationTimerId);
      this.animationTimerId = null;
    }
    
    // Pause the animation in the worker
    await this._sendMessage('runAnimation', { command: 'pause' });
    
    this.isPaused = true;
  }
  
  /**
   * Resume a paused animation
   * @returns {Promise<void>} - Resolves when animation is resumed
   */
  async resumeAnimation() {
    if (!this.isAnimating || !this.isPaused) {
      return;
    }
    
    // Resume the animation in the worker
    await this._sendMessage('runAnimation', { command: 'resume' });
    
    this.isPaused = false;
    this.lastFrameTime = performance.now();
    
    // Restart the animation loop
    this._animationLoop();
  }
  
  /**
   * Stop the current animation
   * @returns {Promise<void>} - Resolves when animation has stopped
   */
  async stopAnimation() {
    if (!this.isAnimating) {
      return;
    }
    
    // Stop the animation loop
    this._stopAnimation();
    
    // Stop the animation in the worker
    await this._sendMessage('runAnimation', { command: 'stop' });
  }
  
  /**
   * Register a callback for a specific event type
   * @param {string} eventType - Event type to register for
   * @param {Function} callback - Callback function to invoke
   * @returns {Function} - Function to unregister the callback
   */
  on(eventType, callback) {
    if (!this.callbacks[eventType]) {
      this.callbacks[eventType] = [];
    }
    
    this.callbacks[eventType].push(callback);
    
    // Return a function to remove this callback
    return () => {
      const index = this.callbacks[eventType].indexOf(callback);
      if (index !== -1) {
        this.callbacks[eventType].splice(index, 1);
      }
    };
  }
  
  /**
   * Clean up resources and terminate the worker
   */
  terminate() {
    this._stopAnimation();
    
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    
    this.isInitialized = false;
    this.pendingMessages.clear();
    
    // Clear all callbacks
    Object.keys(this.callbacks).forEach(key => {
      this.callbacks[key] = [];
    });
  }
  
  //
  // Private methods
  //
  
  /**
   * Send a message to the worker and wait for a response
   * @private
   * @param {string} type - Message type
   * @param {Object} data - Message data
   * @returns {Promise<any>} - Resolves with the response
   */
  _sendMessage(type, data = {}) {
    return new Promise((resolve, reject) => {
      const id = this._generateMessageId();
      
      // Set up a timeout for the message
      const timeoutId = setTimeout(() => {
        this.pendingMessages.delete(id);
        reject(new Error(`Timeout waiting for response to message ${type}`));
      }, this.config.messageTimeout);
      
      // Store the pending message
      this.pendingMessages.set(id, { resolve, reject, timeoutId });
      
      // Send the message to the worker
      try {
        this.worker.postMessage({ type, id, data });
      } catch (error) {
        clearTimeout(timeoutId);
        this.pendingMessages.delete(id);
        reject(error);
      }
    });
  }
  
  /**
   * Handle messages from the worker
   * @private
   * @param {MessageEvent} event - Message event
   */
  _handleWorkerMessage(event) {
    const { type, id, error, ...data } = event.data;
    
    // Handle errors
    if (type === 'error') {
      console.error('Pyodide worker error:', error);
      this._triggerCallbacks('error', { error });
      
      // Resolve any pending message with the error
      if (id && this.pendingMessages.has(id)) {
        const { reject, timeoutId } = this.pendingMessages.get(id);
        clearTimeout(timeoutId);
        this.pendingMessages.delete(id);
        reject(new Error(error));
      }
      
      return;
    }
    
    // Handle animation events
    switch (type) {
      case 'frame':
        this._triggerCallbacks('frame', data);
        break;
        
      case 'animationStarted':
        this.totalFrames = data.totalFrames;
        this._triggerCallbacks('animationStarted', data);
        
        // Resolve the start animation message
        if (id && this.pendingMessages.has(id)) {
          const { resolve, timeoutId } = this.pendingMessages.get(id);
          clearTimeout(timeoutId);
          this.pendingMessages.delete(id);
          resolve(data);
        }
        break;
        
      case 'animationPaused':
      case 'animationResumed':
      case 'animationStopped':
      case 'animationCompleted':
        this._triggerCallbacks(type, data);
        
        // Resolve the animation control message
        if (id && this.pendingMessages.has(id)) {
          const { resolve, timeoutId } = this.pendingMessages.get(id);
          clearTimeout(timeoutId);
          this.pendingMessages.delete(id);
          resolve(data);
        }
        
        // For completed or stopped animations, clean up
        if (type === 'animationCompleted' || type === 'animationStopped') {
          this._stopAnimation();
        }
        break;
        
      case 'initialized':
        this._triggerCallbacks('initialized', data);
        
        // Resolve the initialize message
        if (id && this.pendingMessages.has(id)) {
          const { resolve, timeoutId } = this.pendingMessages.get(id);
          clearTimeout(timeoutId);
          this.pendingMessages.delete(id);
          resolve(true);
        }
        break;
        
      case 'result':
      case 'image':
      case 'output':
      case 'status':
        // Trigger callbacks
        this._triggerCallbacks(type, data);
        
        // For messages with a result, resolve the promise
        if (id && this.pendingMessages.has(id) && (type === 'result' || type === 'image')) {
          const { resolve, timeoutId } = this.pendingMessages.get(id);
          clearTimeout(timeoutId);
          this.pendingMessages.delete(id);
          resolve(data);
        }
        break;
        
      default:
        console.warn('Unknown message type:', type, data);
    }
  }
  
  /**
   * Generate a unique message ID
   * @private
   * @returns {string} - Unique message ID
   */
  _generateMessageId() {
    return `msg_${++this.messageId}`;
  }
  
  /**
   * Trigger all registered callbacks for an event type
   * @private
   * @param {string} eventType - Event type
   * @param {Object} data - Event data
   */
  _triggerCallbacks(eventType, data) {
    if (this.callbacks[eventType]) {
      for (const callback of this.callbacks[eventType]) {
        try {
          callback(data);
        } catch (error) {
          console.error('Error in callback:', error);
        }
      }
    }
  }
  
  /**
   * Run the animation loop with throttling
   * @private
   */
  _animationLoop() {
    if (!this.isAnimating || this.isPaused) {
      return;
    }
    
    const now = performance.now();
    const elapsed = now - this.lastFrameTime;
    
    // Throttle to target FPS
    if (elapsed >= this.targetFrameInterval) {
      this.lastFrameTime = now - (elapsed % this.targetFrameInterval);
      
      // Request the next frame from the worker
      this._requestNextFrame();
    }
    
    // Schedule the next frame
    this.animationTimerId = requestAnimationFrame(() => this._animationLoop());
  }
  
  /**
   * Request the next animation frame from the worker
   * @private
   */
  async _requestNextFrame() {
    try {
      // Request the next frame from the worker
      this._sendMessage('requestFrame', { frameNumber: this.currentFrame++ })
        .catch(error => {
          console.error('Error requesting frame:', error);
          this._stopAnimation();
        });
    } catch (error) {
      console.error('Error in animation loop:', error);
      this._stopAnimation();
    }
  }
  
  /**
   * Stop the animation loop
   * @private
   */
  _stopAnimation() {
    if (this.animationTimerId) {
      cancelAnimationFrame(this.animationTimerId);
      this.animationTimerId = null;
    }
    
    this.isAnimating = false;
    this.isPaused = false;
    this.currentFrame = 0;
  }
} 