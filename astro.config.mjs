import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://homelab-coral.vercel.app/",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    fallback: {
      fr: "en",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en", // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
        },
      },
    }),
    starlight({
      title: "Karl's homelab",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Quick Start Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Architecture",
          items: [
            { label: "High level Architecture", link: "architecture/high-level-architecture/" },
            // { label: "Equipment Care", link: "architecture/equipment-care/" },
          ],
        },
        {
          label: "IAC (infrastructure as code)",
          autogenerate: { directory: "iac" },
        },
      ],
      social: {
        github: "https://github.com/karlazzampersonal/homelab/tree/main",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercelStatic(),
});
