import{S as je,i as Ce,s as Ie,x as ue,a as $,k as j,q as ae,y as Z,T as He,h as m,c as P,l as C,m as I,r as oe,z as he,n as f,E as _e,b as U,F as p,A as x,H as O,u as Ee,d as ee,f as Te,g as te,B as le,J as pe,K as De,X as Le,p as me,v as Me}from"../chunks/index.bc069e12.js";import{M as Ve}from"../chunks/downloadBlob.8c21ee6e.js";import{H as se,h as ve}from"../chunks/hljsDefineSvelte.185b3d8f.js";import{D as Se,c as B}from"../chunks/cleanTitle.018a96c5.js";import{e as qe}from"../chunks/_examples.481d6679.js";const{document:ne}=Le;function ge(t,s,n){const l=t.slice();return l[13]=s[n],l}function ke(t,s,n){const l=t.slice();return l[13]=s[n],l}function be(t){let s,n=t[5](t[1].dek)+"";return{c(){s=j("div"),this.h()},l(l){s=C(l,"DIV",{class:!0});var o=I(s);o.forEach(m),this.h()},h(){f(s,"class","dek svelte-gjdfxl")},m(l,o){U(l,s,o),s.innerHTML=n},p(l,o){o&2&&n!==(n=l[5](l[1].dek)+"")&&(s.innerHTML=n)},d(l){l&&m(s)}}}function we(t){let s,n=t[13].title+"",l,o,r,i;function h(){return t[9](t[13])}function v(){return t[10](t[13])}return{c(){s=j("li"),l=ae(n),this.h()},l(_){s=C(_,"LI",{class:!0});var D=I(s);l=oe(D,n),D.forEach(m),this.h()},h(){f(s,"class",o="tab "+(t[2]===B(t[13].title)?"active":"")+" svelte-gjdfxl")},m(_,D){U(_,s,D),p(s,l),r||(i=[O(s,"click",h),O(s,"keypress",v)],r=!0)},p(_,D){t=_,D&8&&n!==(n=t[13].title+"")&&Ee(l,n),D&12&&o!==(o="tab "+(t[2]===B(t[13].title)?"active":"")+" svelte-gjdfxl")&&f(s,"class",o)},d(_){_&&m(s),r=!1,De(i)}}}function ye(t){let s,n,l=t[6](t[13].contents,t[13].title)+"",o;return{c(){s=j("div"),n=j("pre"),o=$(),this.h()},l(r){s=C(r,"DIV",{class:!0,style:!0});var i=I(s);n=C(i,"PRE",{class:!0});var h=I(n);h.forEach(m),o=P(i),i.forEach(m),this.h()},h(){f(n,"class","svelte-gjdfxl"),f(s,"class","contents"),me(s,"display",t[2]===B(t[13].title)?"block":"none")},m(r,i){U(r,s,i),p(s,n),n.innerHTML=l,p(s,o)},p(r,i){i&8&&l!==(l=r[6](r[13].contents,r[13].title)+"")&&(n.innerHTML=l),i&12&&me(s,"display",r[2]===B(r[13].title)?"block":"none")},d(r){r&&m(s)}}}function $e(t){let s,n,l,o,r=t[4].title+"",i,h,v,_,D,M,c,R,V,T,u,E,w,H,Q,L,z,W,X,S,Y,re;ne.title=s=t[4].title;var J=t[4].component;function ie(e){return{}}J&&(c=ue(J,ie())),T=new Se({props:{data:t[1],slug:t[0]}});let g=t[1].dek&&be(t),F=t[3],k=[];for(let e=0;e<F.length;e+=1)k[e]=we(ke(t,F,e));let K=t[3],b=[];for(let e=0;e<K.length;e+=1)b[e]=ye(ge(t,K,e));return{c(){n=$(),l=j("div"),o=j("h1"),i=ae(r),h=j("a"),v=ae("Edit"),D=$(),M=j("div"),c&&Z(c.$$.fragment),R=$(),V=j("div"),Z(T.$$.fragment),u=$(),g&&g.c(),E=$(),w=j("div"),H=j("ul");for(let e=0;e<k.length;e+=1)k[e].c();Q=$(),L=j("div"),z=j("div"),W=$();for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){He("svelte-1ynzqk4",ne.head).forEach(m),n=P(e),l=C(e,"DIV",{class:!0});var d=I(l);o=C(d,"H1",{});var a=I(o);i=oe(a,r),h=C(a,"A",{class:!0,href:!0,target:!0,rel:!0});var q=I(h);v=oe(q,"Edit"),q.forEach(m),a.forEach(m),D=P(d),M=C(d,"DIV",{class:!0});var ce=I(M);c&&he(c.$$.fragment,ce),ce.forEach(m),R=P(d),V=C(d,"DIV",{class:!0});var de=I(V);he(T.$$.fragment,de),de.forEach(m),u=P(d),g&&g.l(d),E=P(d),w=C(d,"DIV",{id:!0,class:!0});var G=I(w);H=C(G,"UL",{id:!0,class:!0});var fe=I(H);for(let A=0;A<k.length;A+=1)k[A].l(fe);fe.forEach(m),Q=P(G),L=C(G,"DIV",{id:!0,class:!0});var N=I(L);z=C(N,"DIV",{class:!0}),I(z).forEach(m),W=P(N);for(let A=0;A<b.length;A+=1)b[A].l(N);N.forEach(m),G.forEach(m),d.forEach(m),this.h()},h(){f(h,"class","edit-repl svelte-gjdfxl"),f(h,"href",_="https://svelte.dev/repl/"+t[4].replPath),f(h,"target","_blank"),f(h,"rel","noreferrer"),f(M,"class","chart-hero svelte-gjdfxl"),f(V,"class","download svelte-gjdfxl"),f(H,"id","page-nav"),f(H,"class","svelte-gjdfxl"),f(z,"class","copy svelte-gjdfxl"),f(L,"id","contents-container"),f(L,"class","svelte-gjdfxl"),f(w,"id","pages"),f(w,"class",X=_e(t[1].dek?"has-dek":"")+" svelte-gjdfxl"),f(l,"class","main svelte-gjdfxl")},m(e,y){U(e,n,y),U(e,l,y),p(l,o),p(o,i),p(o,h),p(h,v),p(l,D),p(l,M),c&&x(c,M,null),p(l,R),p(l,V),x(T,V,null),p(l,u),g&&g.m(l,null),p(l,E),p(l,w),p(w,H);for(let d=0;d<k.length;d+=1)k[d].m(H,null);p(w,Q),p(w,L),p(L,z),p(L,W);for(let d=0;d<b.length;d+=1)b[d].m(L,null);S=!0,Y||(re=[O(z,"click",t[7]),O(z,"keypress",t[7])],Y=!0)},p(e,[y]){if((!S||y&16)&&s!==(s=e[4].title)&&(ne.title=s),(!S||y&16)&&r!==(r=e[4].title+"")&&Ee(i,r),(!S||y&16&&_!==(_="https://svelte.dev/repl/"+e[4].replPath))&&f(h,"href",_),J!==(J=e[4].component)){if(c){Me();const a=c;ee(a.$$.fragment,1,0,()=>{le(a,1)}),Te()}J?(c=ue(J,ie()),Z(c.$$.fragment),te(c.$$.fragment,1),x(c,M,null)):c=null}const d={};if(y&2&&(d.data=e[1]),y&1&&(d.slug=e[0]),T.$set(d),e[1].dek?g?g.p(e,y):(g=be(e),g.c(),g.m(l,E)):g&&(g.d(1),g=null),y&12){F=e[3];let a;for(a=0;a<F.length;a+=1){const q=ke(e,F,a);k[a]?k[a].p(q,y):(k[a]=we(q),k[a].c(),k[a].m(H,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=F.length}if(y&76){K=e[3];let a;for(a=0;a<K.length;a+=1){const q=ge(e,K,a);b[a]?b[a].p(q,y):(b[a]=ye(q),b[a].c(),b[a].m(L,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=K.length}(!S||y&2&&X!==(X=_e(e[1].dek?"has-dek":"")+" svelte-gjdfxl"))&&f(w,"class",X)},i(e){S||(c&&te(c.$$.fragment,e),te(T.$$.fragment,e),S=!0)},o(e){c&&ee(c.$$.fragment,e),ee(T.$$.fragment,e),S=!1},d(e){e&&m(n),e&&m(l),c&&le(c),le(T),g&&g.d(),pe(k,e),pe(b,e),Y=!1,De(re)}}}function Pe(t,s,n){let l,o;const r=new Ve({html:!0,linkfify:!0});se.registerLanguage("svelte",ve),ve(se);let{data:i}=s,{slug:h,content:v,active:_}=i;function D(u){return r.render(u)}function M(u,E){const w=E.split(".");let H=w[w.length-1];return H==="csv"&&(H="diff"),se.highlight(u,{language:H}).value}const c=new Map;qe.forEach(u=>{c.set(u.slug,u)});function R(){const u=l.filter(E=>B(E.title)===_)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",u);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const E=document.createElement("textarea");E.textContent=u,E.style.position="fixed",document.body.appendChild(E),E.select();try{return document.execCommand("copy")}catch(w){return console.warn("Copy to clipboard failed.",w),!1}finally{document.body.removeChild(E)}}}const V=u=>n(2,_=B(u.title)),T=u=>n(2,_=B(u.title));return t.$$set=u=>{"data"in u&&n(8,i=u.data)},t.$$.update=()=>{t.$$.dirty&256&&n(0,{slug:h,content:v,active:_}=i,h,(n(1,v),n(8,i)),(n(2,_),n(8,i))),t.$$.dirty&2&&n(3,l=[v.main].concat(v.components).concat(v.componentModules).concat(v.modules).concat(v.componentComponents).concat(v.jsons).concat(v.csvs)),t.$$.dirty&1&&n(4,o=c.get(h))},[h,v,_,l,o,D,M,R,i,V,T]}class Ke extends je{constructor(s){super(),Ce(this,s,Pe,$e,Ie,{data:8})}}export{Ke as default};
