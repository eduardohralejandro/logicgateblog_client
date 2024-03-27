import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiUrl = process.env.VITE_VERCEL_URL || "http://localhost:5173";
console.log("on vite config");
console.log("on vite vercel url " + process.env.VITE_VERCEL_URL);
if (process.env.VITE_VERCEL_URL) {
  console.log("on vite vercel url " + process.env.VITE_VERCEL_URL);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://logicgatesblog-9da8a03a3c58.herokuapp.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    cors: {
      origin: "https://logicgatesblog-9da8a03a3c58.herokuapp.com",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      preflightContinue: true,
    },
  },
});
