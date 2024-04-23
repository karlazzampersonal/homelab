/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, f as renderScript, m as maybeRenderHead } from './astro/server_BvFHs0WQ.mjs';
import 'kleur/colors';
import { S as SITE, $ as $$MainLayout } from './MainLayout_B84Dishj.mjs';
import { $ as $$Image } from './_astro_assets_C3bg04vv.mjs';
import { g as getCollection } from './_astro_content_CadJbCmy.mjs';
/* empty css                          */

const $$Astro = createAstro("https://screwfast.uk");
async function getStaticPaths() {
  const insightPosts = await getCollection("insights");
  return insightPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const pageTitle = `${post.data.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-6 sm:py-8 lg:py-12"> <div class="mx-auto max-w-screen-xl px-4 md:px-8"> <div class="grid gap-8 md:grid-cols-2 lg:gap-12"> <div> <div class="h-64 overflow-hidden rounded-lg shadow-lg md:h-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-full object-cover object-center", "src": post.data.cardImage, "alt": post.data.cardImageAlt, "draggable": "false", "format": "avif" })} </div> <div id="progress-mobile" class="fixed left-0 top-0 h-2 w-full bg-gradient-to-r from-orange-400/30 to-orange-400 md:hidden"></div> <div id="pin" class="mt-10 hidden space-y-4 md:block"> <div class="h-px w-full overflow-hidden bg-neutral-300 dark:bg-neutral-700"> <div id="progress" class="h-px w-full bg-gradient-to-r from-orange-400/30 to-orange-400"></div> </div> <p class="text-pretty text-sm font-light text-neutral-500">
Table of Contents:
</p> <div id="toc" class=""> <ul class="space-y-2 text-pretty text-base text-neutral-700 transition duration-300 dark:text-neutral-400"></ul> </div> </div> </div> <div class="md:pt-8"> <h1 class="mb-4 text-balance text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl md:mb-6 md:text-left"> ${post.data.title} </h1> <article class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> </div> </div> </section> ` })}  ${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/src/pages/insights/[...slug].astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/src/pages/insights/[...slug].astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/src/pages/insights/[...slug].astro", void 0);

const $$file = "/Users/karlazzam/IdeaProjects/homelab/src/pages/insights/[...slug].astro";
const $$url = "/insights/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
