// @ts-check
import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://carlosiramosv.com",
  integrations: [alpinejs(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
