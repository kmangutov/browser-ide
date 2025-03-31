// This module handles loading Pyodide in a consistent way
// It can be imported by multiple components without duplicate loading

// Cache the pyodide loading promise globally
let pyodideReadyPromise = null;

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