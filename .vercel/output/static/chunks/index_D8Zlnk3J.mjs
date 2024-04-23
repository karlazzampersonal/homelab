/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, h as renderSlot, e as renderComponent, g as addAttribute, f as renderScript, F as Fragment, s as spreadAttributes, n as defineStyleVars, i as renderHead } from './astro/server_BvFHs0WQ.mjs';
import 'kleur/colors';
import { fileURLToPath } from 'node:url';
import { s as starlightConfig, a as slugToLocaleData, b as slugToParam, l as localizedSlug, c as localizedId, d as localeToLang, e as slugToPathname, u as useTranslations, $ as $$Icon } from './Icon_BjRoQ2g_.mjs';
import { basename, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { g as getCollection } from './_astro_content_CadJbCmy.mjs';
/* empty css                         */
import 'clsx';
import * as z from 'zod';
import { $ as $$NavLink } from './NavLink_BqRDz7_7.mjs';
import { $ as $$Image } from './_astro_assets_C3bg04vv.mjs';

const project = {"build":{"format":"directory"},"root":"file:///Users/karlazzam/IdeaProjects/homelab/","srcDir":"file:///Users/karlazzam/IdeaProjects/homelab/src/","trailingSlash":"ignore"};

const PAGE_TITLE_ID = "_top";

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings)
    injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

function getNewestCommitDate(file) {
  const result = spawnSync("git", ["log", "--format=%ct", "--max-count=1", basename(file)], {
    cwd: dirname(file),
    encoding: "utf-8"
  });
  if (result.error) {
    throw new Error(`Failed to retrieve the git history for file "${file}"`);
  }
  const output = result.stdout.trim();
  const regex = /^(?<timestamp>\d+)$/;
  const match = output.match(regex);
  if (!match?.groups?.timestamp) {
    throw new Error(`Failed to validate the timestamp for file "${file}"`);
  }
  const timestamp = Number(match.groups.timestamp);
  const date = new Date(timestamp * 1e3);
  return date;
}

function ensureLeadingSlash(href) {
  if (href[0] !== "/")
    href = "/" + href;
  return href;
}
function ensureTrailingSlash(href) {
  if (href[href.length - 1] !== "/")
    href += "/";
  return href;
}
function stripLeadingSlash(href) {
  if (href[0] === "/")
    href = href.slice(1);
  return href;
}
function stripTrailingSlash(href) {
  if (href[href.length - 1] === "/")
    href = href.slice(0, -1);
  return href;
}
function stripLeadingAndTrailingSlashes(href) {
  href = stripLeadingSlash(href);
  href = stripTrailingSlash(href);
  return href;
}
function stripHtmlExtension(path) {
  const pathWithoutTrailingSlash = stripTrailingSlash(path);
  return pathWithoutTrailingSlash.endsWith(".html") ? pathWithoutTrailingSlash.slice(0, -5) : path;
}
function ensureHtmlExtension(path) {
  path = stripLeadingAndTrailingSlashes(path);
  if (!path.endsWith(".html")) {
    path = path ? path + ".html" : "/index.html";
  }
  return ensureLeadingSlash(path);
}

const base = stripTrailingSlash("/");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: {
    addBase: pathWithBase,
    handleExtension: (href) => stripHtmlExtension(href)
  }
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.addBase(href);
  href = formatStrategy.handleExtension(href);
  if (format === "file")
    return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});

function pickLang(dictionary, lang) {
  return dictionary[lang];
}

const logos = {};

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err)
      throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
