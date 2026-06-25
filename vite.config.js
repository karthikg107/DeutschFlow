import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: "/",

  plugins: [react()],

  server: command === "serve"
    ? {
        host: true,
        proxy: {
          "/api": {
            target: "http://localhost:5000",
            changeOrigin: true,
          },
        },
      }
    : { host: true },
}));
