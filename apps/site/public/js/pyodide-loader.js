// This module handles loading Pyodide in a consistent way
// It can be imported by multiple components without duplicate loading

// Cache the pyodide loading promise globally
let pyodideReadyPromise = null;

// Detect the base URL for GitHub Pages compatibility
const detectBasePath = () => {
  // Try to get from the current script
  const scripts = document.getElementsByTagName('script');
  for (const script of scripts) {
    const src = script.getAttribute('src') || '';
    if (src.includes('pyodide-loader.js')) {
      // Extract the base path from the script URL
      return src.substring(0, src.lastIndexOf('/js/pyodide-loader.js'));
    }
  }
  
  // Fallback: try to get from meta tag
  const baseUrlMeta = document.querySelector('meta[name="base-url"]');
  if (baseUrlMeta) {
    const baseUrl = baseUrlMeta.getAttribute('content') || '';
    // Ensure it doesn't end with a slash
    return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  }
  
  // Default to empty string (relative paths)
  return '';
};

// Get the base path for all assets
const basePath = detectBasePath();

/**
 * Resolves a path relative to the base path
 * @param {string} path - Path to resolve
 * @returns {string} - Resolved path
 */
export function resolvePath(path) {
  // If the path already starts with the base path or is absolute, return as is
  if (path.startsWith(basePath) || path.startsWith('http') || path.startsWith('/')) {
    return path;
  }
  
  // Remove leading slash if present in both base path and path
  if (basePath.endsWith('/') && path.startsWith('/')) {
    return `${basePath}${path.substring(1)}`;
  }
  
  // Add slash if neither has one
  if (!basePath.endsWith('/') && !path.startsWith('/')) {
    return `${basePath}/${path}`;
  }
  
  // Otherwise just concatenate
  return `${basePath}${path}`;
}

/**
 * Initializes Pyodide with the specified packages
 * @param {Array<string>} packages - Array of packages to load
 * @returns {Promise<any>} - The pyodide instance
 */
export async function initPyodide(packages = []) {
  if (!pyodideReadyPromise) {
    pyodideReadyPromise = (async function() {
      console.log("Loading Pyodide...");
      
      // Load the Pyodide script if not already loaded
      if (!window.loadPyodide) {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
        document.head.appendChild(script);
        await new Promise(resolve => {
          script.onload = resolve;
        });
      }
      
      // Initialize Pyodide
      const pyodide = await window.loadPyodide();
      console.log("Pyodide loaded successfully!");
      
      // Load requested packages
      if (packages.length > 0) {
        console.log(`Loading packages: ${packages.join(", ")}...`);
        await pyodide.loadPackage(packages);
        console.log("Packages loaded successfully!");
      }
      
      return pyodide;
    })();
  }
  
  return pyodideReadyPromise;
}

/**
 * Creates a PyodideManager instance with the correct paths
 * @param {Object} config - Configuration options
 * @returns {Promise<PyodideManager>} - The PyodideManager instance
 */
export async function createPyodideManager(config = {}) {
  // Load the PyodideManager class
  const { PyodideManager } = await import(resolvePath('/js/pyodide-manager.js'));
  
  // Create and return a configured instance
  return new PyodideManager({
    workerUrl: resolvePath('/js/pyodide-worker.js'),
    packages: ['matplotlib', 'numpy'],
    targetFps: 30,
    ...config
  });
}

/**
 * Loads CodeMirror and its dependencies
 * @returns {Promise<void>}
 */
export async function loadCodeMirror() {
  const scriptUrls = [
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/python/python.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/addon/edit/matchbrackets.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/addon/edit/closebrackets.min.js"
  ];
  
  // Load each script in sequence
  for (const url of scriptUrls) {
    await new Promise((resolve, reject) => {
      // Check if script is already loaded
      if (document.querySelector(`script[src="${url}"]`)) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
}

/**
 * Creates a CodeMirror editor instance
 * @param {HTMLElement|string} element - Element or element ID to attach the editor to
 * @param {string} code - Initial code to display
 * @param {Object} options - Additional CodeMirror options
 * @returns {Object} - The CodeMirror instance
 */
export function createEditor(element, code, options = {}) {
  const el = typeof element === 'string' ? document.getElementById(element) : element;
  
  // Default options
  const defaultOptions = {
    value: code,
    mode: 'python',
    theme: 'monokai',
    lineNumbers: true,
    indentUnit: 4,
    lineWrapping: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    viewportMargin: Infinity,
    gutters: ["CodeMirror-linenumbers"],
    readOnly: false,
    extraKeys: {
      "Tab": function(cm) {
        cm.replaceSelection("    ", "end");
      }
    }
  };
  
  // Merge options
  const mergedOptions = { ...defaultOptions, ...options };
  
  // Create the editor
  const editor = CodeMirror(el, mergedOptions);
  
  // Refresh to ensure proper rendering
  setTimeout(() => {
    editor.refresh();
  }, 100);
  
  return editor;
} 