const docs = (await getCollection("docs") ?? []).map(
  ({ slug, ...entry }) => ({
    ...entry,
    slug: normalizeIndexSlug(slug)
  })
);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  if (starlightConfig.isMultilingual) {
    const defaultLocaleDocs = getLocaleDocs(
      starlightConfig.defaultLocale?.locale === "root" ? void 0 : starlightConfig.defaultLocale?.locale
    );
    for (const key in starlightConfig.locales) {
      if (key === starlightConfig.defaultLocale.locale)
        continue;
      const localeConfig = starlightConfig.locales[key];
      if (!localeConfig)
        continue;
      const locale = key === "root" ? void 0 : key;
      const localeDocs = getLocaleDocs(locale);
      for (const fallback of defaultLocaleDocs) {
        const slug = localizedSlug(fallback.slug, locale);
        const id = localizedId(fallback.id, locale);
        const doesNotNeedFallback = localeDocs.some((doc) => doc.slug === slug);
        if (doesNotNeedFallback)
          continue;
        routes2.push({
          entry: fallback,
          slug,
          id,
          isFallback: true,
          lang: localeConfig.lang || "en",
          locale,
          dir: localeConfig.dir,
          entryMeta: slugToLocaleData(fallback.slug)
        });
      }
    }
  }
  return routes2;
}
const routes = getRoutes();
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function getLocaleDocs(locale) {
  return filterByLocale(docs, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes) {
  if ("link" in item) {
    return linkFromConfig(item, locale, currentPathname);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes, currentPathname);
  } else {
    return {
      type: "group",
      label: pickLang(item.translations, localeToLang(locale)) || item.label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes)),
      collapsed: item.collapsed,
      badge: item.badge
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes.filter(
    (doc) => (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(doc.id) === localeDir || // Match against `foo/anything/else.md`.
      doc.id.startsWith(localeDir + "/")
    )
  );
  const tree = treeify(dirDocs, localeDir);
  return {
    type: "group",
    label: pickLang(item.translations, localeToLang(locale)) || item.label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: item.badge
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromConfig(item, locale, currentPathname) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale)
      href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeLink(href, label, currentPathname, item.badge, item.attrs);
}
function makeLink(href, label, currentPathname, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  const isCurrent = pathsMatch(encodeURI(href), currentPathname);
  return { type: "link", label, href, isCurrent, badge, attrs: attrs ?? {} };
}
function pathsMatch(pathA, pathB) {
  const format = createPathFormatter({ trailingSlash: "never" });
  return format(pathA) === format(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir)
    return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function treeify(routes, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes.filter((doc) => !doc.entry.data.sidebar.hidden).sort((a, b) => b.id.split("/").length - a.id.split("/").length).forEach((doc) => {
    const parts = getBreadcrumbs(doc.id, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route, currentPathname) {
  return makeLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    currentPathname,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder)
      return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute, currentPathname);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
function getSidebar(pathname, locale) {
  const routes = getLocaleRoutes(locale);
  if (starlightConfig.sidebar) {
    return starlightConfig.sidebar.map((group) => configItemToEntry(group, pathname, locale, routes));
  } else {
    const tree = treeify(routes, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false)
    return void 0;
  else if (config2 === true)
    return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink(config2.link, config2.label, "");
    }
  }
  return paginationEnabled ? link : void 0;
}
const stripExtension = (path) => path.replace(/\.\w+$/, "");

function generateRouteData({
  props,
  url
}) {
  const { entry, locale } = props;
  const sidebar = getSidebar(url.pathname, locale);
  return {
    ...props,
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props),
    labels: useTranslations(locale).all()
  };
}
function getToC({ entry, locale, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig)
    return;
  const t = useTranslations(locale);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    const currentFilePath = fileURLToPath(new URL("src/content/docs/" + entry.id, project.root));
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(currentFilePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry, id, isFallback }) {
  const { editUrl } = entry.data;
  if (editUrl === false)
    return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (starlightConfig.editLink.baseUrl) {
    const srcPath = project.srcDir.replace(project.root, "");
    const filePath = isFallback ? localizedId(id, starlightConfig.defaultLocale.locale) : id;
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + srcPath + "content/docs/" + filePath;
  }
  return url ? new URL(url) : void 0;
}

const $$Astro$C = createAstro("https://screwfast.uk");
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.props.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-laz2plt2">${unescapeHTML(banner.content)}</div>`}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$Astro$B = createAstro("https://screwfast.uk");
const $$ContentPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$ContentPanel;
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$A = createAstro("https://screwfast.uk");
const $$FallbackContentNotice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  const { labels } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-hz523pza"> ${renderComponent($$result, "Icon", $$Icon, { "name": "warning", "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-hz523pza" })}<span class="astro-hz523pza">${labels["i18n.untranslatedContent"]}</span> </p> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$z = createAstro("https://screwfast.uk");
const $$EditLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl, labels } = Astro2.props;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex astro-eez2twj6">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-eez2twj6" })}${labels["page.editLink"]}</a>`}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);

const $$Astro$y = createAstro("https://screwfast.uk");
const $$LastUpdated = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { labels, lang, lastUpdated } = Astro2.props;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${labels["page.lastUpdated"]}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time></p>`}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$x = createAstro("https://screwfast.uk");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, labels, pagination } = Astro2.props;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links astro-u2l5gyhi"${addAttribute(dir, "dir")}> ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${labels["page.previousLink"]} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${prev.label}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${labels["page.nextLink"]} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${next.label}</span> </span> </a>`} </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

