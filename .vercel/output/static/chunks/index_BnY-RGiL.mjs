/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BvFHs0WQ.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_B84Dishj.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_D1qOONiV.mjs';
import { $ as $$CardSmall, a as $$CardWide, b as $$FeaturesStatsAlt, c as $$TestimonialsSectionAlt } from './TestimonialsSectionAlt_BRMyrxmG.mjs';
import { g as getCollection } from './_astro_content_CadJbCmy.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products")).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Produits";
  const subTitle = "Explorez la durabilit\xE9 et la pr\xE9cision des outils ScrewFast, con\xE7us aussi bien pour les professionnels que pour les amateurs. Chacun de nos produits est fabriqu\xE9 avec pr\xE9cision et con\xE7u pour durer, garantissant que vous disposez du bon outil pour chaque t\xE2che.";
  const testimonials = [
    {
      content: "Depuis que nous avons adopt\xE9 les outils mat\xE9riels de ScrewFast, l'efficacit\xE9 sur nos chantiers de construction a explos\xE9. La durabilit\xE9 des boulons hexagonaux et la pr\xE9cision des vis machine sont tout simplement in\xE9gal\xE9es. C'est rafra\xEEchissant de travailler avec une entreprise qui comprend vraiment les exigences quotidiennes de l'industrie.",
      author: "Jason Clark",
      role: "Contrema\xEEtre de chantier | TopBuild",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "En tant que designer d'int\xE9rieur, je suis toujours \xE0 la recherche de mat\xE9riaux et d'outils de haute qualit\xE9 qui m'aident \xE0 donner vie \xE0 mes visions. L'assortiment de vis mixtes de ScrewFast a r\xE9volutionn\xE9 mes projets, offrant le m\xE9lange parfait de qualit\xE9 et de vari\xE9t\xE9. Le support client exceptionnel \xE9tait la cerise sur le g\xE2teau !",
      author: "Maria Gonzalez",
      role: "Designer d'int\xE9rieur | Creative Spaces",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "Je suis menuisier professionnel depuis plus de 15 ans, et je peux sinc\xE8rement dire que les boulons et \xE9crous \xE0 tarauder de ScrewFast sont parmi les meilleurs que j'ai utilis\xE9s. Ils adh\xE8rent comme aucun autre, et j'ai une confiance totale dans chaque joint et \xE9l\xE9ment. De plus, le service est impeccable - ils se soucient vraiment du succ\xE8s de mon projet.",
      author: "Richard Kim",
      role: "Menuisier-Ma\xEEtre | WoodWright",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Products | ScrewFast", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/products",
    url: "https://screwfast.uk/products",
    name: "Hardware Tools | ScrewFast",
    description: "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk",
      name: "ScrewFast",
      description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Histoires de clients", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Pourquoi choisir ScrewFast ?", "subTitle": "Transformez vos id\xE9es en r\xE9sultats tangibles avec les outils ScrewFast. Que vous commenciez par un croquis sur un coin de table ou plongiez dans un projet de construction complet, nos outils sont con\xE7us pour vous aider \xE0 construire en toute confiance.", "benefits": [
    "Outils robustes et fiables pour des performances durables.",
    "Solutions innovantes adapt\xE9es aux besoins de construction modernes.",
    "Support client d\xE9di\xE9 au succ\xE8s de votre projet."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "Ce que disent nos clients", "testimonials": testimonials })} ` })}`;
}, "/Users/karlazzam/IdeaProjects/homelab/src/pages/fr/products/index.astro", void 0);

const $$file = "/Users/karlazzam/IdeaProjects/homelab/src/pages/fr/products/index.astro";
const $$url = "/fr/products";

export { $$Index as default, $$file as file, $$url as url };
