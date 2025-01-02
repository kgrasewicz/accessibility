import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  define: {
    "process.env": process.env,
    VITE_VERCEL_API_BASE: process.env.VITE_VERCEL_API_BASE,
  },
  server: {
    proxy: {
      "/proxy": {
        target:
          process.env.VITE_VERCEL_API_BASE ??
          "https://dqe7mdlwux6uw5nrj26l2pjxz40pkfde.lambda-url.eu-north-1.on.aws",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/proxy/, ""),
      },
    },
  },
});
