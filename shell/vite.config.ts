import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        fleet: "http://localhost:3001/assets/remoteEntry.js",
        financial: "http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ]
});
