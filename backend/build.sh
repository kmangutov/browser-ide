#!/bin/bash
# Simple script to prepare Python files for the frontend

set -e  # Exit on error

# Get the current directory
BACKEND_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( dirname "$BACKEND_DIR" )"

echo "Preparing Python files for the frontend..."

# Define output directories
FRONTEND_DIR="$REPO_ROOT/frontend/python"
DIST_DIR="$REPO_ROOT/dist"

# Create output directories if they don't exist
mkdir -p "$FRONTEND_DIR"
mkdir -p "$DIST_DIR"

# Copy the Python files to output directories
echo "Copying Python files to output directories..."
cp math_functions.py "$FRONTEND_DIR/"
cp math_module_wrapper.py "$FRONTEND_DIR/"
cp math_functions.py "$DIST_DIR/"
cp math_module_wrapper.py "$DIST_DIR/"

echo "Build complete! Python files are in:"
echo "- $FRONTEND_DIR"
echo "- $DIST_DIR" 