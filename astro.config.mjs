import { defineConfig } from 'astro/config';
import biome from "astro-biome";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [biome(), tailwind(), react()]
});