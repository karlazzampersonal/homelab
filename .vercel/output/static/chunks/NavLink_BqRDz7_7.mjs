import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, g as addAttribute, f as renderScript } from './astro/server_BvFHs0WQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://screwfast.uk");
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-600 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/src/components/ui/links/NavLink.astro", void 0);

export { $$NavLink as $ };
