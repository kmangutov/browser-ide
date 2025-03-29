# Browser-based ML IDE

A client-side only Machine Learning IDE that runs entirely in your browser using Pyodide to execute Python code with scikit-learn, numpy, and pandas.

## Features

- **100% Client-side Processing**: All machine learning code runs directly in your browser with no server dependencies
- **Pre-configured ML Environment**: Includes scikit-learn, numpy, and pandas loaded via WebAssembly
- **Built-in Dataset**: Uses the Iris dataset from scikit-learn
- **Code Editor**: Customize the ML model and training process
- **Results Visualization**: View metrics and model parameters
- **Export Capability**: Download results as JSON

## Project Structure

- `index.html`: Web interface for the ML IDE with built-in code editor
- `serve.sh`: Script to serve the project locally with CORS support

## Prerequisites

- A modern web browser with WebAssembly support
- Python 3.6+ (only needed for running the local development server)

## Quick Start

Simply serve the project directory with a web server:

```bash
./serve.sh
```

Then open your browser to http://localhost:8000

## How It Works

1. The browser loads Pyodide (v0.25.0) from CDN
2. Pyodide initializes and loads scikit-learn, numpy, and pandas packages
3. User can edit the ML code in the browser editor
4. When "Train Model" is clicked, the Python code runs directly in the browser
5. Results are displayed in the UI, including metrics and model parameters
6. Results can be exported as JSON

## Technical Details

### Pyodide Integration

This project demonstrates using Pyodide to run Python scientific computing libraries directly in the browser via WebAssembly:

1. Pyodide loads a complete Python environment
2. Scientific packages (scikit-learn, numpy, pandas) are loaded from Pyodide's CDN
3. Python code execution happens entirely client-side

### Machine Learning Workflow

The default implementation showcases:
- Loading the Iris dataset
- Splitting data into training and test sets
- Training a Linear Regression model
- Evaluating model performance with metrics
- Displaying coefficients and predictions

## Extending the Project

You can extend this project by:
- Adding support for more ML models
- Implementing data visualization with matplotlib or Plotly
- Adding file upload for custom datasets
- Implementing hyperparameter tuning
- Adding a model persistence feature

## Troubleshooting

If you encounter any issues:

1. Make sure you're using a modern browser with WebAssembly support
2. Check the browser console for detailed error messages
3. Be patient during initial loading - scikit-learn and other packages take time to load in the browser
4. If you get a "File is not a zip file" error, try clearing your browser cache
