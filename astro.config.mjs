import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import nodejs from '@astrojs/node';
import react from '@astrojs/react';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
  output: 'hybrid',
  integrations: [tailwind({
    applyBaseStyles: false
  }),, react()]
});