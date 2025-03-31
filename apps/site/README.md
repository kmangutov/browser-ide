# ML Blog Site

This is an Astro-based blog/documentation site for the browser-ide project.

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

- `src/` - Source files for the site
  - `pages/` - Astro/MDX pages
  - `components/` - Reusable UI components
  - `layouts/` - Page layouts
  - `utils/` - Shared JavaScript utilities
- `public/` - Static assets that will be copied to the site root
  - `js/` - JavaScript files for client-side functionality
  - `media/` - Images, videos, and other media files
- `docs/` - Build output (used by GitHub Pages)

## 🌐 GitHub Pages Deployment

We use a static base path approach for GitHub Pages compatibility:

1. The base path is set in `astro.config.mjs`:
   ```js
   const REPO_NAME = 'browser-ide';
   base: `/${REPO_NAME}`
   ```

2. All paths are automatically rewritten by Astro to include the repository name.

3. For local development, this still works fine because Astro handles the base path.

4. To deploy:
   ```bash
   npm run build
   git add ../../docs
   git commit -m "Build site for GitHub Pages"
   git push
   ```

See [DEPLOY.md](./DEPLOY.md) for more detailed deployment instructions.

## 🧩 Adding Static Assets

Place all static assets in the `public/` directory:

```
public/js/pyodide-loader.js
public/media/animation.gif
```

Reference these assets in your MDX/HTML without the base path:

```html
<script src="/js/pyodide-loader.js"></script>
<img src="/media/animation.gif" />
```

Astro will automatically transform these to include the repository name when built:

```html
<script src="/browser-ide/js/pyodide-loader.js"></script>
<img src="/browser-ide/media/animation.gif" />
```

## 🔗 Component Links & Navigation

When creating links in components or pages, use Astro's `import.meta.env.BASE_URL` to ensure paths work correctly in both local development and on GitHub Pages:

```astro
---
// At the top of your .astro file
const baseUrl = import.meta.env.BASE_URL;
// Ensure baseUrl ends with a slash for path concatenation
const basePath = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
// Get repository name for checking if already in URLs
const repoName = baseUrl.replace(/\//g, '');

// Helper function to prevent path duplication
function fixUrl(url) {
  if (!url) return baseUrl;
  
  // If URL already contains the repo name, use it directly
  if (url.includes(repoName) && repoName !== '') {
    return url;
  }
  
  // Otherwise add the base path
  if (url.startsWith('/')) {
    return `${basePath}${url.substring(1)}`;
  }
  
  return `${basePath}${url}`;
}
---

<a href={baseUrl}>Home</a>
<a href={`${basePath}blog/`}>Blog</a>

<!-- For dynamic URLs (e.g., from a collection) -->
{posts.map(post => (
  <a href={fixUrl(post.url)}>{post.title}</a>
))}
```

This approach prevents URL duplication (like `/browser-ide/browser-ide/path`), which can happen when Astro auto-prepends the base path and then our code adds it again. 