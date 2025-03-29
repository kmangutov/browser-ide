// Default Python code for the editor
const DEFAULT_CODE = `# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Load the Iris dataset
X, y = load_iris(return_X_y=True)

# Choose a single target variable (first component of iris output)
y = y.astype(float)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Calculate metrics
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Print results
print(f"Model: Linear Regression")
print(f"Mean Squared Error: {mse:.4f}")
print(f"R² Score: {r2:.4f}")
print(f"Coefficients: {model.coef_}")
print(f"Intercept: {model.intercept_}")

# Create results dictionary
results = {
    "model_type": "LinearRegression",
    "mse": float(mse),
    "r2": float(r2),
    "coefficients": model.coef_.tolist(),
    "intercept": float(model.intercept_),
    "y_test": y_test.tolist(),
    "y_pred": y_pred.tolist()
}

# Explicitly return the results dictionary as the last expression
results`;

// CodeMirror editor instance
let editor;

// Function to log messages to our console UI element
function logToConsole(message) {
  const consoleElement = document.getElementById('console');
  consoleElement.textContent += message + '\n';
}

// Clear console
function clearConsole() {
  const consoleElement = document.getElementById('console');
  consoleElement.textContent = '';
}

// Override console.log to also display in our UI
const originalConsoleLog = console.log;
console.log = function() {
  originalConsoleLog.apply(console, arguments);
  logToConsole(Array.from(arguments).join(' '));
};

// Show a status message
function showStatus(message, isError = false) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = message;
  statusElement.className = isError ? 'error' : 'success';
}

// Display results in the results panel
function displayResults(results) {
  const resultsElement = document.getElementById('results');
  
  // Check if results is undefined or doesn't have expected properties
  if (!results || typeof results !== 'object') {
    resultsElement.innerHTML = '<p class="error">Error: Invalid results returned from Python code.</p>';
    console.error('Invalid results object:', results);
    return;
  }
  
  // Create a table for metrics
  let html = '<h3>Metrics</h3>';
  html += '<table>';
  html += '<tr><th>Metric</th><th>Value</th></tr>';
  
  // Safely access properties with fallbacks
  const mse = results.mse !== undefined ? results.mse : 'N/A';
  const r2 = results.r2 !== undefined ? results.r2 : 'N/A';
  
  html += `<tr><td>Mean Squared Error</td><td>${typeof mse === 'number' ? mse.toFixed(4) : mse}</td></tr>`;
  html += `<tr><td>R² Score</td><td>${typeof r2 === 'number' ? r2.toFixed(4) : r2}</td></tr>`;
  html += '</table>';
  
  // Model parameters
  html += '<h3>Model Parameters</h3>';
  html += '<table>';
  html += '<tr><th>Parameter</th><th>Value</th></tr>';
  
  const intercept = results.intercept !== undefined ? results.intercept : 'N/A';
  html += `<tr><td>Intercept</td><td>${typeof intercept === 'number' ? intercept.toFixed(4) : intercept}</td></tr>`;
  
  // Coefficients
  if (results.coefficients && Array.isArray(results.coefficients)) {
    results.coefficients.forEach((coef, index) => {
      html += `<tr><td>Coefficient ${index+1}</td><td>${typeof coef === 'number' ? coef.toFixed(4) : coef}</td></tr>`;
    });
  }
  html += '</table>';
  
  // Add export option
  html += '<h3>Export</h3>';
  html += '<button id="exportButton">Export Results as JSON</button>';
  
  resultsElement.innerHTML = html;
  
  // Add event listener for export button
  document.getElementById('exportButton').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(results, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "ml_results.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
}

// Initialize CodeMirror editor
function initCodeEditor() {
  editor = CodeMirror(document.getElementById('codeEditor'), {
    value: DEFAULT_CODE,
    mode: 'python',
    theme: 'monokai',
    lineNumbers: true,
    indentUnit: 4,
    lineWrapping: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    extraKeys: {
      "Tab": function(cm) {
        cm.replaceSelection("    ", "end");
      }
    }
  });
}

// Setup run button click handler
function setupRunButton(pyodide) {
  const runButton = document.getElementById('runButton');
  
  runButton.addEventListener('click', async () => {
    // Clear previous output
    clearConsole();
    
    // Disable button during execution
    runButton.disabled = true;
    showStatus("Training model...");
    
    try {
      // Get code from the editor
      const code = editor.getValue();
      
      // Add code to explicitly convert values to JavaScript compatible format
      const enhancedCode = `
${code}

# Create a JavaScript-friendly version of the results
import json
js_friendly_results = {
    "model_type": results["model_type"],
    "mse": float(results["mse"]),
    "r2": float(results["r2"]),
    "coefficients": [float(c) for c in results["coefficients"]],
    "intercept": float(results["intercept"]),
    "y_test": [float(y) for y in results["y_test"]],
    "y_pred": [float(y) for y in results["y_pred"]]
}
js_friendly_results_json = json.dumps(js_friendly_results)
      `;
      
      // Run the enhanced code
      await pyodide.runPythonAsync(enhancedCode);
      
      // Get the JSON string and parse it
      const resultsJson = pyodide.globals.get('js_friendly_results_json');
      const jsResults = JSON.parse(resultsJson);
      
      console.log("Code executed successfully!");
      console.log("Results from Python (JSON):", jsResults);
      
      // Display results
      displayResults(jsResults);
      showStatus("Model trained successfully!");
    } catch (error) {
      console.error("Error executing code:", error);
      showStatus("Error: " + error.message, true);
    } finally {
      // Re-enable button
      runButton.disabled = false;
    }
  });
}

// Main application
async function main() {
  console.log("Starting Pyodide...");
  
  // Initialize the code editor
  initCodeEditor();
  
  try {
    // Load Pyodide
    const pyodide = await loadPyodide();
    console.log("Pyodide loaded successfully!");
    
    // Load required packages
    console.log("Loading scikit-learn, numpy, and pandas...");
    await pyodide.loadPackage(["scikit-learn", "numpy", "pandas"]);
    console.log("ML packages loaded successfully!");
    
    // Set up the run button
    setupRunButton(pyodide);
    
    // Hide loading, show app
    document.getElementById('loading').style.display = 'none';
    document.getElementById('app').classList.remove('hidden');
    
  } catch (error) {
    console.error("Error loading Pyodide:", error);
    document.getElementById('loading').innerHTML = `
      <p>Error loading application: ${error.message}</p>
      <p>Please check the console for more details.</p>
    `;
  }
}

// Load Pyodide when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
  script.onload = main;
  document.head.appendChild(script);
}); 