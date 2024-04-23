import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BvFHs0WQ.mjs';
import { $ as $$Image } from './_astro_assets_C3bg04vv.mjs';
import 'clsx';

const frontmatter = {
  "title": "High level Architecture",
  "description": "Explore homelab documentation for an in-depth look at the architecture.",
  "sidebar": {
    "label": "High level Architecture",
    "order": 1
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "TBD"
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/architecture/high-level-architecture.mdx";
const file = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/architecture/high-level-architecture.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/architecture/high-level-architecture.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
