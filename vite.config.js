import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      open: true,
    },
    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 20000,
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.js"], // Fixed: use an array here
    },
  };
});
