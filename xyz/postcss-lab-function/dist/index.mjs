import n from"postcss-value-parser";function t(n){return u(r(n,!0))}function e(n){return u(r(function(n){return[n[0],n[1]*Math.cos(n[2]*Math.PI/180),n[1]*Math.sin(n[2]*Math.PI/180)]}(n),!1))}function r(n,t){const[e,r,u]=n,o=Math.min(Math.max(e,0),100);let p=0,d=0;t?(p=Math.min(Math.max(r,-127),128),d=Math.min(Math.max(u,-127),128)):(p=r,d=u);const h=(o+16)/116,v=p/500+h,m=h-d/200,[b,M,g]=[Math.pow(v,3)>s?Math.pow(v,3):(116*v-16)/f,o>f*s?Math.pow((o+16)/116,3):o/f,Math.pow(m,3)>s?Math.pow(m,3):(116*m-16)/f],[w,y,x]=a([b*i,M*l,g*c],[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]]);return[w,y,x]}function u(n){const[t,e,r]=n,[u,o,i]=a([t,e,r],[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]),[l,c,s]=[u,o,i].map((n=>n>.31308?1.055*Math.pow(n/100,1/2.4)*100-5.5:12.92*n));return[l,c,s]}function a(n,t){return t.map((t=>t.reduce(((t,e,r)=>t+n[r]*o*(e*o)/o/o),0)))}const o=1e8,[i,l,c]=[96.422,100,82.521],s=Math.pow(6,3)/Math.pow(29,3),f=Math.pow(29,3)/Math.pow(3,3);function p(r){const u=r.value,a=r.nodes.slice().filter((n=>"comment"!==n.type&&"space"!==n.type));let o=null;if("lab"===u?o=function(t){if(!h(t[0]))return null;if(!d(t[1]))return null;if(!d(t[2]))return null;const e={l:n.unit(t[0].value),lNode:t[0],a:n.unit(t[1].value),aNode:t[1],b:n.unit(t[2].value),bNode:t[2]};b(t[3])&&(e.slash=t[3]);(v(t[4])||m(t[4]))&&(e.alpha=t[4]);return e}(a):"lch"===u&&(o=function(t){if(!h(t[0]))return null;if(!d(t[1]))return null;if(!function(t){if(!t||"word"!==t.type)return!1;if(!w(t))return!1;const e=n.unit(t.value);if(!e)return!1;return!!e.number&&("deg"===e.unit||"grad"===e.unit||"rad"===e.unit||"turn"===e.unit||""===e.unit)}(t[2]))return null;const e={l:n.unit(t[0].value),lNode:t[0],c:n.unit(t[1].value),cNode:t[1],h:n.unit(t[2].value),hNode:t[2]};if(function(n){switch(n.unit){case"deg":return void(n.unit="");case"rad":return n.unit="",void(n.number=(180*parseFloat(n.number)/Math.PI).toString());case"grad":return n.unit="",void(n.number=(.9*parseFloat(n.number)).toString());case"turn":n.unit="",n.number=(360*parseFloat(n.number)).toString()}}(e.h),""!==e.h.unit)return null;b(t[3])&&(e.slash=t[3]);(v(t[4])||m(t[4])||function(n){return n&&"function"===n.type&&"var"===n.value}(t[4]))&&(e.alpha=t[4]);return e}(a)),!o)return;if(a.length>3&&(!o.slash||!o.alpha))return;r.value="rgb",function(t,e,r){if(!e||!r)return;if(t.value="rgba",e.value=",",e.before="",!function(t){if(!t||"word"!==t.type)return!1;if(!w(t))return!1;const e=n.unit(t.value);if(!e)return!1;return!!e.number}(r))return;const u=n.unit(r.value);if(!u)return;"%"===u.unit&&(u.number=String(parseFloat(u.number)/100),r.value=String(u.number))}(r,o.slash,o.alpha);const[i,l,c]=function(n){if(M(n))return[n.lNode,n.aNode,n.bNode];return[n.lNode,n.cNode,n.hNode]}(o),[s,f,p]=function(n){if(M(n))return[n.l,n.a,n.b];return[n.l,n.c,n.h]}(o),y=("lab"===u?t:e)([s.number,f.number,p.number].map((n=>parseFloat(n)))).map((n=>Math.max(Math.min(Math.round(2.55*n),255),0)));r.nodes.splice(r.nodes.indexOf(i)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),r.nodes.splice(r.nodes.indexOf(l)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),g(r.nodes,i,{...i,value:String(y[0])}),g(r.nodes,l,{...l,value:String(y[1])}),g(r.nodes,c,{...c,value:String(y[2])})}function d(t){if(!t||"word"!==t.type)return!1;if(!w(t))return!1;const e=n.unit(t.value);return!!e&&(!!e.number&&""===e.unit)}function h(t){if(!t||"word"!==t.type)return!1;if(!w(t))return!1;const e=n.unit(t.value);return!!e&&"%"===e.unit}function v(t){if(!t||"word"!==t.type)return!1;if(!w(t))return!1;const e=n.unit(t.value);return!!e&&("%"===e.unit||""===e.unit)}function m(n){return n&&"function"===n.type&&"calc"===n.value}function b(n){return n&&"div"===n.type&&"/"===n.value}function M(n){return void 0!==n.a}function g(n,t,e){const r=n.indexOf(t);n[r]=e}function w(t){if(!t||!t.value)return!1;try{return!1!==n.unit(t.value)}catch(n){return!1}}const y=t=>{const e="preserve"in Object(t)&&Boolean(t.preserve);return{postcssPlugin:"postcss-lab-function",Declaration:(t,{result:r,postcss:u})=>{if(e&&function(n){let t=n.parent;for(;t;)if("atrule"===t.type){if("supports"===t.name&&-1!==t.params.indexOf("(color: lab(0% 0 0)) and (color: lch(0% 0 0))"))return!0;t=t.parent}else t=t.parent;return!1}(t))return;const a=t.value;if(!/(^|[^\w-])(lab|lch)\(/i.test(a))return;let o;try{o=n(a)}catch(n){t.warn(r,`Failed to parse value '${a}' as a lab or hcl function. Leaving the original value intact.`)}if(void 0===o)return;o.walk((n=>{n.type&&"function"===n.type&&("lab"!==n.value&&"lch"!==n.value||p(n))}));const i=String(o);if(i!==a)if(e&&t.variable){const n=t.parent,e="(color: lab(0% 0 0)) and (color: lch(0% 0 0))",r=u.atRule({name:"supports",params:e,source:t.source}),a=n.clone();a.removeAll(),a.append(t.clone()),r.append(a);let o=n,l=n.next();for(;o&&l&&"atrule"===l.type&&"supports"===l.name&&l.params===e;)o=l,l=l.next();o.after(r),t.value=i}else e?t.cloneBefore({value:i}):t.value=i}}};y.postcss=!0,y._labToSRgb=t,y._lchToSRgb=e;export{y as default};
//# sourceMappingURL=index.mjs.map
