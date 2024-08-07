import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astrositetemplate.netlify.app/",
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    css: {
      transformer: "sass",
    },
  },
});