const $$Astro$w = createAstro("https://screwfast.uk");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n"> ${renderComponent($$result, "EditLink", $$EditLink, { ...Astro2.props, "class": "astro-3yyafb3n" })} ${renderComponent($$result, "LastUpdated", $$LastUpdated, { ...Astro2.props, "class": "astro-3yyafb3n" })} </div> ${renderComponent($$result, "Pagination", $$Pagination, { ...Astro2.props, "class": "astro-3yyafb3n" })} </footer> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const version = "0.21.5";

const HeadConfigSchema = () => z.array(
  z.object({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: z.enum(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: z.record(z.union([z.string(), z.boolean(), z.undefined()])).default({}),
    /** Content to place inside the tag (optional). */
    content: z.string().default("")
  })
).default([]);

const HeadSchema = HeadConfigSchema();
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr)
    return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title")
    return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

function localizedUrl(url, locale) {
  url = new URL(url);
  if (!starlightConfig.locales) {
    return url;
  }
  if (locale === "root")
    locale = "";
  const base = "/".replace(/\/$/, "");
  const hasBase = url.pathname.startsWith(base);
  if (hasBase)
    url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  const htmlExt = ".html";
  const isRootHtml = baseSegment?.endsWith(htmlExt);
  const baseSlug = isRootHtml ? baseSegment?.slice(0, -1 * htmlExt.length) : baseSegment;
  if (baseSlug && baseSlug in starlightConfig.locales) {
    if (locale) {
      url.pathname = url.pathname.replace(baseSlug, locale);
    } else if (isRootHtml) {
      url.pathname = "/index.html";
    } else {
      url.pathname = url.pathname.replace("/" + baseSlug, "");
    }
  } else if (locale) {
    if (baseSegment === "index.html") {
      url.pathname = "/" + locale + ".html";
    } else {
      url.pathname = "/" + locale + url.pathname;
    }
  }
  if (hasBase)
    url.pathname = base + url.pathname;
  return url;
}

