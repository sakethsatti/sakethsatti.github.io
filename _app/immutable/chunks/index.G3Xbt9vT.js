var L=Object.defineProperty;var Q=(t,e,n)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var C=(t,e,n)=>Q(t,typeof e!="symbol"?e+"":e,n);import{n as x,P as T,Q as W,d as V,F as v,R as z,A as j,S as X,T as Y,U as I,h as Z,V as q,W as G,X as H,Y as J,Z as N,_ as K,$ as tt,a0 as et,a1 as nt,a2 as st}from"./scheduler.DP1XmPqf.js";const k=typeof window<"u";let it=k?()=>window.performance.now():()=>Date.now(),F=k?t=>requestAnimationFrame(t):x;const y=new Set;function B(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&F(B)}function rt(t){let e;return y.size===0&&F(B),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}const E=new Map;let O=0;function at(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ot(t,e){const n={stylesheet:W(e),rules:{}};return E.set(t,n),n}function U(t,e,n,r,c,f,l,s=0){const u=16.666/r;let i=`{
`;for(let d=0;d<=1;d+=u){const g=e+(n-e)*f(d);i+=d*100+`%{${l(g,1-g)}}
`}const $=i+`100% {${l(n,1-n)}}
}`,o=`__svelte_${at($)}_${s}`,m=T(t),{stylesheet:p,rules:a}=E.get(m)||ot(m,t);a[o]||(a[o]=!0,p.insertRule(`@keyframes ${o} ${$}`,p.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${o} ${r}ms linear ${c}ms 1 both`,O+=1,o}function ft(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),c=n.length-r.length;c&&(t.style.animation=r.join(", "),O-=c,O||ut())}function ut(){F(()=>{O||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),E.clear())})}let w;function lt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function M(t,e,n){t.dispatchEvent(X(`${e?"intro":"outro"}${n}`))}const b=new Set;let h;function yt(){h={r:0,c:[],p:h}}function wt(){h.r||v(h.c),h=h.p}function ct(t,e){t&&t.i&&(b.delete(t),t.i(e))}function xt(t,e,n,r){if(t&&t.o){if(b.has(t))return;b.add(t),h.c.push(()=>{b.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const dt={duration:0};function vt(t,e,n,r){let f=e(t,n,{direction:"both"}),l=r?0:1,s=null,u=null,i=null,$;function o(){i&&ft(t,i)}function m(a,_){const d=a.b-l;return _*=Math.abs(d),{a:l,b:a.b,d,duration:_,start:a.start,end:a.start+_,group:a.group}}function p(a){const{delay:_=0,duration:d=300,easing:g=Y,tick:P=x,css:R}=f||dt,A={start:it()+_,b:a};a||(A.group=h,h.r+=1),"inert"in t&&(a?$!==void 0&&(t.inert=$):($=t.inert,t.inert=!0)),s||u?u=A:(R&&(o(),i=U(t,l,a,d,_,g,R)),a&&P(0,1),s=m(A,d),j(()=>M(t,a,"start")),rt(S=>{if(u&&S>u.start&&(s=m(u,d),u=null,M(t,s.b,"start"),R&&(o(),i=U(t,l,s.b,s.duration,0,g,f.css))),s){if(S>=s.end)P(l=s.b,1-l),M(t,s.b,"end"),u||(s.b?o():--s.group.r||v(s.group.c)),s=null;else if(S>=s.start){const D=S-s.start;l=s.a+s.d*g(D/s.duration),P(l,1-l)}}return!!(s||u)}))}return{run(a){z(f)?lt().then(()=>{f=f({direction:a?"in":"out"}),p(a)}):p(a)},end(){o(),s=u=null}}}function St(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function _t(t,e,n){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),j(()=>{const f=t.$$.on_mount.map(K).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...f):v(f),t.$$.on_mount=[]}),c.forEach(j)}function $t(t,e){const n=t.$$;n.fragment!==null&&(H(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(tt.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(t,e,n,r,c,f,l=null,s=[-1]){const u=J;N(t);const i=t.$$={fragment:null,ctx:[],props:f,update:x,not_equal:c,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:I(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};l&&l(i.root);let $=!1;if(i.ctx=n?n(t,e.props||{},(o,m,...p)=>{const a=p.length?p[0]:m;return i.ctx&&c(i.ctx[o],i.ctx[o]=a)&&(!i.skip_bound&&i.bound[o]&&i.bound[o](a),$&&ht(t,o)),m}):[],i.update(),$=!0,v(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){nt();const o=Z(e.target);i.fragment&&i.fragment.l(o),o.forEach(V)}else i.fragment&&i.fragment.c();e.intro&&ct(t.$$.fragment),_t(t,e.target,e.anchor),st(),q()}N(u)}class Ot{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){$t(this,1),this.$destroy=x}$on(e,n){if(!z(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mt);export{Ot as S,ct as a,St as b,wt as c,bt as d,$t as e,vt as f,yt as g,Et as i,_t as m,xt as t};
