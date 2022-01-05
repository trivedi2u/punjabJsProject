"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=t(require("postcss-value-parser"));function n(t){return a(u(t,!0))}function r(t){return a(u(function(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}(t),!1))}function u(t,e){const[n,r,u]=t,a=Math.min(Math.max(n,0),100);let l=0,p=0;e?(l=Math.min(Math.max(r,-127),128),p=Math.min(Math.max(u,-127),128)):(l=r,p=u);const v=(a+16)/116,h=l/500+v,b=v-p/200,[m,M,g]=[Math.pow(h,3)>s?Math.pow(h,3):(116*h-16)/d,a>d*s?Math.pow((a+16)/116,3):a/d,Math.pow(b,3)>s?Math.pow(b,3):(116*b-16)/d],[w,y,x]=o([m*i,M*c,g*f],[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]]);return[w,y,x]}function a(t){const[e,n,r]=t,[u,a,l]=o([e,n,r],[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]),[i,c,f]=[u,a,l].map((t=>t>.31308?1.055*Math.pow(t/100,1/2.4)*100-5.5:12.92*t));return[i,c,f]}function o(t,e){return e.map((e=>e.reduce(((e,n,r)=>e+t[r]*l*(n*l)/l/l),0)))}const l=1e8,[i,c,f]=[96.422,100,82.521],s=Math.pow(6,3)/Math.pow(29,3),d=Math.pow(29,3)/Math.pow(3,3);function p(t){const u=t.value,a=t.nodes.slice().filter((t=>"comment"!==t.type&&"space"!==t.type));let o=null;if("lab"===u?o=function(t){if(!h(t[0]))return null;if(!v(t[1]))return null;if(!v(t[2]))return null;const n={l:e.default.unit(t[0].value),lNode:t[0],a:e.default.unit(t[1].value),aNode:t[1],b:e.default.unit(t[2].value),bNode:t[2]};M(t[3])&&(n.slash=t[3]);(b(t[4])||m(t[4]))&&(n.alpha=t[4]);return n}(a):"lch"===u&&(o=function(t){if(!h(t[0]))return null;if(!v(t[1]))return null;if(!function(t){if(!t||"word"!==t.type)return!1;if(!y(t))return!1;const n=e.default.unit(t.value);if(!n)return!1;return!!n.number&&("deg"===n.unit||"grad"===n.unit||"rad"===n.unit||"turn"===n.unit||""===n.unit)}(t[2]))return null;const n={l:e.default.unit(t[0].value),lNode:t[0],c:e.default.unit(t[1].value),cNode:t[1],h:e.default.unit(t[2].value),hNode:t[2]};if(function(t){switch(t.unit){case"deg":return void(t.unit="");case"rad":return t.unit="",void(t.number=(180*parseFloat(t.number)/Math.PI).toString());case"grad":return t.unit="",void(t.number=(.9*parseFloat(t.number)).toString());case"turn":t.unit="",t.number=(360*parseFloat(t.number)).toString()}}(n.h),""!==n.h.unit)return null;M(t[3])&&(n.slash=t[3]);(b(t[4])||m(t[4])||function(t){return t&&"function"===t.type&&"var"===t.value}(t[4]))&&(n.alpha=t[4]);return n}(a)),!o)return;if(a.length>3&&(!o.slash||!o.alpha))return;t.value="rgb",function(t,n,r){if(!n||!r)return;if(t.value="rgba",n.value=",",n.before="",!function(t){if(!t||"word"!==t.type)return!1;if(!y(t))return!1;const n=e.default.unit(t.value);if(!n)return!1;return!!n.number}(r))return;const u=e.default.unit(r.value);if(!u)return;"%"===u.unit&&(u.number=String(parseFloat(u.number)/100),r.value=String(u.number))}(t,o.slash,o.alpha);const[l,i,c]=function(t){if(g(t))return[t.lNode,t.aNode,t.bNode];return[t.lNode,t.cNode,t.hNode]}(o),[f,s,d]=function(t){if(g(t))return[t.l,t.a,t.b];return[t.l,t.c,t.h]}(o),p=("lab"===u?n:r)([f.number,s.number,d.number].map((t=>parseFloat(t)))).map((t=>Math.max(Math.min(Math.round(2.55*t),255),0)));t.nodes.splice(t.nodes.indexOf(l)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),t.nodes.splice(t.nodes.indexOf(i)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),w(t.nodes,l,{...l,value:String(p[0])}),w(t.nodes,i,{...i,value:String(p[1])}),w(t.nodes,c,{...c,value:String(p[2])})}function v(t){if(!t||"word"!==t.type)return!1;if(!y(t))return!1;const n=e.default.unit(t.value);return!!n&&(!!n.number&&""===n.unit)}function h(t){if(!t||"word"!==t.type)return!1;if(!y(t))return!1;const n=e.default.unit(t.value);return!!n&&"%"===n.unit}function b(t){if(!t||"word"!==t.type)return!1;if(!y(t))return!1;const n=e.default.unit(t.value);return!!n&&("%"===n.unit||""===n.unit)}function m(t){return t&&"function"===t.type&&"calc"===t.value}function M(t){return t&&"div"===t.type&&"/"===t.value}function g(t){return void 0!==t.a}function w(t,e,n){const r=t.indexOf(e);t[r]=n}function y(t){if(!t||!t.value)return!1;try{return!1!==e.default.unit(t.value)}catch(t){return!1}}const x=t=>{const n="preserve"in Object(t)&&Boolean(t.preserve);return{postcssPlugin:"postcss-lab-function",Declaration:(t,{result:r,postcss:u})=>{if(n&&function(t){let e=t.parent;for(;e;)if("atrule"===e.type){if("supports"===e.name&&-1!==e.params.indexOf("(color: lab(0% 0 0)) and (color: lch(0% 0 0))"))return!0;e=e.parent}else e=e.parent;return!1}(t))return;const a=t.value;if(!/(^|[^\w-])(lab|lch)\(/i.test(a))return;let o;try{o=e.default(a)}catch(e){t.warn(r,`Failed to parse value '${a}' as a lab or hcl function. Leaving the original value intact.`)}if(void 0===o)return;o.walk((t=>{t.type&&"function"===t.type&&("lab"!==t.value&&"lch"!==t.value||p(t))}));const l=String(o);if(l!==a)if(n&&t.variable){const e=t.parent,n="(color: lab(0% 0 0)) and (color: lch(0% 0 0))",r=u.atRule({name:"supports",params:n,source:t.source}),a=e.clone();a.removeAll(),a.append(t.clone()),r.append(a);let o=e,i=e.next();for(;o&&i&&"atrule"===i.type&&"supports"===i.name&&i.params===n;)o=i,i=i.next();o.after(r),t.value=l}else n?t.cloneBefore({value:l}):t.value=l}}};x.postcss=!0,x._labToSRgb=n,x._lchToSRgb=r,module.exports=x;
//# sourceMappingURL=index.cjs.map