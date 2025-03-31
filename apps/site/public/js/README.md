# Pyodide Web Worker Architecture

This directory contains JavaScript files that implement a Web Worker-based architecture for running Pyodide in the browser, specifically optimized for matplotlib animations.

## Architecture Overview

The implementation consists of three main components:

1. **pyodide-worker.js** - A Web Worker that loads Pyodide and executes Python code in a background thread
2. **pyodide-manager.js** - A manager class that provides a clean API to communicate with the worker
3. **pyodide-loader.js** - A utility module that handles loading dependencies and provides path resolution for GitHub Pages

This architecture offers several advantages:

- **Improved Performance**: By moving Python execution to a background thread, the UI remains responsive
- **Throttled Animation**: Frame rate is capped to maintain performance
- **Resource Management**: Clean lifecycle management for workers and resources
- **Error Handling**: Robust error handling and recovery
- **GitHub Pages Support**: Path resolution for deployment on GitHub Pages

## How It Works

1. The main thread creates a PyodideManager instance
2. PyodideManager spawns a Web Worker and initializes Pyodide in the background
3. When running Python code, the code is sent to the worker for execution
4. For animations, the worker computes each frame and sends it back to the main thread
5. The main thread throttles the frame rate and updates the UI

## Usage

### Basic Usage in Astro Components

```astro
---
import PyodideMatplotlib from '../components/PyodideMatplotlib.astro';
---

<PyodideMatplotlib code={`
import numpy as np
import matplotlib.pyplot as plt

class MyAnimation(AnimationHelper):
    def setup(self):
        self.fig, self.ax = plt.subplots()
        # Setup code here
        
    def update(self, frame):
        # Update code for each frame
        return True  # Continue animation
        
animation = MyAnimation()
`} />
```

### Configuring the Manager

You can configure the PyodideManager with custom options:

```javascript
const pyodideManager = await createPyodideManager({
  // Path to the worker script (automatically resolved for GitHub Pages)
  workerUrl: '/js/pyodide-worker.js',
  
  // Packages to preload in Pyodide
  packages: ['matplotlib', 'numpy', 'scikit-learn'],
  
  // Target frame rate for animations (fps)
  targetFps: 30,
  
  // Maximum time to wait for a response from the worker (ms)
  messageTimeout: 30000
});
```

### Animation Helper Class

The animation system uses a class-based approach. Your Python code should:

1. Define a class that inherits from `AnimationHelper`
2. Implement the `setup()` method for initialization
3. Implement the `update(frame)` method for each animation frame
4. Assign an instance to the `animation` variable

```python
class MyAnimation(AnimationHelper):
    def setup(self):
        # Initialize figure, axes, and data
        self.fig, self.ax = plt.subplots()
        self.line, = self.ax.plot([], [])
        self.ax.set_xlim(0, 10)
        self.ax.set_ylim(-1, 1)
        
        # You can set animation parameters
        self.max_frames = 120  # Total frames
        
    def update(self, frame):
        # Update for each frame
        x = np.linspace(0, 10, 100)
        y = np.sin(x - frame/10)
        self.line.set_data(x, y)
        
        return True  # Return False to stop animation
        
    def cleanup(self):
        # Optional: cleanup when animation stops
        pass

# Create the animation instance
animation = MyAnimation()
```

### Event Handling

The PyodideManager provides an event system to respond to different states:

```javascript
// Listen for output from Python
pyodideManager.on('output', (data) => {
  console.log('Python output:', data.output);
});

// Listen for animation frames
pyodideManager.on('frame', (data) => {
  // data.imageData contains the base64 image
  // data.frameNumber is the current frame number
  // data.isLastFrame is true if this is the final frame
});

// Listen for errors
pyodideManager.on('error', (data) => {
  console.error('Error:', data.error);
});

// Other events: animationStarted, animationPaused, 
// animationResumed, animationStopped, animationCompleted
```

## Performance Tips

1. **Minimize DOM Updates**: Update only what has changed in each frame
2. **Throttle Frame Rate**: Lower the targetFps for complex animations
3. **Reuse Objects**: In your animation code, reuse objects instead of creating new ones
4. **Use Efficient Data Structures**: Numpy arrays are more efficient than Python lists
5. **Limit Animation Length**: Keep animations reasonably short
6. **Optimize Figure Size**: Smaller figures require less data transfer

## GitHub Pages Deployment

The system automatically handles path resolution for GitHub Pages. Make sure:

1. Your `astro.config.mjs` has the correct `base` setting:
   ```js
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name',
     // ...
   });
   ```

2. You add the meta tag for base URL detection:
   ```html
   <meta name="base-url" content={basePath} />
   ```

## Browser Compatibility

This implementation requires:
- Web Workers support
- ES6+ JavaScript
- Import/export statement support

These are available in all modern browsers (Chrome, Firefox, Safari, Edge). 