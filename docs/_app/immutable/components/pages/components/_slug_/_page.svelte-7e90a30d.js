import{S as Je,i as Oe,s as Fe,k as b,q,l as k,m as D,r as B,h,n as m,p as ge,b as j,J as d,L as ve,C as ze,w as ye,a as $,x as ue,V as Ge,c as H,y as Se,I as Te,z as fe,u as ne,t as he,d as Ke,f as de,A as me,N as le,Z as Qe,e as se,g as We}from"../../../../chunks/index-21aa7309.js";import{d as Ve,t as Xe,M as Ye}from"../../../../chunks/downloadBlob-daab118f.js";import{H as _e,h as $e}from"../../../../chunks/hljsDefineSvelte-185b3d8f.js";import{u as xe}from"../../../../chunks/Brush.html-9dea813a.js";import{c as et}from"../../../../chunks/_components-ef8898a4.js";function tt(s){let e,l,t,n;return{c(){e=b("button"),l=q("Download      "),this.h()},l(r){e=k(r,"BUTTON",{title:!0,class:!0,style:!0});var o=D(e);l=B(o,"Download      "),o.forEach(h),this.h()},h(){e.disabled=s[0],m(e,"title","download zip file"),m(e,"class","icon svelte-1gef78k"),ge(e,"background-image","url(/icons/download.svg)")},m(r,o){j(r,e,o),d(e,l),t||(n=ve(e,"click",s[1]),t=!0)},p(r,[o]){o&1&&(e.disabled=r[0])},i:ze,o:ze,d(r){r&&h(e),t=!1,n()}}}function lt(s,e,l){let{data:t={}}=e,{slug:n}=e,r=!1;async function o(){l(0,r=!0);const a=[];a.push(...t.modules.map(i=>({path:i.slug.replace("./",""),data:i.contents}))),a.push({path:n,data:t.main.contents});const f=xe(a.filter(Boolean),"path",!1);if(f.length===1)Ve(f[0].data,`layercake-${n}`,!0);else{const i=n.split(".");Ve(Xe(f),`layercake-${i[0]}.zip`)}l(0,r=!1)}return s.$$set=a=>{"data"in a&&l(2,t=a.data),"slug"in a&&l(3,n=a.slug)},[r,o,t,n]}class st extends Je{constructor(e){super(),Oe(this,e,lt,tt,Fe,{data:2,slug:3})}}const{document:pe}=Qe;function He(s,e,l){const t=s.slice();return t[15]=e[l],t}function je(s,e,l){const t=s.slice();return t[15]=e[l],t}function Ce(s,e,l){const t=s.slice();return t[20]=e[l],t}function Le(s,e,l){const t=s.slice();return t[23]=e[l],t}function Me(s){let e,l=s[6](s[3])+"";return{c(){e=b("div"),this.h()},l(t){e=k(t,"DIV",{id:!0,class:!0});var n=D(e);n.forEach(h),this.h()},h(){m(e,"id","params-table"),m(e,"class","svelte-2w8zgn")},m(t,n){j(t,e,n),e.innerHTML=l},p(t,n){n&8&&l!==(l=t[6](t[3])+"")&&(e.innerHTML=l)},d(t){t&&h(e)}}}function Re(s){let e,l,t=s[1].usedIn[0].matches.length===0&&s[1].usedIn[1].matches.length>0?" SSR":"",n,r,o,a,f=s[1].usedIn,i=[];for(let u=0;u<f.length;u+=1)i[u]=Pe(Ce(s,f,u));return{c(){e=b("h3"),l=q("Used in these"),n=q(t),r=q(" examples:"),o=$();for(let u=0;u<i.length;u+=1)i[u].c();a=se(),this.h()},l(u){e=k(u,"H3",{class:!0});var E=D(e);l=B(E,"Used in these"),n=B(E,t),r=B(E," examples:"),E.forEach(h),o=H(u);for(let g=0;g<i.length;g+=1)i[g].l(u);a=se(),this.h()},h(){m(e,"class","svelte-2w8zgn")},m(u,E){j(u,e,E),d(e,l),d(e,n),d(e,r),j(u,o,E);for(let g=0;g<i.length;g+=1)i[g].m(u,E);j(u,a,E)},p(u,E){if(E&2&&t!==(t=u[1].usedIn[0].matches.length===0&&u[1].usedIn[1].matches.length>0?" SSR":"")&&ne(n,t),E&2){f=u[1].usedIn;let g;for(g=0;g<f.length;g+=1){const C=Ce(u,f,g);i[g]?i[g].p(C,E):(i[g]=Pe(C),i[g].c(),i[g].m(a.parentNode,a))}for(;g<i.length;g+=1)i[g].d(1);i.length=f.length}},d(u){u&&h(e),u&&h(o),le(i,u),u&&h(a)}}}function qe(s){let e,l,t,n=s[20].group==="SSR"&&s[1].usedIn[0].matches.length>0&&Be(),r=s[20].matches,o=[];for(let a=0;a<r.length;a+=1)o[a]=Ne(Le(s,r,a));return{c(){n&&n.c(),e=$(),l=b("ul");for(let a=0;a<o.length;a+=1)o[a].c();t=$(),this.h()},l(a){n&&n.l(a),e=H(a),l=k(a,"UL",{class:!0});var f=D(l);for(let i=0;i<o.length;i+=1)o[i].l(f);t=H(f),f.forEach(h),this.h()},h(){m(l,"class","svelte-2w8zgn")},m(a,f){n&&n.m(a,f),j(a,e,f),j(a,l,f);for(let i=0;i<o.length;i+=1)o[i].m(l,null);d(l,t)},p(a,f){if(a[20].group==="SSR"&&a[1].usedIn[0].matches.length>0?n||(n=Be(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),f&2){r=a[20].matches;let i;for(i=0;i<r.length;i+=1){const u=Le(a,r,i);o[i]?o[i].p(u,f):(o[i]=Ne(u),o[i].c(),o[i].m(l,t))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},d(a){n&&n.d(a),a&&h(e),a&&h(l),le(o,a)}}}function Be(s){let e,l;return{c(){e=b("h3"),l=q("SSR Examples:"),this.h()},l(t){e=k(t,"H3",{class:!0});var n=D(e);l=B(n,"SSR Examples:"),n.forEach(h),this.h()},h(){m(e,"class","svelte-2w8zgn")},m(t,n){j(t,e,n),d(e,l)},d(t){t&&h(e)}}}function Ne(s){let e,l,t=s[23].split("/").pop()+"",n,r;return{c(){e=b("li"),l=b("a"),n=q(t),this.h()},l(o){e=k(o,"LI",{});var a=D(e);l=k(a,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var f=D(l);n=B(f,t),f.forEach(h),a.forEach(h),this.h()},h(){m(l,"href",r=s[23]),m(l,"sveltekit:prefetch",""),m(l,"class","svelte-2w8zgn")},m(o,a){j(o,e,a),d(e,l),d(l,n)},p(o,a){a&2&&t!==(t=o[23].split("/").pop()+"")&&ne(n,t),a&2&&r!==(r=o[23])&&m(l,"href",r)},d(o){o&&h(e)}}}function Pe(s){let e,l=s[20].matches.length>0&&qe(s);return{c(){l&&l.c(),e=se()},l(t){l&&l.l(t),e=se()},m(t,n){l&&l.m(t,n),j(t,e,n)},p(t,n){t[20].matches.length>0?l?l.p(t,n):(l=qe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&h(e)}}}function Ue(s){let e,l=s[15].slug+"",t,n,r,o,a;function f(){return s[10](s[15])}return{c(){e=b("li"),t=q(l),n=$(),this.h()},l(i){e=k(i,"LI",{class:!0});var u=D(e);t=B(u,l),n=H(u),u.forEach(h),this.h()},h(){m(e,"class",r="tab "+(s[2]===s[15].slug?"active":"")+" svelte-2w8zgn")},m(i,u){j(i,e,u),d(e,t),d(e,n),o||(a=ve(e,"click",f),o=!0)},p(i,u){s=i,u&16&&l!==(l=s[15].slug+"")&&ne(t,l),u&20&&r!==(r="tab "+(s[2]===s[15].slug?"active":"")+" svelte-2w8zgn")&&m(e,"class",r)},d(i){i&&h(e),o=!1,a()}}}function Ae(s){let e,l,t=s[7](s[15].contents,s[15].slug)+"",n;return{c(){e=b("div"),l=b("pre"),n=$(),this.h()},l(r){e=k(r,"DIV",{class:!0,style:!0});var o=D(e);l=k(o,"PRE",{class:!0});var a=D(l);a.forEach(h),n=H(o),o.forEach(h),this.h()},h(){m(l,"class","svelte-2w8zgn"),m(e,"class","contents"),ge(e,"display",s[2]===s[15].slug?"block":"none")},m(r,o){j(r,e,o),d(e,l),l.innerHTML=t,d(e,n)},p(r,o){o&16&&t!==(t=r[7](r[15].contents,r[15].slug)+"")&&(l.innerHTML=t),o&20&&ge(e,"display",r[2]===r[15].slug?"block":"none")},d(r){r&&h(e)}}}function nt(s){let e,l,t,n,r,o,a,f,i=s[5].slug+"",u,E,g,C,w,G,P,L,v,V,N=s[6](s[1].componentDescription)+"",F,Y,U,ae,M,A,oe,R,K,ie,x,J,re,we;pe.title=e=s[5].slug+" component";var Q=s[5].component;function be(c){return{}}Q&&(w=ye(Q,be())),L=new st({props:{data:s[1],slug:s[0]}});let I=s[1].hasjsDoctable===!0&&Me(s),z=(s[1].usedIn[0].matches.length>0||s[1].usedIn[1].matches.length>0)&&Re(s),W=s[4],y=[];for(let c=0;c<W.length;c+=1)y[c]=Ue(je(s,W,c));let X=s[4],S=[];for(let c=0;c<X.length;c+=1)S[c]=Ae(He(s,X,c));return{c(){l=$(),t=b("div"),n=b("div"),r=b("a"),o=q("← View all components"),a=$(),f=b("h1"),u=q(i),E=q(" component"),g=$(),C=b("div"),w&&ue(w.$$.fragment),G=$(),P=b("div"),ue(L.$$.fragment),v=$(),V=b("div"),F=$(),I&&I.c(),Y=$(),U=b("div"),z&&z.c(),ae=$(),M=b("div"),A=b("ul");for(let c=0;c<y.length;c+=1)y[c].c();oe=$(),R=b("div"),K=b("div"),ie=$();for(let c=0;c<S.length;c+=1)S[c].c();this.h()},l(c){Ge("svelte-1675z5z",pe.head).forEach(h),l=H(c),t=k(c,"DIV",{class:!0});var p=D(t);n=k(p,"DIV",{class:!0});var _=D(n);r=k(_,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var O=D(r);o=B(O,"← View all components"),O.forEach(h),_.forEach(h),a=H(p),f=k(p,"H1",{class:!0});var ce=D(f);u=B(ce,i),E=B(ce," component"),ce.forEach(h),g=H(p),C=k(p,"DIV",{class:!0});var ke=D(C);w&&Se(w.$$.fragment,ke),ke.forEach(h),G=H(p),P=k(p,"DIV",{class:!0});var De=D(P);Se(L.$$.fragment,De),De.forEach(h),v=H(p),V=k(p,"DIV",{class:!0});var Ze=D(V);Ze.forEach(h),F=H(p),I&&I.l(p),Y=H(p),U=k(p,"DIV",{id:!0,class:!0});var Ee=D(U);z&&z.l(Ee),Ee.forEach(h),ae=H(p),M=k(p,"DIV",{id:!0,class:!0});var ee=D(M);A=k(ee,"UL",{id:!0,class:!0});var Ie=D(A);for(let Z=0;Z<y.length;Z+=1)y[Z].l(Ie);Ie.forEach(h),oe=H(ee),R=k(ee,"DIV",{id:!0,class:!0});var te=D(R);K=k(te,"DIV",{class:!0}),D(K).forEach(h),ie=H(te);for(let Z=0;Z<S.length;Z+=1)S[Z].l(te);te.forEach(h),ee.forEach(h),p.forEach(h),this.h()},h(){m(r,"href","/components"),m(r,"sveltekit:prefetch",""),m(r,"class","svelte-2w8zgn"),m(n,"class","all-components svelte-2w8zgn"),m(f,"class","svelte-2w8zgn"),m(C,"class","chart-hero svelte-2w8zgn"),m(P,"class","download svelte-2w8zgn"),m(V,"class","dek svelte-2w8zgn"),m(U,"id","used-in"),m(U,"class","svelte-2w8zgn"),m(A,"id","page-nav"),m(A,"class","svelte-2w8zgn"),m(K,"class","copy svelte-2w8zgn"),m(R,"id","contents-container"),m(R,"class","svelte-2w8zgn"),m(M,"id","pages"),m(M,"class",x=Te(s[1].dek?"has-dek":"")+" svelte-2w8zgn"),m(t,"class","main svelte-2w8zgn")},m(c,T){j(c,l,T),j(c,t,T),d(t,n),d(n,r),d(r,o),d(t,a),d(t,f),d(f,u),d(f,E),d(t,g),d(t,C),w&&fe(w,C,null),d(t,G),d(t,P),fe(L,P,null),d(t,v),d(t,V),V.innerHTML=N,d(t,F),I&&I.m(t,null),d(t,Y),d(t,U),z&&z.m(U,null),d(t,ae),d(t,M),d(M,A);for(let p=0;p<y.length;p+=1)y[p].m(A,null);d(M,oe),d(M,R),d(R,K),d(R,ie);for(let p=0;p<S.length;p+=1)S[p].m(R,null);J=!0,re||(we=ve(K,"click",s[8]),re=!0)},p(c,[T]){if((!J||T&32)&&e!==(e=c[5].slug+" component")&&(pe.title=e),(!J||T&32)&&i!==(i=c[5].slug+"")&&ne(u,i),Q!==(Q=c[5].component)){if(w){We();const _=w;he(_.$$.fragment,1,0,()=>{me(_,1)}),Ke()}Q?(w=ye(Q,be()),ue(w.$$.fragment),de(w.$$.fragment,1),fe(w,C,null)):w=null}const p={};if(T&2&&(p.data=c[1]),T&1&&(p.slug=c[0]),L.$set(p),(!J||T&2)&&N!==(N=c[6](c[1].componentDescription)+"")&&(V.innerHTML=N),c[1].hasjsDoctable===!0?I?I.p(c,T):(I=Me(c),I.c(),I.m(t,Y)):I&&(I.d(1),I=null),c[1].usedIn[0].matches.length>0||c[1].usedIn[1].matches.length>0?z?z.p(c,T):(z=Re(c),z.c(),z.m(U,null)):z&&(z.d(1),z=null),T&20){W=c[4];let _;for(_=0;_<W.length;_+=1){const O=je(c,W,_);y[_]?y[_].p(O,T):(y[_]=Ue(O),y[_].c(),y[_].m(A,null))}for(;_<y.length;_+=1)y[_].d(1);y.length=W.length}if(T&148){X=c[4];let _;for(_=0;_<X.length;_+=1){const O=He(c,X,_);S[_]?S[_].p(O,T):(S[_]=Ae(O),S[_].c(),S[_].m(R,null))}for(;_<S.length;_+=1)S[_].d(1);S.length=X.length}(!J||T&2&&x!==(x=Te(c[1].dek?"has-dek":"")+" svelte-2w8zgn"))&&m(M,"class",x)},i(c){J||(w&&de(w.$$.fragment,c),de(L.$$.fragment,c),J=!0)},o(c){w&&he(w.$$.fragment,c),he(L.$$.fragment,c),J=!1},d(c){c&&h(l),c&&h(t),w&&me(w),me(L),I&&I.d(),z&&z.d(),le(y,c),le(S,c),re=!1,we()}}}function at(s){const e=l=>l.map(t=>`\`${t.name}\``).join(" &vert; ");if(s.name)return`\`${s.name}\``;if(s.type.elements)return`(${e(s.type.elements)})`;if(s.expression){if(s.expression.name)return`\`${s.expression.name}\``;if(s.expression.elements)return`(${e(s.expression.elements)})`}}function ot(s){return s?`\`${s}\``:"None"}function it(s){return`<center>${s.type!=="OptionalType"?"yes":"no"}</center>`}function rt(s,e,l){let t,n;const r=new Ye({html:!0,linkfify:!0});_e.registerLanguage("svelte",$e),$e(_e);let{data:o}=e,{slug:a,content:f,active:i}=o;function u(v){return r.render(v)}function E(v,V){const N=V.split(".");let F=N[N.length-1];return F==="csv"&&(F="diff"),_e.highlight(v,{language:F}).value}const g=new Map;et.flatMap(v=>v.components).forEach(v=>{g.set(v.slug,v)});const C=`|Param|Default|Required|Description|
|-----|-------|--------|-----------|`;let w="",G="";f.hasjsDoctable===!0&&(w=`${f.jsdocParsed.tags.map(v=>`**${v.name}** ${at(v.type)}|${ot(v.default)}|${it(v.type)}|${v.description.replace(/^(-|–|—)/g,"").trim()}`).join(`
`)}`,G=f.jsdocParsed.tags.length?`${C}
${w}`:"");function P(){const v=t[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",v);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const V=document.createElement("textarea");V.textContent=v,V.style.position="fixed",document.body.appendChild(V),V.select();try{return document.execCommand("copy")}catch(N){return console.warn("Copy to clipboard failed.",N),!1}finally{document.body.removeChild(V)}}}const L=v=>l(2,i=v.slug);return s.$$set=v=>{"data"in v&&l(9,o=v.data)},s.$$.update=()=>{s.$$.dirty&512&&l(0,{slug:a,content:f,active:i}=o,a,(l(1,f),l(9,o)),(l(2,i),l(9,o))),s.$$.dirty&2&&l(4,t=[f.main].concat(f.modules)),s.$$.dirty&1&&l(5,n=g.get(a))},[a,f,i,G,t,n,u,E,P,o,L]}class mt extends Je{constructor(e){super(),Oe(this,e,rt,nt,Fe,{data:9})}}export{mt as default};