#!/bin/bash
set -e

# Display script banner
echo "====================================================="
echo "  Publishing to GitHub Pages"
echo "====================================================="

# 1. Build Astro site (outputs to docs/ directory)
echo "Building Astro site..."
cd apps/site
npm run build
cd ../..

# 2. Copy playground files to docs/playground/
echo "Copying playground files..."
mkdir -p docs/playground
cp -r apps/playground/* docs/playground/

# 3. Generate .nojekyll file to prevent Jekyll processing
touch docs/.nojekyll

echo "====================================================="
echo "  Build complete! Files ready in docs/ directory"
echo "====================================================="
echo ""
echo "To deploy to GitHub Pages:"
echo "1. git add docs"
echo "2. git commit -m \"Update GitHub Pages\""
echo "3. git push"
echo ""
echo "Make sure your GitHub repository is configured to"
echo "publish from the 'docs' folder in repository settings."
echo "=====================================================" 