/**
 * Web Worker for running Pyodide and matplotlib animations in a background thread
 * This prevents the main thread from being blocked during computation
 */

// Store the Pyodide instance
let pyodide = null;

// Track animation state
let animationState = {
  isRunning: false,
  isPaused: false,
  currentFrame: 0,
  maxFrames: 100
};

// Handle messages from main thread
self.onmessage = async function(event) {
  const { type, id, data } = event.data;
  
  try {
    switch (type) {
      case 'initialize':
        await initialize(data?.packages || ["matplotlib", "numpy"]);
        break;
        
      case 'runCode':
        await runCode(id, data.code);
        break;
        
      case 'runAnimation':
        handleAnimation(id, data);
        break;
        
      case 'requestFrame':
        await generateFrame(id, data.frameNumber);
        break;
        
      default:
        throw new Error(`Unknown message type: ${type}`);
    }
  } catch (error) {
    self.postMessage({
      type: 'error',
      id,
      error: error.message || String(error)
    });
  }
};

/**
 * Initialize Pyodide with required packages
 * @param {Array<string>} packages - Python packages to load
 * @returns {Promise<void>}
 */
async function initialize(packages) {
  try {
    self.postMessage({ type: 'status', status: 'loading' });
    
    // Load Pyodide script
    self.importScripts('https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js');
    
    // Initialize Pyodide
    pyodide = await loadPyodide();
    
    // Load required packages
    await pyodide.loadPackage(packages);
    
    // Configure matplotlib for off-screen rendering
    await pyodide.runPythonAsync(`
      import matplotlib
      matplotlib.use('agg')
      
      # Set up functions for rendering to base64
      import matplotlib.pyplot as plt
      import io
      import base64
      
      def render_to_base64(fig=None):
          if fig is None:
              fig = plt.gcf()
          buf = io.BytesIO()
          fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
          buf.seek(0)
          img_str = base64.b64encode(buf.getvalue()).decode('utf-8')
          return f"data:image/png;base64,{img_str}"
          
      # Create animation helper class
      class AnimationHelper:
          def __init__(self):
              self.frame = 0
              self.max_frames = 100
              self.is_initialized = False
              self.is_running = False
              
          def setup(self):
              # Override in user code
              pass
              
          def update(self, frame):
              # Override in user code
              pass
              
          def cleanup(self):
              # Override in user code
              pass
      
      # Default animation helper
      animation = AnimationHelper()
    `);
    
    // Successfully initialized
    self.postMessage({ 
      type: 'initialized', 
      status: 'ready' 
    });
    
  } catch (error) {
    self.postMessage({ 
      type: 'error', 
      error: `Failed to initialize Pyodide: ${error.message || String(error)}` 
    });
    throw error;
  }
}

/**
 * Run Python code and return the result
 * @param {string} id - Message ID for response correlation
 * @param {string} code - Python code to execute
 * @returns {Promise<void>}
 */
async function runCode(id, code) {
  if (!pyodide) {
    throw new Error("Pyodide not initialized. Call initialize() first.");
  }
  
  try {
    // Set up stdout/stderr capture
    let output = "";
    pyodide.setStdout({
      write: (text) => {
        output += text;
        self.postMessage({ 
          type: 'output', 
          id, 
          output: text 
        });
      }
    });
    
    pyodide.setStderr({
      write: (text) => {
        output += text;
        self.postMessage({ 
          type: 'output', 
          id, 
          output: `Error: ${text}`,
          isError: true 
        });
      }
    });
    
    // Execute the code
    const result = await pyodide.runPythonAsync(code);
    
    // If the code creates/updates an animation, check for it
    const hasAnimation = await pyodide.runPythonAsync(`
      'animation' in globals() and hasattr(animation, 'update')
    `);
    
    // Return the result
    self.postMessage({ 
      type: 'result', 
      id, 
      result: result?.toString() || "",
      output,
      hasAnimation
    });
    
    // If the code produced a plot but not an animation, return it as an image
    if (!hasAnimation) {
      try {
        const hasFigure = await pyodide.runPythonAsync(`
          'plt' in globals() and plt.get_fignums()
        `);
        
        if (hasFigure) {
          const imageData = await pyodide.runPythonAsync(`render_to_base64()`);
          self.postMessage({ 
            type: 'image', 
            id, 
            imageData 
          });
        }
      } catch (err) {
        // Ignore errors when checking for figures
        console.error("Error checking for figures:", err);
      }
    }
    
  } catch (error) {
    self.postMessage({ 
      type: 'error', 
      id, 
      error: error.message || String(error) 
    });
    throw error;
  }
}

