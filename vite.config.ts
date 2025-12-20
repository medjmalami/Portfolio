import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import prerender from "@prerenderer/rollup-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ["/en", "/fr", "/ar"],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        renderAfterDocumentEvent: "render-complete",
        timeout: 30000,
      },
      postProcess(renderedRoute) {
        // Remove HTML comments to reduce file size
        renderedRoute.html = renderedRoute.html.replace(/<!--.*?-->/g, "")
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
