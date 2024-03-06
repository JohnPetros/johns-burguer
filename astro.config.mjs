import { defineConfig } from 'astro/config';
import biome from "astro-biome";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [biome(), tailwind(), react()],
  adapter: vercel()
});