const $$Astro$v = createAstro("https://screwfast.uk");
const $$Head$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Head$1;
  const { entry, lang } = Astro2.props;
  const { data } = entry;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${starlightConfig.title}` },
    { tag: "link", attrs: { rel: "canonical", href: canonical?.href } },
    { tag: "meta", attrs: { name: "generator", content: Astro2.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonical?.href } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: starlightConfig.title } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    },
    { tag: "meta", attrs: { name: "twitter:title", content: data.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: description } }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (canonical && starlightConfig.isMultilingual) {
    for (const locale in starlightConfig.locales) {
      const localeOpts = starlightConfig.locales[locale];
      if (!localeOpts)
        continue;
      headDefaults.push({
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: localeOpts.lang,
          href: localizedUrl(canonical, locale).href
        }
      });
    }
  }
  if (Astro2.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  if (starlightConfig.social?.twitter) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(starlightConfig.social.twitter.url).pathname
      }
    });
  }
  const head = createHead(headDefaults, starlightConfig.head, data.head);
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$u = createAstro("https://screwfast.uk");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/astro/components/ViewTransitions.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$t = createAstro("https://screwfast.uk");
const $$ReplacementSwap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ReplacementSwap;
  const { rootAttributesToPreserve = "" } = Astro2.props;
  return renderTemplate`<meta name="vtbot-replace-swap"${addAttribute(rootAttributesToPreserve, "content")}>${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/astro-vtbot/components/ReplacementSwap.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/astro-vtbot/components/ReplacementSwap.astro", void 0);

const $$Astro$s = createAstro("https://screwfast.uk");
const $$StarlightConnector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$StarlightConnector;
  return renderTemplate`${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/astro-vtbot/components/starlight/StarlightConnector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/astro-vtbot/components/starlight/StarlightConnector.astro", void 0);

const $$Astro$r = createAstro("https://screwfast.uk");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    viewTransitionsFallback,
    replaceSidebarContent,
    retainCurrentPageMarker,
    "data-astro-transition-scope": mainTransitionScope
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": viewTransitionsFallback })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ReplacementSwap", $$ReplacementSwap, { "rootAttributesToPreserve": "data-theme" })} ${mainTransitionScope && renderTemplate`<meta name="vtbot-main-transition-scope"${addAttribute(mainTransitionScope, "content")}>`} ${replaceSidebarContent && renderTemplate`<meta name="vtbot-starlight-replace-sidebar-content" content="true">`} ${retainCurrentPageMarker && renderTemplate`<meta name="vtbot-starlight-retain-current-page-marker" content="true">`} ${renderComponent($$result, "StarlightConnector", $$StarlightConnector, {})}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/astro-vtbot/components/starlight/Base.astro", void 0);

const $$Astro$q = createAstro("https://screwfast.uk");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Head;
  Astro2.props.viewTransitionsFallback = "animate";
  return renderTemplate`${renderComponent($$result, "VtbotStarlight", $$Base, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StarlightHead", $$Head$1, { ...Astro2.props })} ` })} `;
}, "/Users/karlazzam/IdeaProjects/homelab/src/components/ui/starlight/Head.astro", void 0);

const $$Astro$p = createAstro("https://screwfast.uk");
const $$Select = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-4yphtoen"> <span class="sr-only astro-4yphtoen">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-4yphtoen" })} <select${addAttribute(Astro2.props.value, "value")} class="astro-4yphtoen"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-4yphtoen">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-4yphtoen" })} </label> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$o = createAstro("https://screwfast.uk");
const $$LanguageSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  function localizedPathname(locale) {
    return localizedUrl(Astro2.url, locale).pathname;
  }
  const { labels } = Astro2.props;
  return renderTemplate`${starlightConfig.isMultilingual && renderTemplate`${renderComponent($$result, "starlight-lang-select", "starlight-lang-select", {}, { "default": () => renderTemplate`${renderComponent($$result, "Select", $$Select, { "icon": "translate", "label": labels["languageSelect.accessibleLabel"], "value": localizedPathname(Astro2.props.locale), "options": Object.entries(starlightConfig.locales).map(([code, locale]) => ({
    value: localizedPathname(code),
    selected: code === Astro2.props.locale,
    label: locale.label
  })), "width": "7em" })}` })}`}${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

const $$Astro$n = createAstro("https://screwfast.uk");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Search;
  const { labels } = Astro2.props;
  const pagefindTranslations = {
    placeholder: labels["search.label"],
    ...Object.fromEntries(
      Object.entries(labels).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "data-translations": JSON.stringify(pagefindTranslations), "data-strip-trailing-slash": project.trailingSlash === "never", "class": "astro-v37mnknz" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled class="astro-v37mnknz">  ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "label": labels["search.label"], "class": "astro-v37mnknz" })} <span class="sl-hidden md:sl-block astro-v37mnknz" aria-hidden="true">${labels["search.label"]}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "forward-slash", "class": "sl-hidden md:sl-block astro-v37mnknz", "label": labels["search.shortcutLabel"] })} </button> <dialog style="padding:0"${addAttribute(labels["search.label"], "aria-label")} class="astro-v37mnknz"> <div class="dialog-frame sl-flex astro-v37mnknz">  <button data-close-modal class="sl-flex md:sl-hidden astro-v37mnknz"> ${labels["search.cancelLabel"]} </button> ${renderTemplate`<div class="search-container astro-v37mnknz"> <div id="starlight__search" class="astro-v37mnknz"></div> </div>`} </div> </dialog> ` })} ${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts")}  `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Search.astro", void 0);

