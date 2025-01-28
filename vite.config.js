import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteRestart from "vite-plugin-restart";
import glsl from "vite-plugin-glsl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl(),
    ViteRestart({
      restart: ["../static/**", "./src/shaders/**/*.glsl"],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
