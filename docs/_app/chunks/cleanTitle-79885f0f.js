import{S as y,i as k,s as v,e as B,t as D,c as x,a as O,h as C,d as m,b as g,f as N,g as S,G as T,N as q,H as w,aP as z}from"./vendor-2ea78382.js";import{k as E}from"./Brush.html-f1e0b39f.js";import{d as I}from"./downloadBlob-f865e357.js";function J(i){let t,o,e,d;return{c(){t=B("button"),o=D("Download \xA0\xA0\xA0\xA0\xA0"),this.h()},l(l){t=x(l,"BUTTON",{title:!0,class:!0,style:!0});var c=O(t);o=C(c,"Download \xA0\xA0\xA0\xA0\xA0"),c.forEach(m),this.h()},h(){t.disabled=i[0],g(t,"title","download zip file"),g(t,"class","icon svelte-1gef78k"),N(t,"background-image","url(/icons/download.svg)")},m(l,c){S(l,t,c),T(t,o),e||(d=q(t,"click",i[1]),e=!0)},p(l,[c]){c&1&&(t.disabled=l[0])},i:w,o:w,d(l){l&&m(t),e=!1,d()}}}function L(i=""){return(i.match(/from\s'(.+)'?/gm)||[]).map(e=>e.replace(/(from |'|"|;)/g,"")).filter(e=>!e.startsWith("."))}function M(i,t,o){let{data:e={}}=t,{slug:d}=t,{ssr:l=!1}=t,c=!1;const u=[e.main,...e.components,...e.componentComponents].reduce((n,a)=>n.concat(L(a.contents)),[]).reduce((n,a)=>(n.includes(a)||n.push(a),n),[]);async function _(){o(0,c=!0);const n=new Date().getTime(),a=await(await window.fetch(`/svelte-app.json?${n}`)).json(),f=await(await window.fetch(`/deps.json?${n}`)).json();if(u.length>0){const s=a.findIndex(({path:r})=>r==="package.json"),p=JSON.parse(a[s].data),h={},b={};u.forEach(r=>{r!=="svelte"&&(h[r]=f[r],f[r]||window.alert(`Missing dependency, add "${r}" to this repo's package.json`))}),Object.assign(p.dependencies,h),Object.assign(p.devDependencies,b),a[s].data=JSON.stringify(p,null,"  ")}a.push(...e.components.map(s=>({path:`src/routes/${s.title.replace("./","")}`,data:s.contents}))),a.push(...e.modules.map(s=>({path:`src/routes/${s.title.replace("./","")}`,data:s.contents}))),a.push(...e.componentModules.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),a.push(...e.componentComponents.map(s=>({path:`src/routes/${s.title}`,data:s.contents}))),a.push(...e.csvs.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),a.push(...e.jsons.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),a.push({path:"src/routes/index.svelte",data:e.main.contents}),console.log("here");const j=E(a.filter(Boolean),"path",!1);I(z(j),`layercake-${l?"ssr-":""}${d}.zip`),o(0,c=!1)}return i.$$set=n=>{"data"in n&&o(2,e=n.data),"slug"in n&&o(3,d=n.slug),"ssr"in n&&o(4,l=n.ssr)},[c,_,e,d,l]}class G extends y{constructor(t){super();k(this,t,M,J,v,{data:2,slug:3,ssr:4})}}function H(i){const t=i.split("/"),o=t[t.length-1].split(".");return o.pop(),o.join(".").toLowerCase()}export{G as D,H as c};