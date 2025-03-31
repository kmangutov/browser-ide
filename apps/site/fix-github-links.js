#!/usr/bin/env node

/**
 * This script fixes any absolute links in the built HTML files
 * to ensure they work correctly on GitHub Pages with the repository name in the URL.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// GitHub repository name - adjust this as needed
const REPO_NAME = 'browser-ide';

// Output directory
const OUTPUT_DIR = path.resolve(__dirname, '../../docs');

console.log('Fixing absolute paths for GitHub Pages...');

// Find all HTML files in the output directory
glob(`${OUTPUT_DIR}/**/*.html`, (err, files) => {
  if (err) {
    console.error('Error finding HTML files:', err);
    process.exit(1);
  }

  let fixedCount = 0;

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Fix absolute paths in href and src attributes
    // This regex looks for href="/path" or src="/path" and replaces with href="/REPO_NAME/path"
    content = content.replace(
      /(href|src)="\/(?!${REPO_NAME}\/)([^"]*)/g, 
      `$1="/${REPO_NAME}/$2`
    );

    // Fix CSS url() references
    content = content.replace(
      /url\(\s*\/(?!${REPO_NAME}\/)([^)]*)/g,
      `url(/${REPO_NAME}/$1`
    );

    // Only write the file if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files out of ${files.length} total.`);
  console.log('Done!');
}); 