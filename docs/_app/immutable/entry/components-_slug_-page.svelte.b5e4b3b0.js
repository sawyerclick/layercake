import{S as Fe,i as Je,s as Oe,k as w,q,l as E,m as D,r as B,h,n as m,p as ve,b as j,F as d,H as x,M as Ie,x as ye,a as H,y as fe,T as Ge,c as V,z as Se,E as Te,A as he,u as ae,d as de,f as Qe,g as me,B as _e,J as se,K as Ke,X as We,e as ne,v as Ye}from"../chunks/index.bc069e12.js";import{d as He,t as Ze,M as xe}from"../chunks/downloadBlob.8c21ee6e.js";import{H as pe,h as Ve}from"../chunks/hljsDefineSvelte.185b3d8f.js";import{u as et}from"../chunks/Brush.html.9d358d3c.js";import{c as tt}from"../chunks/_components.51d2ac04.js";function lt(s){let e,l,t,n;return{c(){e=w("button"),l=q("Download      "),this.h()},l(r){e=E(r,"BUTTON",{title:!0,class:!0,style:!0});var o=D(e);l=B(o,"Download      "),o.forEach(h),this.h()},h(){e.disabled=s[0],m(e,"title","download zip file"),m(e,"class","icon svelte-1gef78k"),ve(e,"background-image","url(/icons/download.svg)")},m(r,o){j(r,e,o),d(e,l),t||(n=x(e,"click",s[1]),t=!0)},p(r,[o]){o&1&&(e.disabled=r[0])},i:Ie,o:Ie,d(r){r&&h(e),t=!1,n()}}}function st(s,e,l){let{data:t={}}=e,{slug:n}=e,r=!1;async function o(){l(0,r=!0);const a=[];a.push(...t.modules.map(i=>({path:i.slug.replace("./",""),data:i.contents}))),a.push({path:n,data:t.main.contents});const f=et(a.filter(Boolean),"path",!1);if(f.length===1)He(f[0].data,`layercake-${n}`,!0);else{const i=n.split(".");He(Ze(f),`layercake-${i[0]}.zip`)}l(0,r=!1)}return s.$$set=a=>{"data"in a&&l(2,t=a.data),"slug"in a&&l(3,n=a.slug)},[r,o,t,n]}class nt extends Fe{constructor(e){super(),Je(this,e,st,lt,Oe,{data:2,slug:3})}}const{document:ge}=We;function je(s,e,l){const t=s.slice();return t[16]=e[l],t}function $e(s,e,l){const t=s.slice();return t[16]=e[l],t}function Ce(s,e,l){const t=s.slice();return t[21]=e[l],t}function Le(s,e,l){const t=s.slice();return t[24]=e[l],t}function Me(s){let e,l=s[6](s[3])+"";return{c(){e=w("div"),this.h()},l(t){e=E(t,"DIV",{id:!0,class:!0});var n=D(e);n.forEach(h),this.h()},h(){m(e,"id","params-table"),m(e,"class","svelte-7in5zh")},m(t,n){j(t,e,n),e.innerHTML=l},p(t,n){n&8&&l!==(l=t[6](t[3])+"")&&(e.innerHTML=l)},d(t){t&&h(e)}}}function Re(s){let e,l,t=s[1].usedIn[0].matches.length===0&&s[1].usedIn[1].matches.length>0?" SSR":"",n,r,o,a,f=s[1].usedIn,i=[];for(let u=0;u<f.length;u+=1)i[u]=Pe(Ce(s,f,u));return{c(){e=w("h3"),l=q("Used in these"),n=q(t),r=q(" examples:"),o=H();for(let u=0;u<i.length;u+=1)i[u].c();a=ne(),this.h()},l(u){e=E(u,"H3",{class:!0});var g=D(e);l=B(g,"Used in these"),n=B(g,t),r=B(g," examples:"),g.forEach(h),o=V(u);for(let b=0;b<i.length;b+=1)i[b].l(u);a=ne(),this.h()},h(){m(e,"class","svelte-7in5zh")},m(u,g){j(u,e,g),d(e,l),d(e,n),d(e,r),j(u,o,g);for(let b=0;b<i.length;b+=1)i[b].m(u,g);j(u,a,g)},p(u,g){if(g&2&&t!==(t=u[1].usedIn[0].matches.length===0&&u[1].usedIn[1].matches.length>0?" SSR":"")&&ae(n,t),g&2){f=u[1].usedIn;let b;for(b=0;b<f.length;b+=1){const $=Ce(u,f,b);i[b]?i[b].p($,g):(i[b]=Pe($),i[b].c(),i[b].m(a.parentNode,a))}for(;b<i.length;b+=1)i[b].d(1);i.length=f.length}},d(u){u&&h(e),u&&h(o),se(i,u),u&&h(a)}}}function qe(s){let e,l,t,n=s[21].group==="SSR"&&s[1].usedIn[0].matches.length>0&&Be(),r=s[21].matches,o=[];for(let a=0;a<r.length;a+=1)o[a]=Ne(Le(s,r,a));return{c(){n&&n.c(),e=H(),l=w("ul");for(let a=0;a<o.length;a+=1)o[a].c();t=H(),this.h()},l(a){n&&n.l(a),e=V(a),l=E(a,"UL",{class:!0});var f=D(l);for(let i=0;i<o.length;i+=1)o[i].l(f);t=V(f),f.forEach(h),this.h()},h(){m(l,"class","svelte-7in5zh")},m(a,f){n&&n.m(a,f),j(a,e,f),j(a,l,f);for(let i=0;i<o.length;i+=1)o[i].m(l,null);d(l,t)},p(a,f){if(a[21].group==="SSR"&&a[1].usedIn[0].matches.length>0?n||(n=Be(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),f&2){r=a[21].matches;let i;for(i=0;i<r.length;i+=1){const u=Le(a,r,i);o[i]?o[i].p(u,f):(o[i]=Ne(u),o[i].c(),o[i].m(l,t))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},d(a){n&&n.d(a),a&&h(e),a&&h(l),se(o,a)}}}function Be(s){let e,l;return{c(){e=w("h3"),l=q("SSR Examples:"),this.h()},l(t){e=E(t,"H3",{class:!0});var n=D(e);l=B(n,"SSR Examples:"),n.forEach(h),this.h()},h(){m(e,"class","svelte-7in5zh")},m(t,n){j(t,e,n),d(e,l)},d(t){t&&h(e)}}}function Ne(s){let e,l,t=s[24].split("/").pop()+"",n,r;return{c(){e=w("li"),l=w("a"),n=q(t),this.h()},l(o){e=E(o,"LI",{});var a=D(e);l=E(a,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var f=D(l);n=B(f,t),f.forEach(h),a.forEach(h),this.h()},h(){m(l,"href",r=s[24]),m(l,"sveltekit:prefetch",""),m(l,"class","svelte-7in5zh")},m(o,a){j(o,e,a),d(e,l),d(l,n)},p(o,a){a&2&&t!==(t=o[24].split("/").pop()+"")&&ae(n,t),a&2&&r!==(r=o[24])&&m(l,"href",r)},d(o){o&&h(e)}}}function Pe(s){let e,l=s[21].matches.length>0&&qe(s);return{c(){l&&l.c(),e=ne()},l(t){l&&l.l(t),e=ne()},m(t,n){l&&l.m(t,n),j(t,e,n)},p(t,n){t[21].matches.length>0?l?l.p(t,n):(l=qe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&h(e)}}}function Ue(s){let e,l=s[16].slug+"",t,n,r,o,a;function f(){return s[10](s[16])}function i(){return s[11](s[16])}return{c(){e=w("li"),t=q(l),n=H(),this.h()},l(u){e=E(u,"LI",{class:!0});var g=D(e);t=B(g,l),n=V(g),g.forEach(h),this.h()},h(){m(e,"class",r="tab "+(s[2]===s[16].slug?"active":"")+" svelte-7in5zh")},m(u,g){j(u,e,g),d(e,t),d(e,n),o||(a=[x(e,"click",f),x(e,"keypress",i)],o=!0)},p(u,g){s=u,g&16&&l!==(l=s[16].slug+"")&&ae(t,l),g&20&&r!==(r="tab "+(s[2]===s[16].slug?"active":"")+" svelte-7in5zh")&&m(e,"class",r)},d(u){u&&h(e),o=!1,Ke(a)}}}function Ae(s){let e,l,t=s[7](s[16].contents,s[16].slug)+"",n;return{c(){e=w("div"),l=w("pre"),n=H(),this.h()},l(r){e=E(r,"DIV",{class:!0,style:!0});var o=D(e);l=E(o,"PRE",{class:!0});var a=D(l);a.forEach(h),n=V(o),o.forEach(h),this.h()},h(){m(l,"class","svelte-7in5zh"),m(e,"class","contents"),ve(e,"display",s[2]===s[16].slug?"block":"none")},m(r,o){j(r,e,o),d(e,l),l.innerHTML=t,d(e,n)},p(r,o){o&16&&t!==(t=r[7](r[16].contents,r[16].slug)+"")&&(l.innerHTML=t),o&20&&ve(e,"display",r[2]===r[16].slug?"block":"none")},d(r){r&&h(e)}}}function at(s){let e,l,t,n,r,o,a,f,i=s[5].slug+"",u,g,b,$,k,G,N,L,Z,_,C=s[6](s[1].componentDescription)+"",P,U,A,oe,M,F,ie,R,K,re,ee,J,ce,be;ge.title=e=s[5].slug+" component";var Q=s[5].component;function ke(c){return{}}Q&&(k=ye(Q,ke())),L=new nt({props:{data:s[1],slug:s[0]}});let z=s[1].hasjsDoctable===!0&&Me(s),I=(s[1].usedIn[0].matches.length>0||s[1].usedIn[1].matches.length>0)&&Re(s),W=s[4],y=[];for(let c=0;c<W.length;c+=1)y[c]=Ue($e(s,W,c));let Y=s[4],S=[];for(let c=0;c<Y.length;c+=1)S[c]=Ae(je(s,Y,c));return{c(){l=H(),t=w("div"),n=w("div"),r=w("a"),o=q("← View all components"),a=H(),f=w("h1"),u=q(i),g=q(" component"),b=H(),$=w("div"),k&&fe(k.$$.fragment),G=H(),N=w("div"),fe(L.$$.fragment),Z=H(),_=w("div"),P=H(),z&&z.c(),U=H(),A=w("div"),I&&I.c(),oe=H(),M=w("div"),F=w("ul");for(let c=0;c<y.length;c+=1)y[c].c();ie=H(),R=w("div"),K=w("div"),re=H();for(let c=0;c<S.length;c+=1)S[c].c();this.h()},l(c){Ge("svelte-1675z5z",ge.head).forEach(h),l=V(c),t=E(c,"DIV",{class:!0});var v=D(t);n=E(v,"DIV",{class:!0});var p=D(n);r=E(p,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var O=D(r);o=B(O,"← View all components"),O.forEach(h),p.forEach(h),a=V(v),f=E(v,"H1",{class:!0});var ue=D(f);u=B(ue,i),g=B(ue," component"),ue.forEach(h),b=V(v),$=E(v,"DIV",{class:!0});var we=D($);k&&Se(k.$$.fragment,we),we.forEach(h),G=V(v),N=E(v,"DIV",{class:!0});var Ee=D(N);Se(L.$$.fragment,Ee),Ee.forEach(h),Z=V(v),_=E(v,"DIV",{class:!0});var Xe=D(_);Xe.forEach(h),P=V(v),z&&z.l(v),U=V(v),A=E(v,"DIV",{id:!0,class:!0});var De=D(A);I&&I.l(De),De.forEach(h),oe=V(v),M=E(v,"DIV",{id:!0,class:!0});var te=D(M);F=E(te,"UL",{id:!0,class:!0});var ze=D(F);for(let X=0;X<y.length;X+=1)y[X].l(ze);ze.forEach(h),ie=V(te),R=E(te,"DIV",{id:!0,class:!0});var le=D(R);K=E(le,"DIV",{class:!0}),D(K).forEach(h),re=V(le);for(let X=0;X<S.length;X+=1)S[X].l(le);le.forEach(h),te.forEach(h),v.forEach(h),this.h()},h(){m(r,"href","/components"),m(r,"sveltekit:prefetch",""),m(r,"class","svelte-7in5zh"),m(n,"class","all-components svelte-7in5zh"),m(f,"class","svelte-7in5zh"),m($,"class","chart-hero svelte-7in5zh"),m(N,"class","download svelte-7in5zh"),m(_,"class","dek svelte-7in5zh"),m(A,"id","used-in"),m(A,"class","svelte-7in5zh"),m(F,"id","page-nav"),m(F,"class","svelte-7in5zh"),m(K,"class","copy svelte-7in5zh"),m(R,"id","contents-container"),m(R,"class","svelte-7in5zh"),m(M,"id","pages"),m(M,"class",ee=Te(s[1].dek?"has-dek":"")+" svelte-7in5zh"),m(t,"class","main svelte-7in5zh")},m(c,T){j(c,l,T),j(c,t,T),d(t,n),d(n,r),d(r,o),d(t,a),d(t,f),d(f,u),d(f,g),d(t,b),d(t,$),k&&he(k,$,null),d(t,G),d(t,N),he(L,N,null),d(t,Z),d(t,_),_.innerHTML=C,d(t,P),z&&z.m(t,null),d(t,U),d(t,A),I&&I.m(A,null),d(t,oe),d(t,M),d(M,F);for(let v=0;v<y.length;v+=1)y[v].m(F,null);d(M,ie),d(M,R),d(R,K),d(R,re);for(let v=0;v<S.length;v+=1)S[v].m(R,null);J=!0,ce||(be=[x(K,"click",s[8]),x(K,"keypress",s[8])],ce=!0)},p(c,[T]){if((!J||T&32)&&e!==(e=c[5].slug+" component")&&(ge.title=e),(!J||T&32)&&i!==(i=c[5].slug+"")&&ae(u,i),Q!==(Q=c[5].component)){if(k){Ye();const p=k;de(p.$$.fragment,1,0,()=>{_e(p,1)}),Qe()}Q?(k=ye(Q,ke()),fe(k.$$.fragment),me(k.$$.fragment,1),he(k,$,null)):k=null}const v={};if(T&2&&(v.data=c[1]),T&1&&(v.slug=c[0]),L.$set(v),(!J||T&2)&&C!==(C=c[6](c[1].componentDescription)+"")&&(_.innerHTML=C),c[1].hasjsDoctable===!0?z?z.p(c,T):(z=Me(c),z.c(),z.m(t,U)):z&&(z.d(1),z=null),c[1].usedIn[0].matches.length>0||c[1].usedIn[1].matches.length>0?I?I.p(c,T):(I=Re(c),I.c(),I.m(A,null)):I&&(I.d(1),I=null),T&20){W=c[4];let p;for(p=0;p<W.length;p+=1){const O=$e(c,W,p);y[p]?y[p].p(O,T):(y[p]=Ue(O),y[p].c(),y[p].m(F,null))}for(;p<y.length;p+=1)y[p].d(1);y.length=W.length}if(T&148){Y=c[4];let p;for(p=0;p<Y.length;p+=1){const O=je(c,Y,p);S[p]?S[p].p(O,T):(S[p]=Ae(O),S[p].c(),S[p].m(R,null))}for(;p<S.length;p+=1)S[p].d(1);S.length=Y.length}(!J||T&2&&ee!==(ee=Te(c[1].dek?"has-dek":"")+" svelte-7in5zh"))&&m(M,"class",ee)},i(c){J||(k&&me(k.$$.fragment,c),me(L.$$.fragment,c),J=!0)},o(c){k&&de(k.$$.fragment,c),de(L.$$.fragment,c),J=!1},d(c){c&&h(l),c&&h(t),k&&_e(k),_e(L),z&&z.d(),I&&I.d(),se(y,c),se(S,c),ce=!1,Ke(be)}}}function ot(s){const e=l=>l.map(t=>`\`${t.name}\``).join(" &vert; ");if(s.name)return`\`${s.name}\``;if(s.type.elements)return`(${e(s.type.elements)})`;if(s.expression){if(s.expression.name)return`\`${s.expression.name}\``;if(s.expression.elements)return`(${e(s.expression.elements)})`}}function it(s){return s?`\`${s}\``:"None"}function rt(s){return`<center>${s.type!=="OptionalType"?"yes":"no"}</center>`}function ct(s,e,l){let t,n;const r=new xe({html:!0,linkfify:!0});pe.registerLanguage("svelte",Ve),Ve(pe);let{data:o}=e,{slug:a,content:f,active:i}=o;function u(_){return r.render(_)}function g(_,C){const P=C.split(".");let U=P[P.length-1];return U==="csv"&&(U="diff"),pe.highlight(_,{language:U}).value}const b=new Map;tt.flatMap(_=>_.components).forEach(_=>{b.set(_.slug,_)});const $=`|Param|Default|Required|Description|
|-----|-------|--------|-----------|`;let k="",G="";f.hasjsDoctable===!0&&(k=`${f.jsdocParsed.tags.map(_=>`**${_.name}** ${ot(_.type)}|${it(_.default)}|${rt(_.type)}|${_.description.replace(/^(-|–|—)/g,"").trim()}`).join(`
`)}`,G=f.jsdocParsed.tags.length?`${$}
${k}`:"");function N(){const _=t[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",_);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const C=document.createElement("textarea");C.textContent=_,C.style.position="fixed",document.body.appendChild(C),C.select();try{return document.execCommand("copy")}catch(P){return console.warn("Copy to clipboard failed.",P),!1}finally{document.body.removeChild(C)}}}const L=_=>l(2,i=_.slug),Z=_=>l(2,i=_.slug);return s.$$set=_=>{"data"in _&&l(9,o=_.data)},s.$$.update=()=>{s.$$.dirty&512&&l(0,{slug:a,content:f,active:i}=o,a,(l(1,f),l(9,o)),(l(2,i),l(9,o))),s.$$.dirty&2&&l(4,t=[f.main].concat(f.modules)),s.$$.dirty&1&&l(5,n=b.get(a))},[a,f,i,G,t,n,u,g,N,o,L,Z]}class _t extends Fe{constructor(e){super(),Je(this,e,ct,at,Oe,{data:9})}}export{_t as default};