const $$Astro$m = createAstro("https://screwfast.uk");
const $$SiteTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  Astro2.props.locale ? Astro2.props.locale + "/" : "";
  return renderTemplate`${maybeRenderHead()}<div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7 astro-cdy74xqe"> <!--<a class="main-logo" href={main} set:html={mainLogo} aria-label="ScrewFast" />--> <!--<a class="docs-logo" href={docs} set:html={docsLogo} aria-label="ScrewFast Docs" />--> ${renderComponent($$result, "NavLink", $$NavLink, { "url": "/blog", "name": "Blog", "class": "astro-cdy74xqe" })} ${renderComponent($$result, "NavLink", $$NavLink, { "url": "/welcome-to-docs", "name": "Documentation", "class": "astro-cdy74xqe" })} </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/src/components/ui/starlight/SiteTitle.astro", void 0);

const $$Astro$l = createAstro("https://screwfast.uk");
const $$SocialIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  const links = Object.entries(starlightConfig.social || {});
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-wy4te6ga" }, { "default": ($$result2) => renderTemplate`${links.map(([platform, { label, url }]) => renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} rel="me" class="sl-flex astro-wy4te6ga"><span class="sr-only astro-wy4te6ga">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": platform, "class": "astro-wy4te6ga" })}</a>`)}` })}`}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$k = createAstro("https://screwfast.uk");
const $$ThemeSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  const { labels } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "  <script>\n	StarlightThemeProvider.updatePickers();\n<\/script> ", ""])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": labels["themeSelect.accessibleLabel"], "value": "auto", "options": [
    { label: labels["themeSelect.dark"], selected: false, value: "dark" },
    { label: labels["themeSelect.light"], selected: false, value: "light" },
    { label: labels["themeSelect.auto"], selected: true, value: "auto" }
  ], "width": "6.25em" })} ` }), renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$Astro$j = createAstro("https://screwfast.uk");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Header;
  const shouldRenderSearch = starlightConfig.pagefind || starlightConfig.components.Search !== "@astrojs/starlight/components/Search.astro";
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-kmkmnagf"> <div class="title-wrapper sl-flex astro-kmkmnagf"> ${renderComponent($$result, "SiteTitle", $$SiteTitle, { ...Astro2.props, "class": "astro-kmkmnagf" })} </div> <div class="sl-flex astro-kmkmnagf"> ${shouldRenderSearch && renderTemplate`${renderComponent($$result, "Search", $$Search, { ...Astro2.props, "class": "astro-kmkmnagf" })}`} </div> <div class="sl-hidden md:sl-flex right-group astro-kmkmnagf"> <div class="sl-flex social-icons astro-kmkmnagf"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-kmkmnagf" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { ...Astro2.props, "class": "astro-kmkmnagf" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-kmkmnagf" })} </div> </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Header.astro", void 0);

const $$Astro$i = createAstro("https://screwfast.uk");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { link, variant, icon } = Astro2.props;
  const { class: customClass, ...attrs } = Astro2.props.attrs || {};
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([["sl-flex action", variant, customClass], "astro-yjy4zhro"], "class:list")}${addAttribute(link, "href")}${spreadAttributes(attrs)}> ${renderSlot($$result, $$slots["default"])} ${icon?.type === "icon" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "1.5rem", "class": "astro-yjy4zhro" })}`} ${icon?.type === "raw" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon.html)}` })}`} </a> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/CallToAction.astro", void 0);

