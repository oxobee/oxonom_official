import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // Enable source map for production debugging (optional, remove if you want smaller builds)
      // sourcemap: false,

      // Chunk splitting — separate heavy libs so home page loads only what it needs
      rollupOptions: {
        output: {
          manualChunks: {
            // Core React runtime — always tiny & cached
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            // Animation library — loaded after main content
            'vendor-motion': ['motion'],
            // Chart library — only needed on sector pages
            'vendor-recharts': ['recharts'],
            // Icons — shared across all pages
            'vendor-icons': ['lucide-react'],
          },
        },
      },

      // Increase inline limit so small assets are inlined instead of extra requests
      assetsInlineLimit: 4096,

      // CSS code splitting keeps bundle lean
      cssCodeSplit: true,

      // Target modern browsers — smaller, faster output
      target: 'es2020',

      // Minify aggressively
      minify: 'esbuild',
    },
  };
});
