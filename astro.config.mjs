// @ts-check
import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://carlosiramosv.com",
  integrations: [alpinejs(), sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
