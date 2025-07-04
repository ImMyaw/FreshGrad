import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "ITPathArabic", "ITPathArabic", "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "ITPathArabic", "ITPathArabic", "shared"),
      "@assets": path.resolve(import.meta.dirname, "ITPathArabic", "ITPathArabic", "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "ITPathArabic", "ITPathArabic", "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "ITPathArabic", "ITPathArabic", "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});