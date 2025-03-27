# Python to WebAssembly Project

A simple project demonstrating how to compile Python code to WebAssembly and run it in a browser.

## Structure

- `backend/`: Python code that can be run directly or compiled to WebAssembly
- `frontend/`: Web interface for running the WebAssembly binary
- `dist/`: Output directory for compiled WebAssembly files

## Quick Start

### 1. Setup the Environment

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
deactivate
```

### 2. Run the Backend Directly

```bash
cd backend
source venv/bin/activate
python main.py
deactivate
```

### 3. Build the WASM Binary

```bash
cd backend
./build.sh
```

This will compile the Python code to WebAssembly and copy the output to both `frontend/wasm/` and `dist/` directories.

### 4. Serve the Frontend

```bash
cd frontend
./serve.sh
```

Then open your browser to http://localhost:8000

## How It Works

1. The Python backend contains a simple math function (`add`) in `math_functions.py`
2. The `build.sh` script compiles this to WebAssembly using Pyodide
3. The frontend loads the compiled WebAssembly module
4. When the module is successfully loaded, calculations run using the WASM binary
5. If the WASM module fails to load, it falls back to a built-in implementation

## Dependencies

- Python 3.6+
- pyodide-build (installed via pip)
- Web browser with WebAssembly support

## Scripts

- `backend/build.sh`: Simple script to compile Python to WebAssembly
- `frontend/serve.sh`: Simple wrapper around Python's built-in HTTP server
