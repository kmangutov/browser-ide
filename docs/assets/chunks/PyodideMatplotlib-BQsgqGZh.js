import { c as createAstro, a as createComponent, b as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server-BpiS1_cD.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                              */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kmangutov.github.io");
const $$PyodideMatplotlib = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PyodideMatplotlib;
  const { code } = Astro2.props;
  const uniqueId = `pyodide_${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate(_a || (_a = __template(["", '<div class="pyodide-embed"', ' data-astro-cid-afk6wh7r> <div class="code-editor" data-astro-cid-afk6wh7r> <pre class="code-display" data-astro-cid-afk6wh7r>', '</pre> </div> <div class="controls" data-astro-cid-afk6wh7r> <button class="run-button" data-astro-cid-afk6wh7r>Run Animation</button> <button class="pause-button" disabled data-astro-cid-afk6wh7r>Pause</button> <button class="reset-button" disabled data-astro-cid-afk6wh7r>Reset</button> </div> <div class="visualization-container" data-astro-cid-afk6wh7r> <img class="output-canvas"', ` width="800" height="500" data-astro-cid-afk6wh7r> </div> <div class="output-container" data-astro-cid-afk6wh7r> <div class="output-text" data-astro-cid-afk6wh7r></div> </div> </div>  <script>
  // Use a self-executing function to ensure proper scoping
  (function() {
    // Global variable to assign pyodide to
    let pyodideReadyPromise;
    
    // Load Pyodide and its packages just once per page
    function initializePyodide() {
      if (!pyodideReadyPromise) {
        pyodideReadyPromise = (async function() {
          // Add the Pyodide script to the page
          if (!window.loadPyodide) {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
            document.head.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
          }
          
          console.log("Loading Pyodide...");
          const pyodide = await window.loadPyodide();
          console.log("Pyodide loaded successfully!");
          
          // Load required packages
          console.log("Loading matplotlib and numpy...");
          await pyodide.loadPackage(["matplotlib", "numpy"]);
          console.log("Packages loaded successfully!");
          
          // Configure matplotlib to use agg backend
          await pyodide.runPythonAsync(\`
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
          \`);
          
          return pyodide;
        })();
      }
      return pyodideReadyPromise;
    }

    // Initialize components when ready
    function initializeComponents() {
      const containers = document.querySelectorAll('.pyodide-embed');
      
      // Initialize each PyodideEmbed container
      containers.forEach((container) => {
        // Store the animation state for this specific container
        const instanceState = {
          animationFrameId: null,
          animationPaused: false
        };
        
        // Get the unique ID for this container
        const componentId = container.dataset.componentId;
        
        // Get the elements for this specific container
        const runButton = container.querySelector('.run-button');
        const pauseButton = container.querySelector('.pause-button');
        const resetButton = container.querySelector('.reset-button');
        const output = container.querySelector('.output-text');
        const codeElement = container.querySelector('.code-display');
        const canvas = container.querySelector('.output-canvas');
        
        // Start loading Pyodide immediately
        let pyodidePromise = initializePyodide();
        
        // Show initial message
        output.innerText = "Python environment loading...";
        
        // Setup animation controls
        pauseButton.addEventListener('click', () => {
          if (instanceState.animationPaused) {
            pauseButton.textContent = 'Pause';
            instanceState.animationPaused = false;
          } else {
            pauseButton.textContent = 'Resume';
            instanceState.animationPaused = true;
          }
        });
        
        resetButton.addEventListener('click', async () => {
          // Cancel any existing animation
          if (instanceState.animationFrameId) {
            cancelAnimationFrame(instanceState.animationFrameId);
            instanceState.animationFrameId = null;
          }
          
          // Clear the canvas
          canvas.src = '';
          
          // Reset animation state
          instanceState.animationPaused = false;
          pauseButton.textContent = 'Pause';
          
          // Disable animation controls
          pauseButton.disabled = true;
          resetButton.disabled = true;
          
          // Re-enable run button
          runButton.disabled = false;
          
          output.innerText = "Animation reset. Click 'Run Animation' to start again.";
        });
        
        // Set up the run button
        runButton.addEventListener('click', async () => {
          // Start by disabling the run button and enabling animation controls
          runButton.disabled = true;
          pauseButton.disabled = false;
          resetButton.disabled = false;
          
          output.innerText = "Running...";
          
          try {
            // Ensure Pyodide is loaded
            const pyodide = await pyodidePromise;
            
            // Get the code
            const userCode = codeElement.textContent;
            
            // Set up capturing stdout/stderr
            let capturedOutput = "";
            pyodide.setStdout({
              write: (text) => {
                capturedOutput += text;
                output.innerText = capturedOutput;
              }
            });
            
            pyodide.setStderr({
              write: (text) => {
                capturedOutput += \`\\nError: \${text}\`;
                output.innerText = capturedOutput;
              }
            });
            
            // Add canvas binding helper with the specific canvas ID for this instance
            await pyodide.runPythonAsync(\`
              import matplotlib.pyplot as plt
              from js import document
              
              # Get the output image element for this specific instance
              canvas = document.getElementById('outputCanvas_\${componentId}')
              
              # Helper function to update the canvas with matplotlib figure
              def update_canvas(fig=None):
                  if fig is None:
                      fig = plt.gcf()
                  # Render figure to base64 PNG and update image src
                  img_data = render_to_base64(fig)
                  canvas.src = img_data
                  
              # Create animation helpers
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
            \`);
            
            // Execute the user code
            capturedOutput = "";
            await pyodide.runPythonAsync(userCode);
            
            // Start the animation loop
            await pyodide.runPythonAsync(\`
              # Initialize the animation
              if hasattr(animation, 'setup'):
                  animation.setup()
                  animation.is_initialized = True
              
              # Update function will be called from JS
              def animation_step(frame):
                  if hasattr(animation, 'update'):
                      try:
                          animation.update(frame)
                          update_canvas()
                          return True
                      except Exception as e:
                          print(f"Error in animation frame {frame}: {e}")
                          return False
                  return False
              
              animation.is_running = True
            \`);
            
            // Set up JS animation loop
            let frame = 0;
            const pyodideGlobal = pyodide.globals.get('animation_step');
            
            function animationLoop() {
              if (!instanceState.animationPaused) {
                try {
                  // Call the Python animation step function
                  const result = pyodideGlobal(frame);
                  
                  // Check if animation should continue
                  // Handle both Pyodide proxy objects and direct JS values
                  const shouldContinue = typeof result.toJs === 'function' ? result.toJs() : result;
                  
                  if (!shouldContinue) {
                    // Animation is complete or errored
                    cancelAnimationFrame(instanceState.animationFrameId);
                    instanceState.animationFrameId = null;
                    output.innerText += "\\nAnimation complete.";
                    return;
                  }
                  frame++;
                } catch (error) {
                  output.innerHTML += \`\\n<span class="error">Error in animation: \${error.message}</span>\`;
                  cancelAnimationFrame(instanceState.animationFrameId);
                  instanceState.animationFrameId = null;
                  return;
                }
              }
              instanceState.animationFrameId = requestAnimationFrame(animationLoop);
            }
            
            // Start the animation
            instanceState.animationFrameId = requestAnimationFrame(animationLoop);
            output.innerText = "Animation running...";
            
          } catch (error) {
            output.innerHTML = \`<span class="error">Error: \${error.message || String(error)}</span>\`;
            console.error("Python execution error:", error);
            
            // Re-enable the run button and disable animation controls
            runButton.disabled = false;
            pauseButton.disabled = true;
            resetButton.disabled = true;
          }
        });
        
        // Check if Pyodide is already loaded when visible
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            // When the component becomes visible, check if Pyodide is loaded
            pyodidePromise.then(() => {
              output.innerText = "Python environment ready. Click 'Run Animation' to execute.";
            }).catch(error => {
              output.innerText = \`Error loading Python: \${error.message}\`;
              console.error("Failed to load Pyodide:", error);
            });
            observer.disconnect();
          }
        });
        
        observer.observe(container);
      });
    }

    // Initialize when DOM is loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeComponents);
    } else {
      initializeComponents();
    }
    
    // Also initialize when window fully loads (backup)
    window.addEventListener("load", initializeComponents);
  })();
<\/script>`], ["", '<div class="pyodide-embed"', ' data-astro-cid-afk6wh7r> <div class="code-editor" data-astro-cid-afk6wh7r> <pre class="code-display" data-astro-cid-afk6wh7r>', '</pre> </div> <div class="controls" data-astro-cid-afk6wh7r> <button class="run-button" data-astro-cid-afk6wh7r>Run Animation</button> <button class="pause-button" disabled data-astro-cid-afk6wh7r>Pause</button> <button class="reset-button" disabled data-astro-cid-afk6wh7r>Reset</button> </div> <div class="visualization-container" data-astro-cid-afk6wh7r> <img class="output-canvas"', ` width="800" height="500" data-astro-cid-afk6wh7r> </div> <div class="output-container" data-astro-cid-afk6wh7r> <div class="output-text" data-astro-cid-afk6wh7r></div> </div> </div>  <script>
  // Use a self-executing function to ensure proper scoping
  (function() {
    // Global variable to assign pyodide to
    let pyodideReadyPromise;
    
    // Load Pyodide and its packages just once per page
    function initializePyodide() {
      if (!pyodideReadyPromise) {
        pyodideReadyPromise = (async function() {
          // Add the Pyodide script to the page
          if (!window.loadPyodide) {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
            document.head.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
          }
          
          console.log("Loading Pyodide...");
          const pyodide = await window.loadPyodide();
          console.log("Pyodide loaded successfully!");
          
          // Load required packages
          console.log("Loading matplotlib and numpy...");
          await pyodide.loadPackage(["matplotlib", "numpy"]);
          console.log("Packages loaded successfully!");
          
          // Configure matplotlib to use agg backend
          await pyodide.runPythonAsync(\\\`
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
          \\\`);
          
          return pyodide;
        })();
      }
      return pyodideReadyPromise;
    }

    // Initialize components when ready
    function initializeComponents() {
      const containers = document.querySelectorAll('.pyodide-embed');
      
      // Initialize each PyodideEmbed container
      containers.forEach((container) => {
        // Store the animation state for this specific container
        const instanceState = {
          animationFrameId: null,
          animationPaused: false
        };
        
        // Get the unique ID for this container
        const componentId = container.dataset.componentId;
        
        // Get the elements for this specific container
        const runButton = container.querySelector('.run-button');
        const pauseButton = container.querySelector('.pause-button');
        const resetButton = container.querySelector('.reset-button');
        const output = container.querySelector('.output-text');
        const codeElement = container.querySelector('.code-display');
        const canvas = container.querySelector('.output-canvas');
        
        // Start loading Pyodide immediately
        let pyodidePromise = initializePyodide();
        
        // Show initial message
        output.innerText = "Python environment loading...";
        
        // Setup animation controls
        pauseButton.addEventListener('click', () => {
          if (instanceState.animationPaused) {
            pauseButton.textContent = 'Pause';
            instanceState.animationPaused = false;
          } else {
            pauseButton.textContent = 'Resume';
            instanceState.animationPaused = true;
          }
        });
        
        resetButton.addEventListener('click', async () => {
          // Cancel any existing animation
          if (instanceState.animationFrameId) {
            cancelAnimationFrame(instanceState.animationFrameId);
            instanceState.animationFrameId = null;
          }
          
          // Clear the canvas
          canvas.src = '';
          
          // Reset animation state
          instanceState.animationPaused = false;
          pauseButton.textContent = 'Pause';
          
          // Disable animation controls
          pauseButton.disabled = true;
          resetButton.disabled = true;
          
          // Re-enable run button
          runButton.disabled = false;
          
          output.innerText = "Animation reset. Click 'Run Animation' to start again.";
        });
        
        // Set up the run button
        runButton.addEventListener('click', async () => {
          // Start by disabling the run button and enabling animation controls
          runButton.disabled = true;
          pauseButton.disabled = false;
          resetButton.disabled = false;
          
          output.innerText = "Running...";
          
          try {
            // Ensure Pyodide is loaded
            const pyodide = await pyodidePromise;
            
            // Get the code
            const userCode = codeElement.textContent;
            
            // Set up capturing stdout/stderr
            let capturedOutput = "";
            pyodide.setStdout({
              write: (text) => {
                capturedOutput += text;
                output.innerText = capturedOutput;
              }
            });
            
            pyodide.setStderr({
              write: (text) => {
                capturedOutput += \\\`\\\\nError: \\\${text}\\\`;
                output.innerText = capturedOutput;
              }
            });
            
            // Add canvas binding helper with the specific canvas ID for this instance
            await pyodide.runPythonAsync(\\\`
              import matplotlib.pyplot as plt
              from js import document
              
              # Get the output image element for this specific instance
              canvas = document.getElementById('outputCanvas_\\\${componentId}')
              
              # Helper function to update the canvas with matplotlib figure
              def update_canvas(fig=None):
                  if fig is None:
                      fig = plt.gcf()
                  # Render figure to base64 PNG and update image src
                  img_data = render_to_base64(fig)
                  canvas.src = img_data
                  
              # Create animation helpers
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
            \\\`);
            
            // Execute the user code
            capturedOutput = "";
            await pyodide.runPythonAsync(userCode);
            
            // Start the animation loop
            await pyodide.runPythonAsync(\\\`
              # Initialize the animation
              if hasattr(animation, 'setup'):
                  animation.setup()
                  animation.is_initialized = True
              
              # Update function will be called from JS
              def animation_step(frame):
                  if hasattr(animation, 'update'):
                      try:
                          animation.update(frame)
                          update_canvas()
                          return True
                      except Exception as e:
                          print(f"Error in animation frame {frame}: {e}")
                          return False
                  return False
              
              animation.is_running = True
            \\\`);
            
            // Set up JS animation loop
            let frame = 0;
            const pyodideGlobal = pyodide.globals.get('animation_step');
            
            function animationLoop() {
              if (!instanceState.animationPaused) {
                try {
                  // Call the Python animation step function
                  const result = pyodideGlobal(frame);
                  
                  // Check if animation should continue
                  // Handle both Pyodide proxy objects and direct JS values
                  const shouldContinue = typeof result.toJs === 'function' ? result.toJs() : result;
                  
                  if (!shouldContinue) {
                    // Animation is complete or errored
                    cancelAnimationFrame(instanceState.animationFrameId);
                    instanceState.animationFrameId = null;
                    output.innerText += "\\\\nAnimation complete.";
                    return;
                  }
                  frame++;
                } catch (error) {
                  output.innerHTML += \\\`\\\\n<span class="error">Error in animation: \\\${error.message}</span>\\\`;
                  cancelAnimationFrame(instanceState.animationFrameId);
                  instanceState.animationFrameId = null;
                  return;
                }
              }
              instanceState.animationFrameId = requestAnimationFrame(animationLoop);
            }
            
            // Start the animation
            instanceState.animationFrameId = requestAnimationFrame(animationLoop);
            output.innerText = "Animation running...";
            
          } catch (error) {
            output.innerHTML = \\\`<span class="error">Error: \\\${error.message || String(error)}</span>\\\`;
            console.error("Python execution error:", error);
            
            // Re-enable the run button and disable animation controls
            runButton.disabled = false;
            pauseButton.disabled = true;
            resetButton.disabled = true;
          }
        });
        
        // Check if Pyodide is already loaded when visible
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            // When the component becomes visible, check if Pyodide is loaded
            pyodidePromise.then(() => {
              output.innerText = "Python environment ready. Click 'Run Animation' to execute.";
            }).catch(error => {
              output.innerText = \\\`Error loading Python: \\\${error.message}\\\`;
              console.error("Failed to load Pyodide:", error);
            });
            observer.disconnect();
          }
        });
        
        observer.observe(container);
      });
    }

    // Initialize when DOM is loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeComponents);
    } else {
      initializeComponents();
    }
    
    // Also initialize when window fully loads (backup)
    window.addEventListener("load", initializeComponents);
  })();
<\/script>`])), maybeRenderHead(), addAttribute(uniqueId, "data-component-id"), code, addAttribute(`outputCanvas_${uniqueId}`, "id"));
}, "/Users/kmangutov/idetest/apps/site/src/components/PyodideMatplotlib.astro", void 0);

export { $$PyodideMatplotlib as $ };
