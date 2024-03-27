import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiUrl = process.env.VITE_VERCEL_URL || "http://localhost:5173";

function getBaseUrl() {
  return process.env.VERCEL_ENV === "production"
    ? "https://logicgatesblog-9da8a03a3c58.herokuapp.com"
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : ` http://localhost:5173`;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_VERCEL_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    cors: {
      origin: getBaseUrl(),
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      preflightContinue: true,
    },
  },
});
