import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  server: {
    https: {
      key: fs.readFileSync("localhost-key.pem"),
      cert: fs.readFileSync("localhost.pem"),
    },
    host: "localhost",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@components": "/src/components",
    },
  },
});
