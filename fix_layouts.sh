#!/bin/bash

# Fix layout paths in all ML story MDX files
for file in apps/site/src/pages/blog/ml-story/*.mdx; do
  echo "Fixing layout in $file"
  sed -i '' 's/layout: ..\/..\/..\/layouts\/BlogPost.astro/layout: ..\/..\/..\/layouts\/BlogPostLayout.astro/g' "$file"
done

echo "All layout paths updated to BlogPostLayout.astro" 