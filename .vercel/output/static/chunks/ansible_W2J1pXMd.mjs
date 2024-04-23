import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BvFHs0WQ.mjs';
import { $ as $$Image } from './_astro_assets_C3bg04vv.mjs';
import './Code_CvDz0wze.mjs';
import './Icon_BjRoQ2g_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ansible playbook for orchestrating Debian",
  "description": "Guide on IAC for setting up the Debian OS config",
  "sidebar": {
    "label": "Ansible playbook for Debian",
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
const url = "src/content/docs/iac/ansible.mdx";
const file = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/iac/ansible.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/iac/ansible.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
