var B=Object.defineProperty;var R=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>R(t,typeof e!="symbol"?e+"":e,n);function q(){}const ct=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function ot(){return Object.create(null)}function z(t){t.forEach(I)}function F(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ut(t){return Object.keys(t).length===0}function ft(t,e,n,i){if(t){const l=j(t,e,n,i);return t[0](l)}}function j(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const c=[],r=Math.max(e.dirty.length,l.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|l[o];return c}return e.dirty|l}return e.dirty}function ht(t,e,n,i,l,c){if(l){const r=j(e,n,i,c);t.p(r,l)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function pt(t){return t&&F(t.destroy)?t.destroy:q}let p=!1;function yt(){p=!0}function gt(){p=!1}function U(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,u=(l>0&&e[n[l]].claim_order<=a?l+1:U(1,l,O=>e[n[O]].claim_order,a))-1;i[s]=n[u]+1;const T=u+1;n[T]=s,l=Math.max(T,l)}const c=[],r=[];let o=e.length-1;for(let s=n[l]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);o>=s;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<r.length;s++){for(;a<c.length&&r[s].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[s],u)}}function J(t,e){t.appendChild(e)}function K(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=E("style");return e.textContent="/* empty */",Q(K(t),e),e.sheet}function Q(t,e){return J(t.head||t,e),e.sheet}function V(t,e){if(p){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function X(t,e,n){t.insertBefore(e,n||null)}function Y(t,e,n){p&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function vt(){return N(" ")}function wt(){return N("")}function Et(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Z=["width","height"];function Nt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Z.indexOf(i)===-1?t[i]=e[i]:L(t,i,e[i])}function Tt(t,e){for(const n in e)L(t,n,e[n])}function At(t){return t.dataset.svelteH}function kt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,l=!1){P(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,l||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,l?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function D(t,e,n,i){return C(t,l=>l.nodeName===e,l=>{const c=[];for(let r=0;r<l.attributes.length;r++){const o=l.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>l.removeAttribute(r))},()=>i(e))}function Mt(t,e,n){return D(t,e,n,E)}function jt(t,e,n){return D(t,e,n,H)}function $(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function Ht(t){return $(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function Lt(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);P(t);const l=t.splice(n,i-n+1);v(l[0]),v(l[l.length-1]);const c=l.slice(1,l.length-1);if(c.length===0)return new g(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,c)}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ct(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class et{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=E(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class g extends et{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Y(this.t,this.n[i],n)}}function Dt(t,e){return new t(e)}let m;function x(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function St(t){y().$$.on_mount.push(t)}function Ot(t){y().$$.after_update.push(t)}function Bt(t){y().$$.on_destroy.push(t)}function Rt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const c=tt(e,n,{cancelable:i});return l.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}const d=[],k=[];let h=[];const M=[],S=Promise.resolve();let w=!1;function nt(){w||(w=!0,S.then(lt))}function qt(){return nt(),S}function it(t){h.push(t)}const b=new Set;let _=0;function lt(){if(_!==0)return;const t=m;do{try{for(;_<d.length;){const e=d[_];_++,x(e),rt(e.$$)}}catch(e){throw d.length=0,_=0,e}for(x(null),d.length=0,_=0;k.length;)k.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];b.has(n)||(b.add(n),n())}h.length=0}while(d.length);for(;M.length;)M.pop()();w=!1,b.clear(),x(t)}function rt(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function Gt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{d as $,it as A,At as B,V as C,Et as D,pt as E,z as F,bt as G,g as H,ft as I,ht as J,dt as K,_t as L,Bt as M,Nt as N,Rt as O,K as P,xt as Q,F as R,tt as S,ct as T,ot as U,lt as V,ut as W,Gt as X,m as Y,x as Z,I as _,vt as a,nt as a0,yt as a1,gt as a2,Ot as b,Ht as c,v as d,wt as e,E as f,Mt as g,kt as h,Y as i,L as j,Ct as k,N as l,$ as m,q as n,St as o,Pt as p,k as q,Dt as r,at as s,qt as t,G as u,H as v,jt as w,Lt as x,Tt as y,mt as z};