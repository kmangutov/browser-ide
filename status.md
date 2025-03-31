# Project Status

## Completed
- Created monorepo structure (`apps/playground/` and `apps/site/`)
- Moved static Pyodide files to `apps/playground/`
- Added navigation bar to playground
- Styled navigation component
- Set up basic Astro blog
- Created PyodideEmbed component for interactive examples
- Created three blog posts:
  - Running scikit-learn in the browser
  - Using Manim to Visualize Algorithms
  - Narrative-Driven ML Curriculum
- Updated README.md with monorepo structure explanation
- Ensured GitHub Pages compatibility
- Fixed Pyodide I/O errors by:
  - Matching the playground's exact loading approach
  - Avoiding built-in datasets that require file access
  - Using synthetic data generation instead
  - Properly handling errors in the browser environment
- Fixed Python indentation error by removing problematic code wrapper
- Improved NumPy array serialization:
  - Added explicit `.tolist()` conversion for all NumPy arrays
  - Added try/except error handling in Python code
  - Enhanced error display in the PyodideEmbed component
- Fixed GitHub Pages deployment issues (branch 'debug'):
  - Resolved 404 errors for JavaScript resources on GitHub Pages
  - Modified script loading to use `is:inline` attribute in Astro components
  - Updated Vite configuration in `astro.config.mjs` for proper asset path handling
  - Added robust script initialization that works with both local and GitHub Pages environments
  - Ensured scripts load correctly with the repository base path prefix

## Branch Information
- `debug`: Contains fixes for GitHub Pages compatibility issues
- `beauty`: Works correctly in local development environment
- `main`: Has GitHub Pages deployment issues but runs correctly locally

## Next Steps
- Merge 'debug' branch fixes into 'main' once verified
- Create a more comprehensive testing workflow for GitHub Pages deployments
- Consider documenting the GitHub Pages deployment process for future reference

## GitHub Pages Issues Fixed
- **Problem**: JavaScript 404 errors when deployed to GitHub Pages
  - Scripts bundled by Astro weren't applying the base path correctly
  - Animations failed to run when clicking buttons
- **Solution**: 
  - Made scripts inline using `is:inline` attribute
  - Configured Vite to prevent asset inlining and ensure proper path prefixing
  - Added multiple initialization hooks for better script loading reliability
  - Used proper output naming with hashes for cache control

- Install dependencies and test Astro development server
- Test building the Astro site to the `/docs` directory
- Add more blog content over time
- Consider adding a build script to consolidate playground and blog for deployment 