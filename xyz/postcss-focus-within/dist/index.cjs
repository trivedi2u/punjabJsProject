"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(require("postcss-selector-parser"));const s=e=>{const s=String(Object(e).replaceWith||"[focus-within]"),r=Boolean(!("preserve"in Object(e))||e.preserve),o=t.default().astSync(s);return{postcssPlugin:"postcss-focus-within",Rule:(e,{result:s})=>{if(!e.selector.includes(":focus-within"))return;let c;try{const s=t.default((e=>{e.walkPseudos((e=>{":focus-within"===e.value&&(e.nodes&&e.nodes.length||e.replaceWith(o.clone({})))}))})).processSync(e.selector);c=String(s)}catch(t){return void e.warn(s,`Failed to parse selector : ${e.selector}`)}if(void 0===c)return;if(c===e.selector)return;const n=e.clone({selector:c});r?e.before(n):e.replaceWith(n)}}};s.postcss=!0,module.exports=s;
//# sourceMappingURL=index.cjs.map
