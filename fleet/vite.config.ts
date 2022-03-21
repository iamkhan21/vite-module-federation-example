import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: "fleet",
      filename: "remoteEntry.js",
      exposes: {
        "./FleetRouter": "./src/FleetRouter.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
  },
});
