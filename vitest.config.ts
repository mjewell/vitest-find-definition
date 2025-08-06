import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      headless: true,
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: "chromium" }],
    },
    testTimeout: 100,
  },
});