const $$Astro$h = createAstro("https://screwfast.uk");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-jbfsktt5"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-jbfsktt5"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-jbfsktt5" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-jbfsktt5">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-jbfsktt5"> <div class="sl-flex copy astro-jbfsktt5"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-jbfsktt5">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-jbfsktt5">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-jbfsktt5"> ${actions.map(({ text, ...attrs }) => renderTemplate`${renderComponent($$result, "CallToAction", $$CallToAction, { ...attrs, "class": "astro-jbfsktt5" }, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div>`} </div> </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const $$Astro$g = createAstro("https://screwfast.uk");
const $$MarkdownContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$MarkdownContent;
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$Astro$f = createAstro("https://screwfast.uk");
const $$MobileMenuToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  const { labels } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "astro-jif73yzw" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(labels["menuButton.accessibleLabel"], "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-jif73yzw"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "astro-jif73yzw" })} </button> ` })} ${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}  `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$e = createAstro("https://screwfast.uk");
const $$PageFrame = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar, labels } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-vrdttmbt"> <header class="header astro-vrdttmbt">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar astro-vrdttmbt"${addAttribute(labels["sidebarNav.accessibleLabel"], "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { ...Astro2.props, "class": "astro-vrdttmbt" })} <div id="starlight__sidebar" class="sidebar-pane astro-vrdttmbt"> <div class="sidebar-content sl-flex astro-vrdttmbt"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-vrdttmbt">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$d = createAstro("https://screwfast.uk");
const $$TableOfContentsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-g2bywc46"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <span class="astro-g2bywc46"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-g2bywc46" })}`} </li>`)} </ul> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$c = createAstro("https://screwfast.uk");
const $$MobileTableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { labels, toc } = Astro2.props;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-doynk5tl" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-doynk5tl"><details id="starlight__mobile-toc" class="astro-doynk5tl"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-doynk5tl"><div class="toggle sl-flex astro-doynk5tl">${labels["tableOfContents.onThisPage"]}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-doynk5tl", "size": "1rem" })}</div><span class="display-current astro-doynk5tl"></span></summary><div class="dropdown astro-doynk5tl">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-doynk5tl" })}</div></details></nav>` })}`}${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$b = createAstro("https://screwfast.uk");
const $$TableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { labels, toc } = Astro2.props;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${labels["tableOfContents.onThisPage"]}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}${renderScript($$result, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$a = createAstro("https://screwfast.uk");
const $$PageSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.props.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-pb3aqygn" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-pb3aqygn">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { ...Astro2.props, "class": "astro-pb3aqygn" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-pb3aqygn"><div class="sl-container astro-pb3aqygn">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { ...Astro2.props, "class": "astro-pb3aqygn" })}</div></div>` })}`}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$PageTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-j6tvhyss">${Astro2.props.entry.data.title}</h1> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$MobileMenuFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MobileMenuFooter;
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-wu23bvmt"> <div class="sl-flex social-icons astro-wu23bvmt"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-wu23bvmt" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { ...Astro2.props, "class": "astro-wu23bvmt" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-wu23bvmt" })} </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "default", text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([["sl-badge", variant], "astro-vohx2lp7"], "class:list")}>${unescapeHTML(text)}</span> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Badge.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$SidebarSublist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-3ii7xxms"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-3ii7xxms"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-3ii7xxms"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-3ii7xxms" }, { "default": ($$result2) => renderTemplate`${" "}${renderComponent($$result2, "Badge", $$Badge, { "text": entry.badge.text, "variant": entry.isCurrent ? "outline" : entry.badge.variant, "class": "astro-3ii7xxms" })} ` })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-3ii7xxms"> <summary class="astro-3ii7xxms"> <div class="group-label astro-3ii7xxms"> <span class="large astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-3ii7xxms" }, { "default": ($$result2) => renderTemplate`${" "}${renderComponent($$result2, "Badge", $$Badge, { "text": entry.badge.text, "variant": entry.badge.variant, "class": "astro-3ii7xxms" })} ` })}`} </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-3ii7xxms", "size": "1.25rem" })} </summary> ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-3ii7xxms" })} </details>`} </li>`)} </ul> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, { ...Astro2.props })} </div>`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$SkipLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SkipLink;
  const { labels } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-7q3lir66">${labels["skipLink.label"]}</a> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://screwfast.uk");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$TwoColumnContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-67yu43on"> ${Astro2.props.toc && renderTemplate`<aside class="right-sidebar-container astro-67yu43on"> <div class="right-sidebar astro-67yu43on"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-67yu43on">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const pagefindEnabled = Astro2.props.entry.slug !== "404" && !Astro2.props.entry.slug.endsWith("/404") && Astro2.props.entry.data.pagefind !== false;
  return renderTemplate`<html${addAttribute(Astro2.props.lang, "lang")}${addAttribute(Astro2.props.dir, "dir")}${addAttribute(Boolean(Astro2.props.toc), "data-has-toc")}${addAttribute(Astro2.props.hasSidebar, "data-has-sidebar")}${addAttribute(Boolean(Astro2.props.entry.data.hero), "data-has-hero")} data-theme="dark" class="astro-bguv2lll"> <head>${renderComponent($$result, "Head", $$Head, { ...Astro2.props, "class": "astro-bguv2lll" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { ...Astro2.props, "class": "astro-bguv2lll" })}${renderHead()}</head> <body class="astro-bguv2lll"> ${renderComponent($$result, "SkipLink", $$SkipLink, { ...Astro2.props, "class": "astro-bguv2lll" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result3) => renderTemplate`  <main${addAttribute(pagefindEnabled, "data-pagefind-body")}${addAttribute(Astro2.props.entryMeta.lang, "lang")}${addAttribute(Astro2.props.entryMeta.dir, "dir")} class="astro-bguv2lll">  ${renderComponent($$result3, "Banner", $$Banner, { ...Astro2.props, "class": "astro-bguv2lll" })} ${Astro2.props.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { ...Astro2.props, "class": "astro-bguv2lll" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$Footer, { ...Astro2.props, "class": "astro-bguv2lll" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { ...Astro2.props, "class": "astro-bguv2lll" })} ${Astro2.props.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { ...Astro2.props, "class": "astro-bguv2lll" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$Footer, { ...Astro2.props, "class": "astro-bguv2lll" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", ...Astro2.props, "class": "astro-bguv2lll" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", ...Astro2.props, "class": "astro-bguv2lll" })}`, "sidebar": ($$result2) => renderTemplate`${Astro2.props.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", ...Astro2.props, "class": "astro-bguv2lll" })}`}` })} </body></html>`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/components/Page.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { Content, headings } = await Astro2.props.entry.render();
  const route = generateRouteData({ props: { ...Astro2.props, headings }, url: Astro2.url });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...route }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/index.astro", void 0);

const $$file = "/Users/karlazzam/IdeaProjects/homelab/node_modules/@astrojs/starlight/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, getStaticPaths, prerender, $$url as url };
