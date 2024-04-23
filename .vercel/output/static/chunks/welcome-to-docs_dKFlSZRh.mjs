const id = "welcome-to-docs.mdx";
						const collection = "docs";
						const slug = "welcome-to-docs";
						const body = "import \"@/styles/starlight_main.css\";\nimport { Card, CardGrid } from '@astrojs/starlight/components';\n\n<CardGrid stagger>\n\n  <Card title=\"Quick Start Guides\" icon=\"document\">\n      Quick references to actions performed in the homelab.\n  </Card>\n\n  <Card title=\"Architecture\" icon=\"seti:eslint\">\n      Breakdown of the Homelab Architecture\n  </Card>\n\n   <Card title=\"IaC\" icon=\"seti:terraform\">\n       Documentation on the IaC automation for the homelab.\n   </Card>\n</CardGrid>\n";
						const data = {title:"Homelab Docs",description:"Documentation to remember how I built this thing..",editUrl:false,head:[{tag:"title",attrs:{},content:"Homelab Docs"}],template:"splash",hero:{title:"Documentation hub",tagline:"Central place of documentation, so I can reference how this homelab was built.",actions:[{text:"Get started",link:"/guides/debian-iso-install/",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"View on GitHub",link:"https://github.com/karlazzampersonal/homelab/tree/main",variant:"minimal",icon:{type:"icon",name:"external"}}]},lastUpdated:false,next:false,sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/welcome-to-docs.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
