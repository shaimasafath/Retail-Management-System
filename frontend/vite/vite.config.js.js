// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Allow access not only from localhost but also from other hosts (like ngrok)
    host: true,
    port: 5173,
    allowedHosts: [
      // Your exact ngrok host (no https://, no trailing slash)
      "locustlike-offenselessly-margrett.ngrok-free.dev",

      // Optionally allow any ngrok free domain (future tunnels)
      ".ngrok-free.app",
      ".ngrok-free.dev"
    ]
  }
});
