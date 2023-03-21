import{S as dt,i as pt,s as ht,a as mt,e as K,c as _t,b as X,g as ge,t as M,d as we,f as G,h as z,j as gt,o as Te,k as wt,l as yt,m as bt,n as Le,p as B,q as vt,r as Et,u as kt,v as Ie,w as Q,x,y as De,z as ee,A as te,B as me}from"./chunks/index-21aa7309.js";import{S as it,a as lt,I as $,g as Qe,f as xe,b as Ae,c as _e,s as F,i as et,d as se,e as Z,P as tt,h as Rt,j as St,k as Lt}from"./chunks/singletons-29647d23.js";import{R as nt,H as ie}from"./chunks/control-e7f5239e.js";function It(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function At(a){return a.split("%25").map(decodeURI).join("%25")}function Pt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Ot=["href","pathname","search","searchParams","toString","toJSON"];function Ut(a,e){const n=new URL(a);for(const s of Ot){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Nt(n),n}function Nt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Tt="/__data.json";function jt(a){return a.replace(/\/$/,"")+Tt}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Dt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=s.length;for(;i;)e=e*33^s[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ye=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&le.delete(Ve(a)),ye(a,e));const le=new Map;function Vt(a,e){const n=Ve(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&le.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return ye(a,e)}function Ct(a,e,n){if(le.size>0){const s=Ve(a,n),i=le.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);le.delete(s)}}return ye(e,n)}function Ve(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const i=[];e.headers&&i.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&i.push(e.body),s+=`[data-hash="${Dt(...i)}"]`}return s}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Ft(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,h)=>{if(h%2){if(g.startsWith("x+"))return Pe(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Pe(String.fromCharCode(...g.slice(2).split("-").map(P=>parseInt(P,16))));const m=qt.exec(g);if(!m)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,O,I,V]=m;return e.push({name:I,matcher:V,optional:!!E,rest:!!O,chained:O?h===1&&t[0]==="":!1}),O?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Pe(g)}).join("")}).join("")}/?$`),params:e}}function Bt(a){return!/^\([^)]+\)$/.test(a)}function Ft(a){return a.slice(1).split("/").filter(Bt)}function Ht(a,e,n){const s={},i=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const c=e[t],g=i[t-u];if(c.chained&&c.rest&&u){s[c.name]=i.slice(t-u,t+1).filter(h=>h).join("/"),u=0;continue}if(g===void 0){c.rest&&(s[c.name]="");continue}if(!c.matcher||n[c.matcher](g)){s[c.name]=g;continue}if(c.optional&&c.chained){u++;continue}return}if(!u)return s}function Pe(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([c,[g,h,m]])=>{const{pattern:E,params:O}=$t(c),I={id:c,exec:V=>{const P=E.exec(V);if(P)return Ht(P,O,s)},errors:[1,...m||[]].map(V=>a[V]),layouts:[0,...h||[]].map(t),leaf:u(g)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function u(c){const g=c<0;return g&&(c=~c),[g,a[c]]}function t(c){return c===void 0?c:[i.has(c),a[c]]}}function Mt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=Q(i,u(a)),a[12](e)),{c(){e&&x(e.$$.fragment),n=K()},l(t){e&&De(e.$$.fragment,t),n=K()},m(t,c){e&&ee(e,t,c),X(t,n,c),s=!0},p(t,c){const g={};if(c&8&&(g.data=t[3]),c&4&&(g.form=t[2]),i!==(i=t[1][0])){if(e){ge();const h=e;M(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[12](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&z(n),e&&te(e,t)}}}function Gt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[zt]},$$scope:{ctx:t}}}}return i&&(e=Q(i,u(a)),a[11](e)),{c(){e&&x(e.$$.fragment),n=K()},l(t){e&&De(e.$$.fragment,t),n=K()},m(t,c){e&&ee(e,t,c),X(t,n,c),s=!0},p(t,c){const g={};if(c&8&&(g.data=t[3]),c&8215&&(g.$$scope={dirty:c,ctx:t}),i!==(i=t[1][0])){if(e){ge();const h=e;M(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[11](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&z(n),e&&te(e,t)}}}function zt(a){let e,n,s;var i=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=Q(i,u(a)),a[10](e)),{c(){e&&x(e.$$.fragment),n=K()},l(t){e&&De(e.$$.fragment,t),n=K()},m(t,c){e&&ee(e,t,c),X(t,n,c),s=!0},p(t,c){const g={};if(c&16&&(g.data=t[4]),c&4&&(g.form=t[2]),i!==(i=t[1][1])){if(e){ge();const h=e;M(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[10](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){a[10](null),t&&z(n),e&&te(e,t)}}}function rt(a){let e,n=a[6]&&ot(a);return{c(){e=wt("div"),n&&n.c(),this.h()},l(s){e=yt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=bt(e);n&&n.l(i),i.forEach(z),this.h()},h(){Le(e,"id","svelte-announcer"),Le(e,"aria-live","assertive"),Le(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,i){X(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=ot(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&z(e),n&&n.d()}}}function ot(a){let e;return{c(){e=vt(a[7])},l(n){e=Et(n,a[7])},m(n,s){X(n,e,s)},p(n,s){s&128&&kt(e,n[7])},d(n){n&&z(e)}}}function Jt(a){let e,n,s,i,u;const t=[Gt,Mt],c=[];function g(m,E){return m[1][1]?0:1}e=g(a),n=c[e]=t[e](a);let h=a[5]&&rt(a);return{c(){n.c(),s=mt(),h&&h.c(),i=K()},l(m){n.l(m),s=_t(m),h&&h.l(m),i=K()},m(m,E){c[e].m(m,E),X(m,s,E),h&&h.m(m,E),X(m,i,E),u=!0},p(m,[E]){let O=e;e=g(m),e===O?c[e].p(m,E):(ge(),M(c[O],1,1,()=>{c[O]=null}),we(),n=c[e],n?n.p(m,E):(n=c[e]=t[e](m),n.c()),G(n,1),n.m(s.parentNode,s)),m[5]?h?h.p(m,E):(h=rt(m),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null)},i(m){u||(G(n),u=!0)},o(m){M(n),u=!1},d(m){c[e].d(m),m&&z(s),h&&h.d(m),m&&z(i)}}}function Wt(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:c}=e,{data_0:g=null}=e,{data_1:h=null}=e;gt(s.page.notify);let m=!1,E=!1,O=null;Te(()=>{const R=s.page.subscribe(()=>{m&&(n(6,E=!0),n(7,O=document.title||"untitled page"))});return n(5,m=!0),R});function I(R){Ie[R?"unshift":"push"](()=>{t[1]=R,n(0,t)})}function V(R){Ie[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}function P(R){Ie[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}return a.$$set=R=>{"stores"in R&&n(8,s=R.stores),"page"in R&&n(9,i=R.page),"constructors"in R&&n(1,u=R.constructors),"components"in R&&n(0,t=R.components),"form"in R&&n(2,c=R.form),"data_0"in R&&n(3,g=R.data_0),"data_1"in R&&n(4,h=R.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,u,c,g,h,m,E,O,s,i,I,V,P]}class Yt extends dt{constructor(e){super(),pt(this,e,Wt,Jt,ht,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Xt="modulepreload",Zt=function(a,e){return new URL(a,e).href},st={},H=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Zt(u,s),u in st)return;st[u]=!0;const t=u.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!s)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===u&&(!t||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":Xt,t||(h.as="script",h.crossOrigin=""),h.href=u,document.head.appendChild(h),t)return new Promise((m,E)=>{h.addEventListener("load",m),h.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Qt={},be=[()=>H(()=>import("./chunks/0-1998da86.js"),["./chunks/0-1998da86.js","./chunks/_layout-0dc3efab.js","./chunks/index-4d8f42c1.js","./chunks/control-e7f5239e.js","./components/pages/_layout.svelte-aa280f52.js","./chunks/index-21aa7309.js","./chunks/singletons-29647d23.js","./chunks/index-bca723fc.js","./chunks/stores-fe609b92.js","./chunks/GuideContents-ad20fbae.js","./assets/GuideContents-48e964f9.css","./chunks/_examples-9389f889.js","./chunks/Brush.html-2ffa0f64.js","./assets/Brush-6c1d38e0.css","./chunks/dots-a6959be6.js","./assets/dots-ef082192.css","./chunks/pointsFour-781db7ef.js","./assets/_examples-3bba1895.css","./chunks/_examples_ssr-c0678590.js","./chunks/ClevelandDotPlot.percent-range.html-e094f274.js","./assets/ClevelandDotPlot.percent-range-cce3ebed.css","./assets/_examples_ssr-a9522c99.css","./assets/_layout-7b48a4ef.css"],import.meta.url),()=>H(()=>import("./chunks/1-a78d8f32.js"),["./chunks/1-a78d8f32.js","./components/error.svelte-fa9a3145.js","./chunks/index-21aa7309.js","./chunks/stores-fe609b92.js","./chunks/singletons-29647d23.js","./chunks/index-bca723fc.js"],import.meta.url),()=>H(()=>import("./chunks/2-1708bcff.js"),["./chunks/2-1708bcff.js","./components/pages/_page.svelte-2fa94818.js","./chunks/index-21aa7309.js","./chunks/hljsDefineSvelte-185b3d8f.js","./chunks/_examples-9389f889.js","./chunks/Brush.html-2ffa0f64.js","./chunks/index-bca723fc.js","./assets/Brush-6c1d38e0.css","./chunks/dots-a6959be6.js","./assets/dots-ef082192.css","./chunks/pointsFour-781db7ef.js","./assets/_examples-3bba1895.css","./chunks/_examples_ssr-c0678590.js","./chunks/ClevelandDotPlot.percent-range.html-e094f274.js","./assets/ClevelandDotPlot.percent-range-cce3ebed.css","./assets/_examples_ssr-a9522c99.css","./assets/_page-3a9728ad.css"],import.meta.url),()=>H(()=>import("./chunks/3-c81e0b72.js"),["./chunks/3-c81e0b72.js","./components/pages/components/_page.svelte-bfa04af7.js","./chunks/index-21aa7309.js","./chunks/_components-8e041e26.js","./chunks/Brush.html-2ffa0f64.js","./chunks/index-bca723fc.js","./assets/Brush-6c1d38e0.css","./chunks/dots-a6959be6.js","./assets/dots-ef082192.css","./chunks/ClevelandDotPlot.percent-range.html-e094f274.js","./assets/ClevelandDotPlot.percent-range-cce3ebed.css","./assets/_components-0aebba1b.css","./assets/_page-43d1dbc5.css"],import.meta.url),()=>H(()=>import("./chunks/4-46503c03.js"),["./chunks/4-46503c03.js","./chunks/_page-6492f2e6.js","./chunks/index-4d8f42c1.js","./chunks/control-e7f5239e.js","./components/pages/components/_slug_/_page.svelte-8a7fe89f.js","./chunks/index-21aa7309.js","./chunks/downloadBlob-8eb2957f.js","./chunks/Brush.html-2ffa0f64.js","./chunks/index-bca723fc.js","./assets/Brush-6c1d38e0.css","./chunks/hljsDefineSvelte-185b3d8f.js","./chunks/_components-8e041e26.js","./chunks/dots-a6959be6.js","./assets/dots-ef082192.css","./chunks/ClevelandDotPlot.percent-range.html-e094f274.js","./assets/ClevelandDotPlot.percent-range-cce3ebed.css","./assets/_components-0aebba1b.css","./assets/_page-9abfd804.css"],import.meta.url),()=>H(()=>import("./chunks/5-138d7a89.js"),["./chunks/5-138d7a89.js","./chunks/_page-be982cf3.js","./chunks/index-4d8f42c1.js","./chunks/control-e7f5239e.js","./components/pages/example/_slug_/_page.svelte-b37d471f.js","./chunks/index-21aa7309.js","./chunks/downloadBlob-8eb2957f.js","./chunks/Brush.html-2ffa0f64.js","./chunks/index-bca723fc.js","./assets/Brush-6c1d38e0.css","./chunks/hljsDefineSvelte-185b3d8f.js","./chunks/cleanTitle-bae4dae5.js","./assets/cleanTitle-0901854a.css","./chunks/_examples-9389f889.js","./chunks/dots-a6959be6.js","./assets/dots-ef082192.css","./chunks/pointsFour-781db7ef.js","./assets/_examples-3bba1895.css","./assets/_page-5963aa6a.css"],import.meta.url),()=>H(()=>import("./chunks/6-108d7a02.js"),["./chunks/6-108d7a02.js","./chunks/_page-0142e5a3.js","./chunks/index-4d8f42c1.js","./chunks/control-e7f5239e.js","./components/pages/example-ssr/_slug_/_page.svelte-918359b9.js","./chunks/index-21aa7309.js","./chunks/downloadBlob-8eb2957f.js","./chunks/Brush.html-2ffa0f64.js","./chunks/index-bca723fc.js","./assets/Brush-6c1d38e0.css","./chunks/hljsDefineSvelte-185b3d8f.js","./chunks/cleanTitle-bae4dae5.js","./assets/cleanTitle-0901854a.css","./chunks/_examples_ssr-c0678590.js","./chunks/ClevelandDotPlot.percent-range.html-e094f274.js","./assets/ClevelandDotPlot.percent-range-cce3ebed.css","./chunks/pointsFour-781db7ef.js","./assets/_examples_ssr-a9522c99.css","./assets/_page-9463f5c9.css"],import.meta.url),()=>H(()=>import("./chunks/7-063c3b8a.js"),["./chunks/7-063c3b8a.js","./chunks/_page-53a75b08.js","./chunks/index-4d8f42c1.js","./chunks/control-e7f5239e.js","./components/pages/guide/_page.svelte-19f7ae0a.js","./chunks/index-21aa7309.js","./chunks/GuideContents-ad20fbae.js","./assets/GuideContents-48e964f9.css","./assets/_page-5a10ac25.css"],import.meta.url)],xt=[],en={"/":[2],"/components":[3],"/components/[slug]":[4],"/example-ssr/[slug]":[6],"/example/[slug]":[5],"/guide":[7]},tn={handleError:({error:a})=>{console.error(a)}};async function nn(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const an=-1,rn=-2,on=-3,sn=-4,ln=-5,cn=-6;function fn(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,s=Array(n.length);function i(u,t=!1){if(u===an)return;if(u===on)return NaN;if(u===sn)return 1/0;if(u===ln)return-1/0;if(u===cn)return-0;if(t)throw new Error("Invalid input");if(u in s)return s[u];const c=n[u];if(!c||typeof c!="object")s[u]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const g=c[0],h=e==null?void 0:e[g];if(h)return s[u]=h(i(c[1]));switch(g){case"Date":s[u]=new Date(c[1]);break;case"Set":const m=new Set;s[u]=m;for(let I=1;I<c.length;I+=1)m.add(i(c[I]));break;case"Map":const E=new Map;s[u]=E;for(let I=1;I<c.length;I+=2)E.set(i(c[I]),i(c[I+1]));break;case"RegExp":s[u]=new RegExp(c[1],c[2]);break;case"Object":s[u]=Object(c[1]);break;case"BigInt":s[u]=BigInt(c[1]);break;case"null":const O=Object.create(null);s[u]=O;for(let I=1;I<c.length;I+=2)O[c[I]]=i(c[I+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(c.length);s[u]=g;for(let h=0;h<c.length;h+=1){const m=c[h];m!==rn&&(g[h]=i(m))}}else{const g={};s[u]=g;for(const h in c){const m=c[h];g[h]=i(m)}}return s[u]}return i(0)}function un(a){return a.filter(e=>e!=null)}const Oe=Kt(be,xt,en,Qt),ft=be[0],je=be[1];ft();je();const Y=ct(it)??{},re=ct(lt)??{};function Ue(a){Y[a]=se()}function dn({target:a}){var Ye;const e=document.documentElement,n=[],s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,g=!1,h=!0,m=!1,E=!1,O=!1,I=!1,V,P=(Ye=history.state)==null?void 0:Ye[$];P||(P=Date.now(),history.replaceState({...history.state,[$]:P},"",location.href));const R=Y[P];R&&(history.scrollRestoration="manual",scrollTo(R.x,R.y));let J,Ce,ce;async function qe(){ce=ce||Promise.resolve(),await ce,ce=null;const o=new URL(location.href),r=ae(o,!0);i=null,await He(r,o,[])}function $e(o){s.some(r=>r==null?void 0:r.snapshot)&&(re[o]=s.map(r=>{var f;return(f=r==null?void 0:r.snapshot)==null?void 0:f.capture()}))}function Be(o){var r;(r=re[o])==null||r.forEach((f,l)=>{var p,d;(d=(p=s[l])==null?void 0:p.snapshot)==null||d.restore(f)})}async function ve(o,{noScroll:r=!1,replaceState:f=!1,keepFocus:l=!1,state:p={},invalidateAll:d=!1},w,_){return typeof o=="string"&&(o=new URL(o,Qe(document))),pe({url:o,scroll:r?se():null,keepfocus:l,redirect_chain:w,details:{state:p,replaceState:f},nav_token:_,accepted:()=>{d&&(I=!0)},blocked:()=>{},type:"goto"})}async function Fe(o){return i={id:o.id,promise:Ge(o).then(r=>(r.type==="loaded"&&r.state.error&&(i=null),r))},i.promise}async function fe(...o){const f=Oe.filter(l=>o.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(f)}async function He(o,r,f,l,p,d={},w){var b,v,A;Ce=d;let _=o&&await Ge(o);if(_||(_=await We(r,{id:null},await oe(new Error(`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)),r=(o==null?void 0:o.url)||r,Ce!==d)return!1;if(_.type==="redirect")if(f.length>10||f.includes(r.pathname))_=await ue({status:500,error:await oe(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return ve(new URL(_.location,r).href,{},[...f,r.pathname],d),!1;else((b=_.props.page)==null?void 0:b.status)>=400&&await F.updated.check()&&await he(r);if(n.length=0,I=!1,m=!0,l&&(Ue(l),$e(l)),(v=_.props.page)!=null&&v.url&&_.props.page.url.pathname!==r.pathname&&(r.pathname=(A=_.props.page)==null?void 0:A.url.pathname),p&&p.details){const{details:S}=p,D=S.replaceState?0:1;if(S.state[$]=P+=D,history[S.replaceState?"replaceState":"pushState"](S.state,"",r),!S.replaceState){let L=P+1;for(;re[L]||Y[L];)delete re[L],delete Y[L],L+=1}}if(i=null,g?(t=_.state,_.props.page&&(_.props.page.url=r),V.$set(_.props)):Ke(_),p){const{scroll:S,keepfocus:D}=p,{activeElement:L}=document;await me();const y=document.activeElement!==L&&document.activeElement!==document.body;if(!D&&!y&&await Ne(),h){const U=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));S?scrollTo(S.x,S.y):U?U.scrollIntoView():scrollTo(0,0)}}else await me();h=!0,_.props.page&&(J=_.props.page),w&&w(),m=!1}function Ke(o){var l;t=o.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),J=o.props.page,V=new Yt({target:a,props:{...o.props,stores:F,components:s},hydrate:!0}),Be(P);const f={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(f)),g=!0}async function ne({url:o,params:r,branch:f,status:l,error:p,route:d,form:w}){let _="never";for(const L of f)(L==null?void 0:L.slash)!==void 0&&(_=L.slash);o.pathname=It(o.pathname,_),o.search=o.search;const b={type:"loaded",state:{url:o,params:r,branch:f,error:p,route:d},props:{constructors:un(f).map(L=>L.node.component)}};w!==void 0&&(b.props.form=w);let v={},A=!J,S=0;for(let L=0;L<Math.max(f.length,t.branch.length);L+=1){const y=f[L],U=t.branch[L];(y==null?void 0:y.data)!==(U==null?void 0:U.data)&&(A=!0),y&&(v={...v,...y.data},A&&(b.props[`data_${S}`]=v),S+=1)}return(!t.url||o.href!==t.url.href||t.error!==p||w!==void 0&&w!==J.form||A)&&(b.props.page={error:p,params:r,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(o),form:w??null,data:A?v:J.data}),b}async function Ee({loader:o,parent:r,url:f,params:l,route:p,server_data_node:d}){var v,A,S;let w=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await o();if((v=b.universal)!=null&&v.load){let D=function(...y){for(const U of y){const{href:C}=new URL(U,f);_.dependencies.add(C)}};const L={route:{get id(){return _.route=!0,p.id}},params:new Proxy(l,{get:(y,U)=>(_.params.add(U),y[U])}),data:(d==null?void 0:d.data)??null,url:Ut(f,()=>{_.url=!0}),async fetch(y,U){let C;y instanceof Request?(C=y.url,U={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...U}):C=y;const q=new URL(C,f);return D(q.href),q.origin===f.origin&&(C=q.href.slice(f.origin.length)),g?Ct(C,q.href,U):Vt(C,U)},setHeaders:()=>{},depends:D,parent(){return _.parent=!0,r()}};w=await b.universal.load.call(null,L)??null,w=w?await nn(w):null}return{node:b,loader:o,server:d,universal:(A=b.universal)!=null&&A.load?{type:"data",data:w,uses:_}:null,data:w??(d==null?void 0:d.data)??null,slash:((S=b.universal)==null?void 0:S.trailingSlash)??(d==null?void 0:d.slash)}}function Me(o,r,f,l,p){if(I)return!0;if(!l)return!1;if(l.parent&&o||l.route&&r||l.url&&f)return!0;for(const d of l.params)if(p[d]!==t.params[d])return!0;for(const d of l.dependencies)if(n.some(w=>w(new URL(d))))return!0;return!1}function ke(o,r){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?r??null:null}async function Ge({id:o,invalidating:r,url:f,params:l,route:p}){if((i==null?void 0:i.id)===o)return i.promise;const{errors:d,layouts:w,leaf:_}=p,b=[...w,_];d.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let v=null;const A=t.url?o!==t.url.pathname+t.url.search:!1,S=t.route?p.id!==t.route.id:!1;let D=!1;const L=b.map((k,j)=>{var W;const N=t.branch[j],T=!!(k!=null&&k[0])&&((N==null?void 0:N.loader)!==k[1]||Me(D,S,A,(W=N.server)==null?void 0:W.uses,l));return T&&(D=!0),T});if(L.some(Boolean)){try{v=await pn(f,L)}catch(k){return ue({status:k instanceof ie?k.status:500,error:await oe(k,{url:f,params:l,route:{id:p.id}}),url:f,route:p})}if(v.type==="redirect")return v}const y=v==null?void 0:v.nodes;let U=!1;const C=b.map(async(k,j)=>{var Re;if(!k)return;const N=t.branch[j],T=y==null?void 0:y[j];if((!T||T.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!Me(U,S,A,(Re=N.universal)==null?void 0:Re.uses,l))return N;if(U=!0,(T==null?void 0:T.type)==="error")throw T;return Ee({loader:k[1],url:f,params:l,route:p,parent:async()=>{var Ze;const Xe={};for(let Se=0;Se<j;Se+=1)Object.assign(Xe,(Ze=await C[Se])==null?void 0:Ze.data);return Xe},server_data_node:ke(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?N==null?void 0:N.server:void 0)})});for(const k of C)k.catch(()=>{});const q=[];for(let k=0;k<b.length;k+=1)if(b[k])try{q.push(await C[k])}catch(j){if(j instanceof nt)return{type:"redirect",location:j.location};let N=500,T;if(y!=null&&y.includes(j))N=j.status??N,T=j.error;else if(j instanceof ie)N=j.status,T=j.body;else{if(await F.updated.check())return await he(f);T=await oe(j,{params:l,url:f,route:{id:p.id}})}const W=await ze(k,q,d);return W?await ne({url:f,params:l,branch:q.slice(0,W.idx).concat(W.node),status:N,error:T,route:p}):await We(f,{id:p.id},T,N)}else q.push(void 0);return await ne({url:f,params:l,branch:q,status:200,error:null,route:p,form:r?void 0:null})}async function ze(o,r,f){for(;o--;)if(f[o]){let l=o;for(;!r[l];)l-=1;try{return{idx:l+1,node:{node:await f[o](),loader:f[o],data:{},server:null,universal:null}}}catch{continue}}}async function ue({status:o,error:r,url:f,route:l}){const p={},w=await Ee({loader:ft,url:f,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ke(null)}),_={node:await je(),loader:je,universal:null,server:null,data:null};return await ne({url:f,params:p,branch:[w,_],status:o,error:r,route:null})}function ae(o,r){if(et(o,Z))return;const f=de(o);for(const l of Oe){const p=l.exec(f);if(p)return{id:o.pathname+o.search,invalidating:r,route:l,params:Pt(p),url:o}}}function de(o){return At(o.pathname.slice(Z.length)||"/")}function Je({url:o,type:r,intent:f,delta:l}){var _,b;let p=!1;const d={from:{params:t.params,route:{id:((_=t.route)==null?void 0:_.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((b=f==null?void 0:f.route)==null?void 0:b.id)??null},url:o},willUnload:!f,type:r};l!==void 0&&(d.delta=l);const w={...d,cancel:()=>{p=!0}};return E||u.before_navigate.forEach(v=>v(w)),p?null:d}async function pe({url:o,scroll:r,keepfocus:f,redirect_chain:l,details:p,type:d,delta:w,nav_token:_,accepted:b,blocked:v}){const A=ae(o,!1),S=Je({url:o,type:d,delta:w,intent:A});if(!S){v();return}const D=P;b(),E=!0,g&&F.navigating.set(S),await He(A,o,l,D,{scroll:r,keepfocus:f,details:p},_,()=>{E=!1,u.after_navigate.forEach(L=>L(S)),F.navigating.set(null)})}async function We(o,r,f,l){return o.origin===location.origin&&o.pathname===location.pathname&&!c?await ue({status:l,error:f,url:o,route:r}):await he(o)}function he(o){return location.href=o.href,new Promise(()=>{})}function ut(){let o;e.addEventListener("mousemove",d=>{const w=d.target;clearTimeout(o),o=setTimeout(()=>{l(w,2)},20)});function r(d){l(d.composedPath()[0],1)}e.addEventListener("mousedown",r),e.addEventListener("touchstart",r,{passive:!0});const f=new IntersectionObserver(d=>{for(const w of d)w.isIntersecting&&(fe(de(new URL(w.target.href))),f.unobserve(w.target))},{threshold:0});function l(d,w){const _=xe(d,e);if(!_)return;const{url:b,external:v}=Ae(_,Z);if(v)return;const A=_e(_);if(!A.reload)if(w<=A.preload_data){const S=ae(b,!1);S&&Fe(S)}else w<=A.preload_code&&fe(de(b))}function p(){f.disconnect();for(const d of e.querySelectorAll("a")){const{url:w,external:_}=Ae(d,Z);if(_)continue;const b=_e(d);b.reload||(b.preload_code===tt.viewport&&f.observe(d),b.preload_code===tt.eager&&fe(de(w)))}}u.after_navigate.push(p),p()}return{after_navigate:o=>{Te(()=>(u.after_navigate.push(o),()=>{const r=u.after_navigate.indexOf(o);u.after_navigate.splice(r,1)}))},before_navigate:o=>{Te(()=>(u.before_navigate.push(o),()=>{const r=u.before_navigate.indexOf(o);u.before_navigate.splice(r,1)}))},disable_scroll_handling:()=>{(m||!g)&&(h=!1)},goto:(o,r={})=>ve(o,r,[]),invalidate:o=>{if(typeof o=="function")n.push(o);else{const{href:r}=new URL(o,location.href);n.push(f=>f.href===r)}return qe()},invalidateAll:()=>(I=!0,qe()),preload_data:async o=>{const r=new URL(o,Qe(document)),f=ae(r,!1);if(!f)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);await Fe(f)},preload_code:fe,apply_action:async o=>{if(o.type==="error"){const r=new URL(location.href),{branch:f,route:l}=t;if(!l)return;const p=await ze(t.branch.length,f,l.errors);if(p){const d=await ne({url:r,params:t.params,branch:f.slice(0,p.idx).concat(p.node),status:o.status??500,error:o.error,route:l});t=d.state,V.$set(d.props),me().then(Ne)}}else if(o.type==="redirect")ve(o.location,{invalidateAll:!0},[]);else{const r={form:o.data,page:{...J,form:o.data,status:o.status}};V.$set(r),o.type==="success"&&me().then(Ne)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",r=>{var l;let f=!1;if(!E){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};u.before_navigate.forEach(d=>d(p))}f?(r.preventDefault(),r.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ue(P),at(it,Y),$e(P),at(lt,re))}),(o=navigator.connection)!=null&&o.saveData||ut(),e.addEventListener("click",r=>{if(r.button||r.which!==1||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.defaultPrevented)return;const f=xe(r.composedPath()[0],e);if(!f)return;const{url:l,external:p,target:d}=Ae(f,Z);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const w=_e(f);if(!(f instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||w.reload){Je({url:l,type:"link"})||r.preventDefault(),E=!0;return}const[b,v]=l.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){O=!0,Ue(P),t.url=l,F.page.set({...J,url:l}),F.page.notify();return}pe({url:l,scroll:w.noscroll?se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>r.preventDefault(),blocked:()=>r.preventDefault(),type:"link"})}),e.addEventListener("submit",r=>{if(r.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(r.target),l=r.submitter;if(((l==null?void 0:l.formMethod)||f.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||f.action);if(et(d,Z))return;const w=r.target,{noscroll:_,reload:b}=_e(w);if(b)return;r.preventDefault(),r.stopPropagation();const v=new FormData(w),A=l==null?void 0:l.getAttribute("name");A&&v.append(A,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(v).toString(),pe({url:d,scroll:_?se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async r=>{var f;if((f=r.state)!=null&&f[$]){if(r.state[$]===P)return;const l=Y[r.state[$]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[P]=se(),P=r.state[$],scrollTo(l.x,l.y);return}const p=r.state[$]-P;let d=!1;await pe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=r.state[$]},blocked:()=>{history.go(-p),d=!0},type:"popstate",delta:p}),d||Be(P)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[$]:++P},"",location.href))});for(const r of document.querySelectorAll("link"))r.rel==="icon"&&(r.href=r.href);addEventListener("pageshow",r=>{r.persisted&&F.navigating.set(null)})},_hydrate:async({status:o=200,error:r,node_ids:f,params:l,route:p,data:d,form:w})=>{c=!0;const _=new URL(location.href);({params:l={},route:p={id:null}}=ae(_,!1)||{});let b;try{const v=f.map(async(A,S)=>{const D=d[S];return Ee({loader:be[A],url:_,params:l,route:p,parent:async()=>{const L={};for(let y=0;y<S;y+=1)Object.assign(L,(await v[y]).data);return L},server_data_node:ke(D)})});b=await ne({url:_,params:l,branch:await Promise.all(v),status:o,error:r,form:w,route:Oe.find(({id:A})=>A===p.id)??null})}catch(v){if(v instanceof nt){await he(new URL(v.location,location.href));return}b=await ue({status:v instanceof ie?v.status:500,error:await oe(v,{url:_,params:l,route:p}),url:_,route:p})}Ke(b)}}}async function pn(a,e){var u;const n=new URL(a);n.pathname=jt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await ye(n.href),i=await s.json();if(!s.ok)throw new ie(s.status,i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=fn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function oe(a,e){return a instanceof ie?a.body:tn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ne(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var i;s((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function gn({assets:a,env:e,hydrate:n,target:s,version:i}){St(a),Lt(i);const u=dn({target:s});Rt({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{gn as start};
