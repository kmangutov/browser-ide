# Deploying to GitHub Pages

This guide explains how to deploy the site to GitHub Pages.

## 🚀 Simple Deployment Process

We've set the base path statically in `astro.config.mjs`:

```js
const REPO_NAME = 'browser-ide'; // ← replace with your actual repo name
base: `/${REPO_NAME}`
```

All static assets (JS, images, etc.) go in `apps/site/public/`. Astro automatically rewrites paths like `/js/foo.js` to `/browser-ide/js/foo.js`, so everything works both locally and on GitHub Pages with no extra configuration.

### Steps to Deploy

```bash
# Build the site (outputs to /docs folder for GitHub Pages)
cd apps/site
npm run build

# Add the generated files
git add ../../docs

# Commit the changes
git commit -m "Build site for GitHub Pages"

# Push to GitHub
git push
```

## Configure GitHub Pages

1. Go to your repository on GitHub
2. Go to Settings > Pages
3. Set the Source to "Deploy from a branch"
4. Select the branch (usually `main` or `master`)
5. Set the folder to `/docs`
6. Click Save

Your site should now be live at `https://your-username.github.io/browser-ide/` (or your custom repo name)!

## Local Development

The static base path approach works seamlessly for both local development and GitHub Pages:

```bash
# Start the development server
npm run dev
```

Astro handles all path rewrites automatically, so there's no need to change any configuration between development and production.

## 🔄 Changing the Repository Name

If you need to use a different repository name:

1. Edit `astro.config.mjs` and update the `REPO_NAME` constant:

```js
const REPO_NAME = 'your-new-repo-name';
```

2. Run the build command again.

```bash
npm run build
```

## Adding New Assets

Place all public assets in the `apps/site/public/` directory:

```
apps/site/public/js/pyodide-loader.js
apps/site/public/media/animation.gif
```

Reference these assets in your MDX/HTML with the base path included automatically:

```html
<script src="/js/pyodide-loader.js"></script>
<img src="/media/animation.gif" />
```

Astro will automatically transform these to:

```html
<script src="/browser-ide/js/pyodide-loader.js"></script>
<img src="/browser-ide/media/animation.gif" />
``` 