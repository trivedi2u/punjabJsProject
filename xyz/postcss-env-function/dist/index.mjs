import e from"postcss-value-parser";import a from"fs";import t from"path";var n=(a,t)=>{const n=e(a);return n.walk((e=>{if((e=>e&&"function"===e.type&&"env"===e.value)(e)){const[a]=e.nodes;"word"===a.type&&void 0!==t[a.value]&&(e.nodes=[],e.type="word",e.value=t[a.value])}})),n.toString()};function r(e){return Object.assign({},Object(e).environmentVariables||Object(e)["environment-variables"])}function s(e){return e.map((e=>{if(e instanceof Promise)return e;if(e instanceof Function)return e();const a=e===Object(e)?e:{from:String(e)};if(a.environmentVariables||a["environment-variables"])return a;const n=String(a.from||"");return{type:(a.type||t.extname(n).slice(1)).toLowerCase(),from:n}})).reduce((async(e,a)=>{const{type:n,from:s}=await a;return"js"===n||"cjs"===n?Object.assign(e,await async function(e){return r(await import(t.resolve(e)))}(s)):"json"===n?Object.assign(e,await async function(e){return r(await i(t.resolve(e)))}(s)):Object.assign(e,r(await a))}),{})}const i=async e=>JSON.parse(await(e=>new Promise(((t,n)=>{a.readFile(e,"utf8",((e,a)=>{e?n(e):t(a)}))})))(e));function o(e){const a=s([].concat(Object(e).importFrom||[]));return{postcssPlugin:"postcss-env-fn",async AtRule(e,{result:t}){let r;try{r=n(e.params,await a)}catch(a){e.warn(t,`Failed to parse params '${e.params}' as an environment value. Leaving the original value intact.`)}void 0!==r&&r!==e.params&&(e.params=r)},async Declaration(e,{result:t}){let r;try{r=n(e.value,await a)}catch(a){e.warn(t,`Failed to parse value '${e.value}' as an environment value. Leaving the original value intact.`)}void 0!==r&&r!==e.value&&(e.value=r)}}}o.postcss=!0;export{o as default};
//# sourceMappingURL=index.mjs.map
