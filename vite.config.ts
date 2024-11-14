import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig, type UserConfig } from "vite";
import type { InlineConfig } from "vitest/node";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"]
  }
} as UserConfig & {
  test: InlineConfig;
});
