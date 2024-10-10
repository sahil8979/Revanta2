import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manual chunk splitting to optimize large dependencies
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lottie-web')) {
              return 'lottie-web'; // Separate chunk for lottie-web
            }
            return 'vendor'; // All other node_modules go into vendor chunk
          }
        },
      },
    },
    // Increase chunk size warning limit to 1000 KB (adjust if needed)
    chunkSizeWarningLimit: 1000,
  },
});
