import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  output: "static",
  site: "https://montreuil.dev",
});
