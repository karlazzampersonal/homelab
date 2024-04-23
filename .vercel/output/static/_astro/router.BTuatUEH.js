const k="astro:before-preparation",W="astro:after-preparation",O="astro:before-swap",U="astro:after-swap",j=e=>document.dispatchEvent(new Event(e));class N extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,i,l,d,m,r,f){super(t,n),this.from=o,this.to=i,this.direction=l,this.navigationType=d,this.sourceElement=m,this.info=r,this.newDocument=f,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}const oe=e=>e.type===k;class V extends N{formData;loader;constructor(t,n,o,i,l,d,m,r,f){super(k,{cancelable:!0},t,n,o,i,l,d,m),this.formData=r,this.loader=f.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}const re=e=>e.type===O;class K extends N{direction;viewTransition;swap;constructor(t,n,o){super(O,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function z(e,t,n,o,i,l,d,m){const r=new V(e,t,n,o,i,l,window.document,d,m);return document.dispatchEvent(r)&&(await r.loader(),r.defaultPrevented||(j(W),r.navigationType!=="traverse"&&S({scrollX,scrollY}))),r}async function G(e,t,n){const o=new K(e,t,n);return document.dispatchEvent(o),o.swap(),o}const J=history.pushState.bind(history),g=history.replaceState.bind(history),S=e=>{history.state&&(history.scrollRestoration="manual",g({...history.state,...e},""))},X=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Y=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let P,p,x=!1,F;const H=e=>document.dispatchEvent(new Event(e)),M=()=>H("astro:page-load"),Q=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},y="data-astro-transition-persist",_="data-astro-transition",q="data-astro-transition-fallback";let I,A=0;history.state?(A=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(g({index:A,scrollX,scrollY},""),history.scrollRestoration="manual");async function Z(e,t){try{const n=await fetch(e,t),i=(n.headers.get("content-type")??"").split(";",1)[0].trim();return i!=="text/html"&&i!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:i}}catch{return null}}function $(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ee(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const i of t.attributes){if(i.name==="src"){const l=new Promise(d=>{o.onload=o.onerror=d});e=e.then(()=>l)}o.setAttribute(i.name,i.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const B=(e,t,n,o,i)=>{const l=Y(t,e),d=document.title;document.title=o;let m=!1;if(e.href!==location.href&&!i)if(n.history==="replace"){const r=history.state;g({...n.state,index:r.index,scrollX:r.scrollX,scrollY:r.scrollY},"",e.href)}else J({...n.state,index:++A,scrollX:0,scrollY:0},"",e.href);if(document.title=d,P=e,l||(scrollTo({left:0,top:0,behavior:"instant"}),m=!0),i)scrollTo(i.scrollX,i.scrollY);else{if(e.hash){history.scrollRestoration="auto";const r=history.state;location.href=e.href,history.state||(g(r,""),l&&window.dispatchEvent(new PopStateEvent("popstate")))}else m||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function te(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${y}="${n.getAttribute(y)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(i=>{["load","error"].forEach(l=>o.addEventListener(l,i)),document.head.append(o)}))}return t}async function R(e,t,n,o){const i=(s,c)=>{const h=s.getAttribute(y),T=h&&c.head.querySelector(`[${y}="${h}"]`);if(T)return T;if(s.matches("link[rel=stylesheet]")){const E=s.getAttribute("href");return c.head.querySelector(`link[rel=stylesheet][href="${E}"]`)}return null},l=()=>{const s=document.activeElement;if(s?.closest(`[${y}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const c=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:c,end:h}}return{activeElement:s}}else return{activeElement:null}},d=({activeElement:s,start:c,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(typeof c=="number"&&(s.selectionStart=c),typeof h=="number"&&(s.selectionEnd=h)))},m=s=>{const c=s.dataset.astroTransitionPersistProps;return c==null||c==="false"},r=s=>{const c=document.documentElement,h=[...c.attributes].filter(({name:a})=>(c.removeAttribute(a),a.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:a,value:u})=>c.setAttribute(a,u));for(const a of document.scripts)for(const u of s.newDocument.scripts)if(!u.hasAttribute("data-astro-rerun")&&(!a.src&&a.textContent===u.textContent||a.src&&a.type===u.type&&a.src===u.src)){u.dataset.astroExec="";break}for(const a of Array.from(document.head.children)){const u=i(a,s.newDocument);u?u.remove():a.remove()}document.head.append(...s.newDocument.head.children);const T=document.body,E=l();document.body.replaceWith(s.newDocument.body);for(const a of T.querySelectorAll(`[${y}]`)){const u=a.getAttribute(y),v=document.querySelector(`[${y}="${u}"]`);v&&(v.replaceWith(a),v.localName==="astro-island"&&m(a)&&(a.setAttribute("ssr",""),a.setAttribute("props",v.getAttribute("props"))))}d(E)};async function f(s){function c(a){const u=a.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();await new Promise(a=>setTimeout(a)),document.documentElement.setAttribute(q,s);const E=document.getAnimations().filter(a=>!h.includes(a)&&!c(a));return Promise.all(E.map(a=>a.finished))}if(!x)document.documentElement.setAttribute(_,e.direction),o==="animate"&&await f("old");else throw new DOMException("Transition was skipped");const b=document.title,w=await G(e,p,r);B(w.to,w.from,t,b,n),H(U),o==="animate"&&!x&&f("new").then(()=>F())}async function C(e,t,n,o,i){if(!D()||location.origin!==n.origin){location.href=n.href;return}const l=i?"traverse":o.history==="replace"?"replace":"push";if(l!=="traverse"&&S({scrollX,scrollY}),Y(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){B(n,t,o,document.title,i);return}const d=await z(t,n,e,l,o.sourceElement,o.info,o.formData,m);if(d.defaultPrevented){location.href=n.href;return}async function m(r){const f=r.to.href,b={};if(r.formData){b.method="POST";const c=r.sourceElement instanceof HTMLFormElement?r.sourceElement:r.sourceElement instanceof HTMLElement&&"form"in r.sourceElement?r.sourceElement.form:r.sourceElement?.closest("form");b.body=c?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(r.formData):r.formData}const w=await Z(f,b);if(w===null){r.preventDefault();return}if(w.redirected&&(r.to=new URL(w.redirected)),I??=new DOMParser,r.newDocument=I.parseFromString(w.html,w.mediaType),r.newDocument.querySelectorAll("noscript").forEach(c=>c.remove()),!r.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!r.formData){r.preventDefault();return}const s=te(r.newDocument);s.length&&await Promise.all(s)}if(x=!1,X)p=document.startViewTransition(async()=>await R(d,o,i));else{const r=(async()=>{await new Promise(f=>setTimeout(f)),await R(d,o,i,$())})();p={updateCallbackDone:r,ready:r,finished:new Promise(f=>F=f),skipTransition:()=>{x=!0}}}p.ready.then(async()=>{await ee(),M(),Q()}),p.finished.then(()=>{document.documentElement.removeAttribute(_),document.documentElement.removeAttribute(q)}),await p.ready}async function se(e,t){await C("forward",P,new URL(e,location.href),t??{})}function ne(e){if(!D()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>A?"forward":"back";A=n,C(o,P,new URL(location.href),{},t)}const L=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&S({scrollX,scrollY})};{if(X||$()!=="none")if(P=new URL(location.href),addEventListener("popstate",ne),addEventListener("load",M),"onscrollend"in window)addEventListener("scrollend",L);else{let e,t,n,o;const i=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,L();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(i,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}export{O as T,k as a,oe as b,re as i,se as n,X as s};
