#!/usr/bin/env python3

"""
Build script for the ML Blog site.
Automatically handles path changes for different environments.

NOTE: This script is preserved for reference, but the recommended approach
is now to use the static base path in astro.config.mjs:

```js
const REPO_NAME = 'browser-ide'; // ← replace with your actual repo name
base: `/${REPO_NAME}`
```

This approach works for both local development and GitHub Pages without
requiring any configuration changes between environments.

Usage:
  python build.py [environment]

Arguments:
  environment: 'local' (default) or 'gh-pages'

Options:
  --repo-name NAME: Override the default repository name
  --no-restore: Don't restore the original config after build
"""

import os
import sys
import re
import shutil
import subprocess
import argparse

# Parse command line arguments
parser = argparse.ArgumentParser(description='Build the ML Blog site for different environments.')
parser.add_argument('environment', nargs='?', default='local', choices=['local', 'gh-pages'],
                    help="Target environment: 'local' or 'gh-pages' (default: local)")
parser.add_argument('--repo-name', default='browser-ide',
                    help="Repository name for GitHub Pages (default: browser-ide)")
parser.add_argument('--no-restore', action='store_true',
                    help="Don't restore the original config after build")
args = parser.parse_args()

# Get the script's directory and config file path
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_FILE = os.path.join(SCRIPT_DIR, "astro.config.mjs")

# Function to update the BASE_PATH in the config file
def update_base_path(config_file, repo_name=None, is_local=True):
    with open(config_file, 'r') as f:
        content = f.read()
    
    if is_local:
        # Set for local development
        updated_content = re.sub(
            r"const BASE_PATH = '/[^/]*/'",
            "const BASE_PATH = '/'",
            content
        )
        print("Setting BASE_PATH to '/'")
    else:
        # Set for GitHub Pages
        repo_path = f'/{repo_name}/' if repo_name else '/browser-ide/'
        updated_content = re.sub(
            r"const BASE_PATH = '/'",
            f"const BASE_PATH = '{repo_path}'",
            content
        )
        print(f"Setting BASE_PATH to '{repo_path}'")
    
    with open(config_file, 'w') as f:
        f.write(updated_content)

# Main build process
def main():
    # Make sure the config file exists
    if not os.path.exists(CONFIG_FILE):
        print(f"Error: Config file not found at {CONFIG_FILE}")
        print(f"Current directory: {os.getcwd()}")
        print(f"Script directory: {SCRIPT_DIR}")
        return 1
        
    # Make a backup of the original config
    backup_file = f"{CONFIG_FILE}.bak"
    shutil.copy2(CONFIG_FILE, backup_file)
    print(f"Backed up {CONFIG_FILE} to {backup_file}")
    
    try:
        # Update the config file
        is_local = args.environment == 'local'
        update_base_path(CONFIG_FILE, args.repo_name, is_local)
        
        # Run the build command from the script directory
        print("\nRunning build...")
        os.chdir(SCRIPT_DIR)
        build_result = subprocess.run(['npm', 'run', 'build'], check=False)
        
        if build_result.returncode == 0:
            print("\n✅ Build completed successfully!")
            
            # If building for GitHub Pages, suggest next steps
            if args.environment == 'gh-pages':
                print("\nTo deploy to GitHub Pages, you can use:")
                print("  git add ../../docs")
                print("  git commit -m \"Build site for GitHub Pages\"")
                print("  git push")
        else:
            print("\n❌ Build failed!")
            
    finally:
        # Restore original config unless --no-restore was specified
        if not args.no_restore:
            shutil.move(backup_file, CONFIG_FILE)
            print(f"\nRestored original configuration from {backup_file}")
        else:
            print(f"\nKeeping modified configuration (backup at {backup_file})")
    
    return 0

if __name__ == "__main__":
    sys.exit(main()) 