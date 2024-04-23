import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BvFHs0WQ.mjs';
import { $ as $$Image } from './_astro_assets_C3bg04vv.mjs';
import { b as $$CardGrid, $ as $$Card, d as $$Steps } from './Code_CvDz0wze.mjs';
import './Icon_BjRoQ2g_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Install Debian",
  "description": "Installing the Debian OS iso file in the Mini PC",
  "sidebar": {
    "label": "Install Debian"
  },
  "order": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "instructions",
    "text": "Instructions"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    li: "li",
    link: "link",
    ol: "ol",
    pre: "pre",
    script: "script",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Scope and Objectives",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Install Debian OS onto each Mini PC."
          }), "\n", createVNode(_components.li, {
            children: "Remove Windows OS that comes with each Mini PC once Debian is installed."
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Tools and Equipment",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://www.amazon.com/dp/B0BVFS94J5?ref=ppx_yo2ov_dt_b_product_details&th=1",
              children: "3 Beelink Mini S12 Pro Mini PC, 12th Gen Intel-N100, 16GB RAM DDR4, 500GB SSD"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://www.amazon.com/dp/B0B6148YKN?psc=1&ref=ppx_yo2ov_dt_b_product_details",
              children: "1 USB 3.1 Flash Drive containing the Debian ISO file"
            })
          }), "\n"]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "instructions",
      children: "Instructions"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "Plug the USB stick into the minipc."
        }), "\n", createVNode(_components.li, {
          children: "Plug in the HDMI cable into the HDMI port and hook it up to a monitor."
        }), "\n", createVNode(_components.li, {
          children: ["TBD code snippet step\n", createVNode(_components.div, {
            class: "expressive-code",
            children: [createVNode(_components.link, {
              rel: "stylesheet",
              href: "/_astro/ec.d6kn2.css"
            }), createVNode(_components.script, {
              type: "module",
              src: "/_astro/ec.dy9ns.js"
            }), createVNode(_components.figure, {
              class: "frame is-terminal not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: [createVNode(_components.span, {
                  class: "title"
                }), createVNode(_components.span, {
                  class: "sr-only",
                  children: "Terminal window"
                })]
              }), createVNode(_components.pre, {
                tabindex: "0",
                dir: "ltr",
                children: createVNode(_components.code, {
                  children: createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3C63B3"
                        },
                        children: "blah"
                      })
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "blah",
                  children: createVNode(_components.div, {})
                })
              })]
            })]
          }), "\n"]
        }), "\n"]
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
const url = "src/content/docs/guides/installing-debian-minipc.mdx";
const file = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/guides/installing-debian-minipc.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/guides/installing-debian-minipc.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
