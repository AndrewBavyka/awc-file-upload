import { defineConfig } from 'vite';


export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: 'AwcFileUpload',
      fileName: (format) => `index.${format}.js`,
      formats: ['iife']
    },
  }
});
