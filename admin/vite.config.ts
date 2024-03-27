import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiUrl = process.env.PRODUCTION_URL || "http://localhost:5173";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: apiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    cors: {
      origin: apiUrl,
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      preflightContinue: true,
    },
  },
});
