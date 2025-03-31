/**
 * Helper utility for generating paths that work in both development and production
 * environments (GitHub Pages with repository name in path)
 */

/**
 * Resolves a URL path to work in both development and production.
 * Uses the base path from Astro's environment.
 * 
 * @param {string} path - The path to resolve (should start with /)
 * @returns {string} The resolved path
 */
export function getPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Get the base URL from Astro's environment (configured in astro.config.mjs)
  const baseUrl = import.meta.env.BASE_URL;
  
  // Combine base URL with the path, ensuring no double slashes
  const baseWithoutTrailingSlash = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;
    
  return `${baseWithoutTrailingSlash}/${cleanPath}`;
}

/**
 * Generates a navigation link with the correct base path
 * @param {string} path - The path to navigate to (should start with /)
 * @returns {string} The full URL
 */
export function navLink(path) {
  return getPath(path);
} 