import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_Dwqtw0BB.mjs';
import { b as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, d as renderTemplate, e as renderComponent, u as unescapeHTML } from './astro/server_BvFHs0WQ.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://screwfast.uk", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('./post-1_C73abMKm.mjs'),"/src/content/blog/post-2.md": () => import('./post-2_9l_JlsMp.mjs'),"/src/content/blog/post-3.md": () => import('./post-3_C-5IP31t.mjs'),"/src/content/docs/architecture/equipment-care.mdx": () => import('./equipment-care_BUxDu0Oj.mjs'),"/src/content/docs/architecture/high-level-architecture.mdx": () => import('./high-level-architecture_B9Hl16cW.mjs'),"/src/content/docs/guides/debian-iso-install.mdx": () => import('./debian-iso-install_D7nR_tAS.mjs'),"/src/content/docs/guides/installing-debian-minipc.mdx": () => import('./installing-debian-minipc_DcPbDYHR.mjs'),"/src/content/docs/iac/ansible.mdx": () => import('./ansible_B7i9MraP.mjs'),"/src/content/docs/iac/service-overview.mdx": () => import('./service-overview_CYXCYWIP.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_dKFlSZRh.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_D4qRA_Vf.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_BlaGG5TN.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_DDgdJoba.mjs'),"/src/content/products/a765.md": () => import('./a765_BSZ-LZcR.mjs'),"/src/content/products/b203.md": () => import('./b203_BgYrSWhC.mjs'),"/src/content/products/f303.md": () => import('./f303_DRrhXI39.mjs'),"/src/content/products/t845.md": () => import('./t845_xlZJc_gl.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"post-2":"/src/content/blog/post-2.md","post-3":"/src/content/blog/post-3.md","post-1":"/src/content/blog/post-1.md"}},"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","iac/ansible":"/src/content/docs/iac/ansible.mdx","iac/service-overview":"/src/content/docs/iac/service-overview.mdx","architecture/equipment-care":"/src/content/docs/architecture/equipment-care.mdx","architecture/high-level-architecture":"/src/content/docs/architecture/high-level-architecture.mdx","guides/debian-iso-install":"/src/content/docs/guides/debian-iso-install.mdx","guides/installing-debian-minipc":"/src/content/docs/guides/installing-debian-minipc.mdx"}},"insights":{"type":"content","entries":{"insight-1":"/src/content/insights/insight-1.md","insight-2":"/src/content/insights/insight-2.md","insight-3":"/src/content/insights/insight-3.md"}},"products":{"type":"content","entries":{"a765":"/src/content/products/a765.md","b203":"/src/content/products/b203.md","f303":"/src/content/products/f303.md","t845":"/src/content/products/t845.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('./post-1_BFHWjI3N.mjs'),"/src/content/blog/post-2.md": () => import('./post-2_BFED6cvE.mjs'),"/src/content/blog/post-3.md": () => import('./post-3_DNRNA_os.mjs'),"/src/content/docs/architecture/equipment-care.mdx": () => import('./equipment-care_CpDkJf4P.mjs'),"/src/content/docs/architecture/high-level-architecture.mdx": () => import('./high-level-architecture_Cs4TXDd6.mjs'),"/src/content/docs/guides/debian-iso-install.mdx": () => import('./debian-iso-install_c5QuQryk.mjs'),"/src/content/docs/guides/installing-debian-minipc.mdx": () => import('./installing-debian-minipc_CTTrHQaB.mjs'),"/src/content/docs/iac/ansible.mdx": () => import('./ansible_BtiedwRL.mjs'),"/src/content/docs/iac/service-overview.mdx": () => import('./service-overview_SKdb8LzR.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_WdRg-X0K.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_N48grlcn.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_ChoBZQWy.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_DDGal4sG.mjs'),"/src/content/products/a765.md": () => import('./a765_B5FoXcbl.mjs'),"/src/content/products/b203.md": () => import('./b203_BY6gBnzy.mjs'),"/src/content/products/f303.md": () => import('./f303_LqHLNft1.mjs'),"/src/content/products/t845.md": () => import('./t845_BUTMnWYm.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export { getCollection as g };
