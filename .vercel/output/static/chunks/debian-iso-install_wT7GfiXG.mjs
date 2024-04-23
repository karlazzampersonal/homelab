import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BvFHs0WQ.mjs';
import { $ as $$Image } from './_astro_assets_C3bg04vv.mjs';
import { c as $$Aside, d as $$Steps } from './Code_CvDz0wze.mjs';
import './Icon_BjRoQ2g_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Installing Debian ISO on USB stick",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Installing Debian ISO on USB stick",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "setup-instructions-on-a-mac",
    "text": "Setup Instructions on a Mac"
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
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I am not running a hypervisor such as Proxmox since I want to run kubernetes bare-metal in Debian. So I\u2019ll need\nto put the Debian ISO on a USB stick so that I can install it each Mini PC. I went with Debian as my Linux OS since it has excellent\ndocumentation and is relatively stable."
    }), "\n", createVNode(_components.h2, {
      id: "setup-instructions-on-a-mac",
      children: "Setup Instructions on a Mac"
    }), "\n", createVNode($$Aside, {
      type: "danger",
      children: "These instructions are for installing on a Mac only, and make sure you have a USB stick with at least 8 GB of free memory."
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Plug the USB stick in."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Go to ", createVNode(_components.a, {
              href: "https://www.debian.org/distrib/netinst",
              children: "Debian distribution page"
            }), " and click on ", createVNode(_components.code, {
              dir: "auto",
              children: "amd64"
            }), " since that\u2019s the architecture for our N100 Intel chip to download the ISO file."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Cd into the downloads folder where the ISO file is."
          }), "\n", createVNode(_components.div, {
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
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3C63B3"
                        },
                        children: "cd"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "~/Downloads"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "cd ~/Downloads",
                  children: createVNode(_components.div, {})
                })
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["List all of the disks on the mac. You should see one listed for ", createVNode(_components.code, {
              dir: "auto",
              children: "(external, physical)"
            }), ". That\u2019s the USB stick, make note of the disk name. For me it is ", createVNode(_components.code, {
              dir: "auto",
              children: "/dev/disk4"
            }), "."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
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
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3C63B3"
                        },
                        children: "sudo"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "diskutil"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "list"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "sudo diskutil list",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Now we are going to erase the contents of the disk completely. Replace ", createVNode(_components.code, {
              dir: "auto",
              children: "/dev/disk4"
            }), " with your disk name for this command and all following commands."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
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
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3C63B3"
                        },
                        children: "sudo"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "diskutil"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "eraseDisk"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "FAT32"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "USB"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "/dev/disk4"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "sudo diskutil eraseDisk FAT32 USB /dev/disk4",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Since erasing the content mounts the usb disk, we need to unmount it before adding our ISO file."
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
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
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3C63B3"
                        },
                        children: "sudo"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "diskutil"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "unmountDisk"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "/dev/disk4"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "sudo diskutil unmountDisk /dev/disk4",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Finally, let\u2019s add the ISO file to the disk. Change the file name to be the name of your iso file along with the disk name."
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
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
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3C63B3"
                        },
                        children: "sudo"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "dd"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "if=./debian-12.5.0-amd64-netinst.iso"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "of=/dev/disk4"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "bs="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#F78C6C",
                          "--1": "#AA0982"
                        },
                        children: "1"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3C63B3"
                        },
                        children: "m"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "sudo dd if=./debian-12.5.0-amd64-netinst.iso of=/dev/disk4 bs=1m",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode($$Aside, {
            children: "You will notice an error after this step saying the disk is not readable, click eject anyways, this error is expected since Macs can\u2019t read the new filesystem on the USB stick."
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
const url = "src/content/docs/guides/debian-iso-install.mdx";
const file = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/guides/debian-iso-install.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/karlazzam/IdeaProjects/homelab/src/content/docs/guides/debian-iso-install.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
