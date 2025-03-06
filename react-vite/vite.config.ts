import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const components = path.resolve(__dirname, "src/components");
const server = path.resolve(__dirname, "../express-server");
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@components": components,
      "@server": server,
    } as AliasOptions,
  },
});
