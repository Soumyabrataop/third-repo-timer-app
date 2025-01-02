import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Default port is 5173, but you can change it here
  },
  build: {
    outDir: "dist", // Default output directory for production build
  },
});
