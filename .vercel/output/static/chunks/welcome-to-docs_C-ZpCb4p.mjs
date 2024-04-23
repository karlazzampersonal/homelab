import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BvFHs0WQ.mjs';
import { $ as $$Image } from './_astro_assets_C3bg04vv.mjs';
/* empty css                                  */
import { $ as $$Card, b as $$CardGrid } from './Code_CvDz0wze.mjs';
import './Icon_BjRoQ2g_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Homelab Docs",
  "head": [{
    "tag": "title",
    "content": "Homelab Docs"
  }],
  "description": "Documentation to remember how I built this thing..",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Documentation hub",
    "tagline": "Central place of documentation, so I can reference how this homelab was built.",
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/guides/debian-iso-install/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "link": "https://github.com/karlazzampersonal/homelab/tree/main"
    }]
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
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "Quick Start Guides",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Quick references to actions performed in the homelab."
      })
    }), createVNode($$Card, {
      title: "Architecture",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "Breakdown of the Homelab Architecture"
      })
    }), createVNode($$Card, {
      title: "IaC",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "Documentation on the IaC automation for the homelab."
      })
    })]
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
const url = "src/content/docs/welcome-to-docs.mdx";
const file = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/welcome-to-docs.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
