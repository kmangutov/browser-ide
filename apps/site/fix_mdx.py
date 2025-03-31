#!/usr/bin/env python3

import os
import re
import glob

def fix_mdx_files(directory):
    # Find all MDX files in the directory and subdirectories
    mdx_files = glob.glob(f"{directory}/**/*.mdx", recursive=True)
    
    print(f"Found {len(mdx_files)} MDX files to process")
    
    for file_path in mdx_files:
        with open(file_path, 'r') as file:
            content = file.read()
        
        # Replace HTML comments with JSX style comments
        # Pattern: <!-- Some comment --> -> {/* Some comment */}
        modified_content = re.sub(r'<!--\s*(.*?)\s*-->', r'{/* \1 */}', content)
        
        if content != modified_content:
            with open(file_path, 'w') as file:
                file.write(modified_content)
            print(f"Fixed comments in {file_path}")

if __name__ == "__main__":
    # Set the directory to the ml-story directory
    fix_mdx_files("src/pages/blog/ml-story")
    print("Done") 