#!/bin/bash

# Script to build the site for different environments
# Usage: ./build.sh [local|gh-pages]

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CONFIG_FILE="$SCRIPT_DIR/astro.config.mjs"
ENV=${1:-"local"}  # Default to local if no argument provided

# Change to the script directory
cd "$SCRIPT_DIR"

# Make a backup of the original config
cp "$CONFIG_FILE" "${CONFIG_FILE}.bak"

echo "Building for environment: $ENV"

if [ "$ENV" == "gh-pages" ]; then
  # Replace the BASE_PATH for GitHub Pages
  sed -i.tmp "s#const BASE_PATH = '/'#const BASE_PATH = '/browser-ide/'#" "$CONFIG_FILE"
  echo "Set BASE_PATH to '/browser-ide/'"
else
  # Ensure BASE_PATH is set for local development
  sed -i.tmp "s#const BASE_PATH = '/browser-ide/'#const BASE_PATH = '/'#" "$CONFIG_FILE"
  echo "Set BASE_PATH to '/'"
fi

# Remove temp file created by sed on macOS
rm -f "${CONFIG_FILE}.tmp"

# Run the build
echo "Running build..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build completed successfully!"
  
  # If building for GitHub Pages, let's create a commit message template
  if [ "$ENV" == "gh-pages" ]; then
    echo ""
    echo "To deploy to GitHub Pages, you can use:"
    echo "git add ../../docs"
    echo "git commit -m \"Build site for GitHub Pages\""
    echo "git push"
  fi
else
  echo "Build failed!"
fi

# Restore the original config
mv "${CONFIG_FILE}.bak" "$CONFIG_FILE"
echo "Restored original configuration" 