/**
 * Handle animation control commands
 * @param {string} id - Message ID for response correlation
 * @param {Object} data - Animation control data
 * @param {string} data.command - start, pause, resume, stop
 * @returns {Promise<void>}
 */
async function handleAnimation(id, data) {
  if (!pyodide) {
    throw new Error("Pyodide not initialized. Call initialize() first.");
  }
  
  const { command } = data;
  
  switch (command) {
    case 'start':
      // Initialize animation
      try {
        // Call setup if available
        await pyodide.runPythonAsync(`
          if hasattr(animation, 'setup'):
              animation.setup()
              animation.is_initialized = True
          animation.is_running = True
          animation.frame = 0
        `);
        
        // Get animation parameters
        const maxFrames = await pyodide.runPythonAsync(`
          getattr(animation, 'max_frames', 100)
        `);
        
        // Update animation state
        animationState = {
          isRunning: true,
          isPaused: false,
          currentFrame: 0,
          maxFrames: maxFrames
        };
        
        // Generate first frame
        await generateFrame(id, 0);
        
        self.postMessage({ 
          type: 'animationStarted', 
          id,
          totalFrames: maxFrames
        });
      } catch (error) {
        self.postMessage({ 
          type: 'error', 
          id, 
          error: `Failed to start animation: ${error.message || String(error)}` 
        });
      }
      break;
      
    case 'pause':
      animationState.isPaused = true;
      self.postMessage({ 
        type: 'animationPaused', 
        id 
      });
      break;
      
    case 'resume':
      animationState.isPaused = false;
      self.postMessage({ 
        type: 'animationResumed', 
        id 
      });
      break;
      
    case 'stop':
      // Reset animation state
      animationState = {
        isRunning: false,
        isPaused: false,
        currentFrame: 0,
        maxFrames: 100
      };
      
      // Call cleanup if available
      try {
        await pyodide.runPythonAsync(`
          if hasattr(animation, 'cleanup'):
              animation.cleanup()
          animation.is_running = False
        `);
      } catch (error) {
        console.error("Error cleaning up animation:", error);
      }
      
      self.postMessage({ 
        type: 'animationStopped', 
        id 
      });
      break;
      
    default:
      throw new Error(`Unknown animation command: ${command}`);
  }
}

/**
 * Generate a single animation frame
 * @param {string} id - Message ID for response correlation
 * @param {number} frameNumber - Frame number to generate
 * @returns {Promise<void>}
 */
async function generateFrame(id, frameNumber) {
  if (!pyodide || !animationState.isRunning) {
    return;
  }
  
  try {
    // Call the animation update function
    const continueAnimation = await pyodide.runPythonAsync(`
      try:
          result = animation.update(${frameNumber})
          # Render the current figure to base64
          img_data = render_to_base64()
          result, img_data
      except Exception as e:
          print(f"Error in animation frame {${frameNumber}}: {e}")
          False, None
    `);
    
    // Extract result and image data
    const shouldContinue = continueAnimation[0];
    const imageData = continueAnimation[1];
    
    // Only send frame if we have image data
    if (imageData) {
      self.postMessage({ 
        type: 'frame', 
        id, 
        frameNumber, 
        imageData,
        isLastFrame: !shouldContinue || frameNumber >= animationState.maxFrames - 1
      });
    }
    
    // Update animation state
    animationState.currentFrame = frameNumber;
    
    // Check if animation is complete
    if (!shouldContinue || frameNumber >= animationState.maxFrames - 1) {
      animationState.isRunning = false;
      self.postMessage({ 
        type: 'animationCompleted', 
        id 
      });
    }
    
  } catch (error) {
    self.postMessage({ 
      type: 'error', 
      id, 
      error: `Error generating frame ${frameNumber}: ${error.message || String(error)}` 
    });
    
    // Stop the animation on error
    animationState.isRunning = false;
  }
} 