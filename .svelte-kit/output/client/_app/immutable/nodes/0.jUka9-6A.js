import{s as u,c as d,u as l,g as f,d as m}from"../chunks/scheduler.k-kUyWhY.js";import{S as p,i as v,d as _,t as w}from"../chunks/index.5XCitCbI.js";var b="@vercel/analytics",g="1.1.1",y=()=>{window.va||(window.va=function(...o){(window.vaq=window.vaq||[]).push(o)})};function s(){return typeof window<"u"}function c(){try{const t="production"}catch{}return"production"}function h(t="auto"){if(t==="auto"){window.vam=c();return}window.vam=t}function $(){return(s()?window.vam:c())||"production"}function i(){return $()==="development"}function S(t={debug:!0}){var o;if(!s())return;h(t.mode),y(),t.beforeSend&&((o=window.va)==null||o.call(window,"beforeSend",t.beforeSend));const r=i()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${r}"]`))return;const e=document.createElement("script");e.src=r,e.defer=!0,e.setAttribute("data-sdkn",b),e.setAttribute("data-sdkv",g),e.onerror=()=>{const n=i()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${n}`)},i()&&t.debug===!1&&e.setAttribute("data-debug","false"),document.head.appendChild(e)}S({mode:"production"});const M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function j(t){let o;const r=t[1].default,e=d(r,t,t[0],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,a){e&&e.m(n,a),o=!0},p(n,[a]){e&&e.p&&(!o||a&1)&&l(e,r,n,n[0],o?m(r,n[0],a,null):f(n[0]),null)},i(n){o||(_(e,n),o=!0)},o(n){w(e,n),o=!1},d(n){e&&e.d(n)}}}function k(t,o,r){let{$$slots:e={},$$scope:n}=o;return t.$$set=a=>{"$$scope"in a&&r(0,n=a.$$scope)},[n,e]}class B extends p{constructor(o){super(),v(this,o,k,j,u,{})}}export{B as component,M as universal};
