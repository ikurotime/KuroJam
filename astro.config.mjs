import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: 'server',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()]
});