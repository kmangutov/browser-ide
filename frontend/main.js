// Initialize Pyodide when the page loads
let pyodide;

async function initPyodide() {
    const output = document.getElementById('output');
    output.textContent = 'Loading Python environment...';
    
    try {
        pyodide = await loadPyodide();
        output.textContent = 'Python environment loaded successfully!\n';
        
        // Once Pyodide is loaded, load our Python module
        await loadPythonModules();
    } catch (error) {
        output.textContent = `Error initializing Python: ${error.message}`;
        console.error('Pyodide initialization error:', error);
    }
}

async function loadPythonModules() {
    const output = document.getElementById('output');
    try {
        // Fetch and load the math_functions.py file directly
        const response = await fetch('/python/math_functions.py');
        if (!response.ok) {
            throw new Error(`Failed to fetch math_functions.py: ${response.status} ${response.statusText}`);
        }
        
        const pythonCode = await response.text();
        
        // Create a virtual file in pyodide's file system
        pyodide.FS.writeFile('/math_functions.py', pythonCode);
        
        // Import the module
        await pyodide.runPythonAsync(`
            import sys
            sys.path.append('/')
            import math_functions
            print("Successfully loaded math_functions module")
        `);
        
        output.textContent += 'Python module loaded successfully!\n';
        output.textContent += 'Ready to perform calculations.\n';
    } catch (error) {
        output.textContent += `Error loading Python module: ${error.message}\n`;
        output.textContent += 'Using fallback implementation...\n';
        console.error('Python module loading error:', error);
        
        // Fallback to a direct implementation
        await pyodide.runPythonAsync(`
def add(a, b):
    return a + b

print("Using fallback implementation.")
`);
    }
}

// Call the function when the button is clicked
document.getElementById('calculate').addEventListener('click', async () => {
    if (!pyodide) {
        document.getElementById('output').textContent = 'Python environment is not loaded yet. Please wait...';
        return;
    }
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('output');
    
    try {
        // Use a much simpler approach - define a simple calculation function
        // that will directly return the result
        pyodide.runPython(`
def calculate(a, b):
    try:
        import math_functions
        result = math_functions.add(a, b)
        return result
    except ImportError:
        return add(a, b)
        `);
        
        // Now call this function with our numbers
        const result = pyodide.runPython(`calculate(${num1}, ${num2})`);
        output.textContent = `${num1} + ${num2} = ${result}`;
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
        console.error('Calculation error:', error);
    }
});

// Initialize Pyodide when the page loads
window.addEventListener('load', initPyodide); 