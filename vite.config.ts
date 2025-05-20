import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3030,
    open: true,
  },
  publicDir: "public",
  optimizeDeps: {
    include: ["react-quill"],
  },
  build: {
    commonjsOptions: {
      include: [/react-quill/, /node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          tinymce: ["tinymce"],
        },
      },
    },
  },
});
