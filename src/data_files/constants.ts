import ogImageSrc from "@images/homelab-page-preview.jpeg";

export const SITE = {
  title: "Karl's homelab",
  tagline: "Another annoying blog",
  description: "If you want to start a homelab, you've come to the wrong place",
  description_short: "If you want to start a homelab, you've come to the wrong place",
  url: "https://homelab-coral.vercel.app/",
  author: "Karl Azzam",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Karl's homelab`,
  description: "If you want to start a homelab, you've come to the wrong place",
  image: ogImageSrc,
};
