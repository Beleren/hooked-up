import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite config for the hooked-up hooks sandbox.
 *
 * The `test` block configures Vitest, which reads this same file — one config
 * instead of a separate vitest.config.js.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    // Component tests need a DOM; Vitest's default environment is bare Node.
    environment: 'jsdom',
    // Exposes `test`/`expect` as globals, matching how the CRA jest setup worked
    // so test files don't need to import them.
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
