import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

// GitHub Pages configuration with repository name
const REPO_NAME = 'browser-ide'; // ← replace with your actual repo name
const OUT_DIR = 'dist';

// https://astro.build/config
export default defineConfig({
  site: 'https://kmangutov.github.io',
  base: `/${REPO_NAME}`,
  outDir: '../../docs',
  integrations: [
    mdx()
  ],
  markdown: {
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: 'github-dark',
        keepBackground: true
      }]
    ]
  },
  vite: {
    build: {
      // Prevent inlining assets to ensure they get proper base path applied
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          // Ensure assets are in the assets folder to maintain proper paths
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/chunks/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  }
});
