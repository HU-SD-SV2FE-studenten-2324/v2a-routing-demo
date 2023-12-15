(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();function ee(r){return r=r||[],Array.isArray(r)?r:[r]}function v(r){return`[Vaadin.Router] ${r}`}function yt(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const te="module",re="nomodule",ue=[te,re];function be(r){if(!r.match(/.+\.[m]?js$/))throw new Error(v(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function qe(r){if(!r||!y(r.path))throw new Error(v('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!N(r.action)&&!Array.isArray(r.children)&&!N(r.children)&&!ie(e)&&!t.some(i=>y(r[i])))throw new Error(v(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(y(e))be(e);else if(ue.some(i=>i in e))ue.forEach(i=>i in e&&be(e[i]));else throw new Error(v('Expected route bundle to include either "'+re+'" or "'+te+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn(v(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function $e(r){ee(r).forEach(e=>qe(e))}function we(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===te?t.setAttribute("type",te):e===re&&t.setAttribute(re,""),t.async=!0),new Promise((i,n)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,i(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),n(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function vt(r){return y(r)?we(r):Promise.race(ue.filter(e=>e in r).map(e=>we(r[e],e)))}function D(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ie(r){return typeof r=="object"&&!!r}function N(r){return typeof r=="function"}function y(r){return typeof r=="string"}function Ke(r){const e=new Error(v(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const L=new class{};function bt(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function Ee(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const o=t[c];if(o.nodeName&&o.nodeName.toLowerCase()==="a"){e=o;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||bt(e))!==window.location.origin)return;const{pathname:n,search:s,hash:a}=e;D("go",{pathname:n,search:s,hash:a})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const $t={activate(){window.document.addEventListener("click",Ee)},inactivate(){window.document.removeEventListener("click",Ee)}},wt=/Trident/.test(navigator.userAgent);wt&&!N(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Ae(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;D("go",{pathname:e,search:t,hash:i})}const Et={activate(){window.addEventListener("popstate",Ae)},inactivate(){window.removeEventListener("popstate",Ae)}};var M=Ze,At=me,Rt=Ct,Tt=Xe,St=Ye,Je="/",Ge="./",Pt=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function me(r,e){for(var t=[],i=0,n=0,s="",a=e&&e.delimiter||Je,c=e&&e.delimiters||Ge,o=!1,l;(l=Pt.exec(r))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=r.slice(n,u),n=u+h.length,d){s+=d[1],o=!0;continue}var p="",T=r[n],ut=l[2],pt=l[3],ft=l[4],J=l[5];if(!o&&s.length){var oe=s.length-1;c.indexOf(s[oe])>-1&&(p=s[oe],s=s.slice(0,oe))}s&&(t.push(s),s="",o=!1);var mt=p!==""&&T!==void 0&&T!==p,gt=J==="+"||J==="*",_t=J==="?"||J==="*",ye=p||a,ve=pt||ft;t.push({name:ut||i++,prefix:p,delimiter:ye,optional:_t,repeat:gt,partial:mt,pattern:ve?Nt(ve):"[^"+E(ye)+"]+?"})}return(s||n<r.length)&&t.push(s+r.substr(n)),t}function Ct(r,e){return Xe(me(r,e))}function Xe(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,n){for(var s="",a=n&&n.encode||encodeURIComponent,c=0;c<r.length;c++){var o=r[c];if(typeof o=="string"){s+=o;continue}var l=i?i[o.name]:void 0,h;if(Array.isArray(l)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but got array');if(l.length===0){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=a(l[d],o),!e[c].test(h))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'"');s+=(d===0?o.prefix:o.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=a(String(l),o),!e[c].test(h))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+h+'"');s+=o.prefix+h;continue}if(o.optional){o.partial&&(s+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be '+(o.repeat?"an array":"a string"))}return s}}function E(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Nt(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Qe(r){return r&&r.sensitive?"":"i"}function Ot(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function It(r,e,t){for(var i=[],n=0;n<r.length;n++)i.push(Ze(r[n],e,t).source);return new RegExp("(?:"+i.join("|")+")",Qe(t))}function Lt(r,e,t){return Ye(me(r,t),e,t)}function Ye(r,e,t){t=t||{};for(var i=t.strict,n=t.start!==!1,s=t.end!==!1,a=E(t.delimiter||Je),c=t.delimiters||Ge,o=[].concat(t.endsWith||[]).map(E).concat("$").join("|"),l=n?"^":"",h=r.length===0,d=0;d<r.length;d++){var u=r[d];if(typeof u=="string")l+=E(u),h=d===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+E(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=E(u.prefix)+"("+p+")?":l+="(?:"+E(u.prefix)+"("+p+"))?":l+=E(u.prefix)+"("+p+")"}}return s?(i||(l+="(?:"+a+")?"),l+=o==="$"?"$":"(?="+o+")"):(i||(l+="(?:"+a+"(?="+o+"))?"),h||(l+="(?="+a+"|"+o+")")),new RegExp(l,Qe(t))}function Ze(r,e,t){return r instanceof RegExp?Ot(r,e):Array.isArray(r)?It(r,e,t):Lt(r,e,t)}M.parse=At;M.compile=Rt;M.tokensToFunction=Tt;M.tokensToRegExp=St;const{hasOwnProperty:Ut}=Object.prototype,pe=new Map;pe.set("|false",{keys:[],pattern:/(?:)/});function Re(r){try{return decodeURIComponent(r)}catch{return r}}function xt(r,e,t,i,n){t=!!t;const s=`${r}|${t}`;let a=pe.get(s);if(!a){const l=[];a={keys:l,pattern:M(r,l,{end:t,strict:r===""})},pe.set(s,a)}const c=a.pattern.exec(e);if(!c)return null;const o=Object.assign({},n);for(let l=1;l<c.length;l++){const h=a.keys[l-1],d=h.name,u=c[l];(u!==void 0||!Ut.call(o,d))&&(h.repeat?o[d]=u?u.split(h.delimiter).map(Re):[]:o[d]=u&&Re(u))}return{path:c[0],keys:(i||[]).concat(a.keys),params:o}}function et(r,e,t,i,n){let s,a,c=0,o=r.path||"";return o.charAt(0)==="/"&&(t&&(o=o.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!s&&(s=xt(o,e,!h,i,n),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!a){const u=h[c];u.parent=r;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),a=et(u,e.substr(p),t,s.keys,s.params)}const d=a.next(l);if(!d.done)return{done:!1,value:d.value};a=null,c++}return{done:!0}}}}function Mt(r){if(N(r.route.action))return r.route.action(r)}function kt(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Ht(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Dt(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const n={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class F{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Mt,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){$e(e);const t=[...ee(e)];this.root.__children=t}addRoutes(e){return $e(e),this.root.__children.push(...ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,y(e)?{pathname:e}:e),i=et(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let s=null,a=null,c=t;function o(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=a||i.next(u),a=null,!l&&(s.done||!kt(h,s.value.route))?(a=s,Promise.resolve(L)):s.done?Promise.reject(Ke(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Dt(c,s.value),Promise.resolve(n(c)).then(p=>p!=null&&p!==L?(c.result=p.result||p,c):o(l,h,p)))}return t.next=o,Promise.resolve().then(()=>o(!0,this.root)).catch(l=>{const h=Ht(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}F.pathToRegexp=M;const{pathToRegexp:Te}=F,Se=new Map;function tt(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];s.parent=e,tt(r,s,s.__children||s.children)}}function Pe(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Ce(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function jt(r,e={}){if(!(r instanceof F))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,n)=>{let s=Pe(t,i);if(!s&&(t.clear(),tt(t,r.root,r.root.__children),s=Pe(t,i),!s))throw new Error(`Route "${i}" not found`);let a=Se.get(s.fullPath);if(!a){let o=Ce(s),l=s.parent;for(;l;){const p=Ce(l);p&&(o=p.replace(/\/$/,"")+"/"+o.replace(/^\//,"")),l=l.parent}const h=Te.parse(o),d=Te.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)y(h[p])||(u[h[p].name]=!0);a={toPath:d,keys:u},Se.set(o,a),s.fullPath=o}let c=a.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const o={},l=Object.keys(n);for(let d=0;d<l.length;d++){const u=l[d];a.keys[u]||(o[u]=n[u])}const h=e.stringifyQueryParams(o);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let Ne=[];function Bt(r){Ne.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Ne=r}const Ft=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Vt=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function Oe(r,e){return r.classList.add(e),new Promise(t=>{if(Ft(r)){const i=r.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${n}`),Vt(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const zt=256;function ae(r){return r!=null}function Wt(r){const e=Object.assign({},r);return delete e.next,e}function _({pathname:r="",search:e="",hash:t="",chain:i=[],params:n={},redirectFrom:s,resolver:a},c){const o=i.map(l=>l.route);return{baseUrl:a&&a.baseUrl||"",pathname:r,search:e,hash:t,routes:o,route:c||o.length&&o[o.length-1]||null,params:n,redirectFrom:s,getUrl:(l={})=>Q($.pathToRegexp.compile(rt(o))(Object.assign({},n,l)),a)}}function Ie(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function qt(r,e){e.location=_(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function X(r,e,t){if(N(r))return r.apply(t,e)}function Le(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return X(t[r],e,t)}}function Kt(r,e){if(!Array.isArray(r)&&!ie(r))throw new Error(v(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=ee(r);for(let i=0;i<t.length;i++)qe(t[i]),e.__children.push(t[i])}function G(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Q(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function rt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class $ extends F{constructor(e,t){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&F.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=a=>this.__resolveRoute(a);const s=$.NavigationTrigger;$.setTriggers.apply($,Object.keys(s).map(a=>s[a])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=_({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();N(t.children)&&(i=i.then(()=>t.children(Wt(e))).then(s=>{!ae(s)&&!N(t.children)&&(s=t.children),Kt(s,t)}));const n={redirect:s=>Ie(e,s),component:s=>{const a=document.createElement(s);return this.__createdByRouter.set(a,!0),a}};return i.then(()=>{if(this.__isLatestRender(e))return X(t.action,[e,n],t)}).then(s=>{if(ae(s)&&(s instanceof HTMLElement||s.redirect||s===L))return s;if(y(t.redirect))return n.redirect(t.redirect);if(t.bundle)return vt(t.bundle).then(()=>{},()=>{throw new Error(v(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(ae(s))return s;if(y(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},y(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(n).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const a=this.__previousContext;if(s===a)return this.__updateBrowserHistory(a,!0),this.location;if(this.location=_(s),t&&this.__updateBrowserHistory(s,i===1),D("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,a),this.__previousContext=s,this.location;this.__addAppearingContent(s,a);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,a),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),G(this.__outlet&&this.__outlet.children),this.location=_(Object.assign(n,{resolver:this})),D("error",Object.assign({router:this,error:s},n)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const s=i!==t?i:e,c=Q(rt(i.chain),i.resolver)===i.pathname,o=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===L?c?l:h.parent!==null?o(l,h.parent,u):u:u);return o(i).then(l=>{if(l===null||l===L)throw Ke(s);return l&&l!==L&&l!==i?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(qt(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(v(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${yt(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],n=e.chain;let s=Promise.resolve();const a=()=>({cancel:!0}),c=o=>Ie(e,o);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let o=0;o<Math.min(i.length,n.length)&&!(i[o].route!==n[o].route||i[o].path!==n[o].path&&i[o].element!==n[o].element||!this.__isReusableElement(i[o].element,n[o].element));o=++e.__divergedChainIndex);if(e.__skipAttach=n.length===i.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let o=n.length-1;o>=0;o--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:a},i[o]);for(let o=0;o<n.length;o++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:a,redirect:c},n[o]),i[o].element.location=_(e,i[o].route)}else for(let o=i.length-1;o>=e.__divergedChainIndex;o--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:a},i[o])}if(!e.__skipAttach)for(let o=0;o<n.length;o++)o<e.__divergedChainIndex?o<i.length&&i[o].element&&(i[o].element.location=_(e,i[o].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:a,redirect:c},n[o]),n[o].element&&(n[o].element.location=_(e,n[o].route)));return s.then(o=>{if(o){if(o.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(o.redirect)return this.__redirect(o.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,n){const s=_(t);return e.then(a=>{if(this.__isLatestRender(t))return Le("onBeforeLeave",[s,i,this],n.element)(a)}).then(a=>{if(!(a||{}).redirect)return a})}__runOnBeforeEnterCallbacks(e,t,i,n){const s=_(t,n.route);return e.then(a=>{if(this.__isLatestRender(t))return Le("onBeforeEnter",[s,i,this],n.element)(a)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>zt)throw new Error(v(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(v(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const s=n?"replaceState":"pushState";window.history[s](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const s=t&&t.chain[n].element;if(s)if(s.parentNode===i)e.chain[n].element=s,i=s;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let n=i;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const a=e.chain[s].element;a&&(n.appendChild(a),this.__addedByRouter.set(a,!0),n===i&&this.__appearingContent.push(a),n=a)}}__removeDisappearingContent(){this.__disappearingContent&&G(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(G(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const n=t.chain[i].element;if(n)try{const s=_(e);X(n.onAfterLeave,[s,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&G(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},n=_(e,e.chain[t].route);X(i.onAfterEnter,[n,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],s=e.chain;let a;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){a=s[c-1].route.animate;break}if(t&&i&&a){const c=ie(a)&&a.leave||"leaving",o=ie(a)&&a.enter||"entering";n.push(Oe(t,c)),n.push(Oe(i,o))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:n}=e?e.detail:window.location;y(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:n},!0))}static setTriggers(...e){Bt(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=jt(this)),Q(this.__urlForName(e,t),this)}urlForPath(e,t){return Q($.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:n}=y(e)?this.__createUrl(e,"http://a"):e;return D("go",{pathname:t,search:i,hash:n})}}const Jt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Y=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Gt(){function r(){return!0}return it(r)}function Xt(){try{return Qt()?!0:Yt()?Y?!Zt():!Gt():!1}catch{return!1}}function Qt(){return localStorage.getItem("vaadin.developmentmode.force")}function Yt(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Zt(){return!!(Y&&Object.keys(Y).map(e=>Y[e]).filter(e=>e.productionMode).length>0)}function it(r,e){if(typeof r!="function")return;const t=Jt.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const Ue=function(r,e){if(window.Vaadin.developmentMode)return it(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Xt());function er(){}const tr=function(){if(typeof Ue=="function")return Ue(er)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});tr();$.NavigationTrigger={POPSTATE:Et,CLICK:$t};console.log("production");const C="/v2a-routing-demo",rr=document.querySelector("#output"),nt=new $(rr);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,ge=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),xe=new WeakMap;let st=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ge&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&xe.set(t,e))}return e}toString(){return this.cssText}};const ir=r=>new st(typeof r=="string"?r:r+"",void 0,_e),b=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,n,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new st(t,r,_e)},nr=(r,e)=>{if(ge)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=Z.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},Me=ge?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ir(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sr,defineProperty:or,getOwnPropertyDescriptor:ar,getOwnPropertyNames:lr,getOwnPropertySymbols:cr,getPrototypeOf:hr}=Object,R=globalThis,ke=R.trustedTypes,dr=ke?ke.emptyScript:"",le=R.reactiveElementPolyfillSupport,j=(r,e)=>r,fe={toAttribute(r,e){switch(e){case Boolean:r=r?dr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ot=(r,e)=>!sr(r,e),He={attribute:!0,type:String,converter:fe,reflect:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=He){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&or(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=ar(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return n==null?void 0:n.call(this)},set(a){const c=n==null?void 0:n.call(this);s.call(this,a),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??He}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const e=hr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const t=this.properties,i=[...lr(t),...cr(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Me(n))}else e!==void 0&&t.push(Me(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:fe).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:fe;this._$Em=n,this[n]=c.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i,n=!1,s){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ot)(n?s:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,a]of n)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(t)):this._$ET()}catch(n){throw e=!1,this._$ET(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[j("elementProperties")]=new Map,I[j("finalized")]=new Map,le==null||le({ReactiveElement:I}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,ne=B.trustedTypes,De=ne?ne.createPolicy("lit-html",{createHTML:r=>r}):void 0,at="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,lt="?"+A,ur=`<${lt}>`,O=document,V=()=>O.createComment(""),z=r=>r===null||typeof r!="object"&&typeof r!="function",ct=Array.isArray,pr=r=>ct(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ce=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Be=/>/g,S=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fe=/'/g,Ve=/"/g,ht=/^(?:script|style|textarea|title)$/i,fr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=fr(1),U=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ze=new WeakMap,P=O.createTreeWalker(O,129);function dt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return De!==void 0?De.createHTML(e):e}const mr=(r,e)=>{const t=r.length-1,i=[];let n,s=e===2?"<svg>":"",a=k;for(let c=0;c<t;c++){const o=r[c];let l,h,d=-1,u=0;for(;u<o.length&&(a.lastIndex=u,h=a.exec(o),h!==null);)u=a.lastIndex,a===k?h[1]==="!--"?a=je:h[1]!==void 0?a=Be:h[2]!==void 0?(ht.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=S):h[3]!==void 0&&(a=S):a===S?h[0]===">"?(a=n??k,d=-1):h[1]===void 0?d=-2:(d=a.lastIndex-h[2].length,l=h[1],a=h[3]===void 0?S:h[3]==='"'?Ve:Fe):a===Ve||a===Fe?a=S:a===je||a===Be?a=k:(a=S,n=void 0);const p=a===S&&r[c+1].startsWith("/>")?" ":"";s+=a===k?o+ur:d>=0?(i.push(l),o.slice(0,d)+at+o.slice(d)+A+p):o+A+(d===-2?c:p)}return[dt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class W{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,a=0;const c=e.length-1,o=this.parts,[l,h]=mr(e,t);if(this.el=W.createElement(l,i),P.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=P.nextNode())!==null&&o.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(at)){const u=h[a++],p=n.getAttribute(d).split(A),T=/([.?@])?(.*)/.exec(u);o.push({type:1,index:s,name:T[2],strings:p,ctor:T[1]==="."?_r:T[1]==="?"?yr:T[1]==="@"?vr:se}),n.removeAttribute(d)}else d.startsWith(A)&&(o.push({type:6,index:s}),n.removeAttribute(d));if(ht.test(n.tagName)){const d=n.textContent.split(A),u=d.length-1;if(u>0){n.textContent=ne?ne.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],V()),P.nextNode(),o.push({type:2,index:++s});n.append(d[u],V())}}}else if(n.nodeType===8)if(n.data===lt)o.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(A,d+1))!==-1;)o.push({type:7,index:s}),d+=A.length-1}s++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function x(r,e,t=r,i){var a,c;if(e===U)return e;let n=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const s=z(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=x(r,n._$AS(r,e.values),n,i)),e}class gr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??O).importNode(t,!0);P.currentNode=n;let s=P.nextNode(),a=0,c=0,o=i[0];for(;o!==void 0;){if(a===o.index){let l;o.type===2?l=new q(s,s.nextSibling,this,e):o.type===1?l=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(l=new br(s,this,e)),this._$AV.push(l),o=i[++c]}a!==(o==null?void 0:o.index)&&(s=P.nextNode(),a++)}return P.currentNode=O,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class q{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),z(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):pr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&z(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=W.createElement(dt(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{const a=new gr(n,this),c=a.u(this.options);a.p(t),this.$(c),this._$AH=a}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new W(e)),t}T(e){ct(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new q(this.k(V()),this.k(V()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(e,t=this,i,n){const s=this.strings;let a=!1;if(s===void 0)e=x(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==U,a&&(this._$AH=e);else{const c=e;let o,l;for(e=s[0],o=0;o<s.length-1;o++)l=x(this,c[i+o],t,o),l===U&&(l=this._$AH[o]),a||(a=!z(l)||l!==this._$AH[o]),l===f?e=f:e!==f&&(e+=(l??"")+s[o+1]),this._$AH[o]=l}a&&!n&&this.O(e)}O(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _r extends se{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===f?void 0:e}}class yr extends se{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class vr extends se{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??f)===U)return;const i=this._$AH,n=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==f&&(i===f||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class br{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const he=B.litHtmlPolyfillSupport;he==null||he(W,q),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.1.0");const $r=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new q(e.insertBefore(V(),s),s,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$r(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return U}}var We;m._$litElement$=!0,m.finalized=!0,(We=globalThis.litElementHydrateSupport)==null||We.call(globalThis,{LitElement:m});const de=globalThis.litElementPolyfillSupport;de==null||de({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");class wr extends m{static get styles(){return b`
      :host {
        display: block;
      }
    `}static get properties(){return{currentDateTime:{type:Date}}}connectedCallback(){super.connectedCallback(),this.currentDateTime=new Date,this.dateTimeInterval=setInterval(()=>this.updateDateTime(),1e3)}disconnectedCallback(){clearInterval(this.dateTimeInterval),super.disconnectedCallback()}updateDateTime(){this.currentDateTime=new Date}render(){const e={weekday:"short",year:"numeric",month:"long",day:"numeric"};return g`
      <p>
        <span>${this.currentDateTime.toLocaleDateString("nl-NL",e)}</span> - 
        <span>${this.currentDateTime.toLocaleTimeString("nl-NL")}</span>
      </p>
    `}}customElements.define("date-time",wr);const w="repairs";class Er{constructor(){const e=JSON.parse(window.localStorage.getItem(w))||[];e.length===0&&window.localStorage.setItem(w,JSON.stringify(e)),this.nextId=0,e.forEach(t=>{t.id>=this.nextId&&(this.nextId=t.id+1)})}addRepair(e){return new Promise((t,i)=>{let n=JSON.parse(window.localStorage.getItem(w))||[];e.id=this.nextId,n=[...n,e],window.localStorage.setItem(w,JSON.stringify(n)),this.nextId+=1,t(n)})}getRepair(e){return new Promise((t,i)=>{const s=(JSON.parse(window.localStorage.getItem(w))||[]).find(a=>a.id===e);t(s)})}getRepairs(){return new Promise(e=>{const t=JSON.parse(window.localStorage.getItem(w))||[];e(t)})}removeRepair(e){return new Promise((t,i)=>{let n=JSON.parse(window.localStorage.getItem(w))||[];n=n.filter(s=>s.id!==e),window.localStorage.setItem(w,JSON.stringify(n)),t(n)})}}const H=new Er;class Ar{addRepair(e){return H.addRepair(e)}getRepair(e){return H.getRepair(e)}getRepairs(){return H.getRepairs()}removeRepair(e){return H.removeRepair(e)}getTotalTodoTime(){return new Promise(e=>{H.getRepairs().then(i=>{const n=i.reduce((s,a)=>s+a.estimatedTime,0);e(n)})})}}const K=new Ar;class Rr extends m{static get styles(){return b`
      :host {
        display: block;
      }
    `}static get properties(){return{todoTime:{type:Number}}}constructor(){super(),this.todoTime=0}connectedCallback(){super.connectedCallback(),this.updateTodoTime(),window.addEventListener("repairremoved",this.updateTodoTime.bind(this))}disconnectedCallback(){window.removeEventListener("repairremoved",this.updateTodoTime.bind(this)),super.disconnectedCallback()}updateTodoTime(){K.getTotalTodoTime().then(e=>{this.todoTime=e})}render(){return g`
      <p>De totale reparatietijd is: ${this.todoTime} minuten</p>
    `}}customElements.define("total-todo-time",Rr);class Tr extends m{static get styles(){return b`
      :host {
        display: block;
        background-color: green;
        color: white;
        font-size: 1.5rem;
        padding: 1rem;
      }

      header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "date-time total-todo-time";
      }

      date-time {
        grid-area: date-time;
        text-align: left;
      }

      total-todo-time {
        grid-area: total-todo-time;
        text-align: right;
      }
    `}render(){return g`
      <header>
        <date-time></date-time>
        <total-todo-time></total-todo-time>
      </header>
    `}}customElements.define("header-bar",Tr);class Sr extends m{static get properties(){return{id:{type:Number},estimatedTime:{type:Number}}}constructor(){super(),this.id=0}remove(){K.removeRepair(this.id).then(()=>{this.dispatchEvent(new CustomEvent("repairremoved",{bubbles:!0,composed:!0})),console.log(`removed ${this.id}`)})}render(){return g`
      <span><a href="${C}/repair/${this.id}">Reparatie ID: ${this.id}</a></span>
      <span>Geschatte Reparatietijd: ${this.estimatedTime}</span>
      <span><button @click=${this.remove}>X</button></span>
    `}}customElements.define("todo-list-item",Sr);class Pr extends m{static get styles(){return b`
      :host {
        display: block;
        font-size: 1.5rem;
      }
    `}static get properties(){return{todos:{type:Array}}}constructor(){super(),this.todos=[]}connectedCallback(){super.connectedCallback(),this.updateList()}updateList(){K.getRepairs().then(e=>{this.todos=[...e]})}render(){return g`
      <h1>Todo List</h1>
      <ul @repairremoved=${this.updateList}>
        ${this.todos.map(e=>g`
        <li>
          <todo-list-item id=${e.id} estimatedTime=${e.estimatedTime}></todo-list-item>
        </li>`)}
      </ul>
    `}}customElements.define("todo-list",Pr);class Cr extends m{render(){return g`
      <header-bar></header-bar>
      <main>
        <todo-list></todo-list>
        <a href="${C}/repair-form">
          <button>Nieuwe Reparatie</button>
        </a>
      </main>
    `}}customElements.define("home-page",Cr);class Nr extends m{static get properties(){return{assignment:{type:String,reflect:!0},estimatedTime:{type:Number,reflect:!0}}}static get styles(){return b`
      :host {
        display: block;
      }
      textarea {
        width: 100%;
        resize: none;
      }
    `}constructor(){super(),this.assignment="",this.estimatedTime=0}updateAssignment(e){this.assignment=e.target.value}updateEstimatedTime(e){this.estimatedTime=e.target.value}render(){return g`
      <fieldset>
        <legend>Reparatie Opdracht</legend>
        <textarea
          aria-label="Reparatie Opdracht"
          id="assignment"
          name="repair-assignment"
          rows="5"
          cols="33"
          placeholder="Wat moet er gebeuren?"
          @change=${this.updateAssignment}
          tabindex="3"
        ></textarea>
        <label for="estimated-time">Geschatte reparatietijd (in minuten):</label>
        <input type="number" name="repair-estimated-time" id="estimated-time" tabindex="4" @input=${this.updateEstimatedTime}/>
      </fieldset>
    `}}customElements.define("repair-assignment-form",Nr);class Or extends m{static get styles(){return b`
      :host {
        display: block;
      }
      fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      }
    `}static get properties(){return{customerName:{type:String,reflect:!0},customerPhone:{type:String,reflect:!0}}}constructor(){super(),this.customerName="",this.customerPhone=""}updateCustomerNameValue(e){this.customerName=e.target.value}updateCustomerPhoneValues(e){this.customerPhone=e.target.value}render(){return g`
      <fieldset>
        <legend>Customer</legend>
        <label for="customer-name">Name</label>
        <input
          id="customer-name"
          name="customer-name"
          type="text"
          @input=${this.updateCustomerNameValue}
          tabindex="1"
        />
        <label for="customer-phone">Phone</label>
        <input
          id="customer-phone"
          name="customer-phone"
          type="tel"
          @input=${this.updateCustomerPhoneValues}
          tabindex="2"
        />
      </fieldset>
    `}}customElements.define("customer-form",Or);class Ir extends m{static get styles(){return b`
      fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
          "execution execution"
          "timelabel timeinput";
        grid-gap: 1rem;
      }

      textarea {
        grid-area: execution;
        width: 100%;
        resize: none;
      }

      label {
        grid-area: timelabel;
      }

      input {
        grid-area: timeinput;
      }
      
    `}render(){return g`
      <fieldset>
        <legend>Reparatie Uitvoering</legend>
        <textarea
          aria-label="Reparatie Uitvoering"
          id="execution"
          name="repair-execution"
          rows="5"
          cols="33"
          placeholder="Wat is daadwerkelijk gebeurd? Welke onderdelen zijn hiervoor gebruikt?"
          tabindex="-1"
        ></textarea>
        <label for="repair-time">Bestede tijd</label>
        <input id="repair-time" name="repair-time" type="text" tabindex="-1" />
      </fieldset>
    `}}customElements.define("repair-execution",Ir);class Lr extends m{static get styles(){return b`
      fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      }
    `}render(){return g`
      <fieldset>
        <legend>Reparatie Afronding</legend>
        <label>Materiaal kosten</label>
        <input id="material-cost" name="material-cost" type="text" tabindex="-1" />
        <label>Arbeid kosten</label>
        <input id="labor-cost" name="labor-cost" type="text" tabindex="-1" />
        <label>Totaal kosten</label>
        <input id="total-cost" name="total-cost" type="text" tabindex="-1" />
      </fieldset>
    `}}customElements.define("repair-completion",Lr);class Ur extends m{static get styles(){return b`
      :host {
        display: block;
      }
      button {
        margin: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: green;
        color: white;
      }
      button:hover,
      button:focus {
        background-color: yellowgreen
      }

      @media screen {
        repair-execution {
          display: none;
        }
        repair-completion {
          display: none;
        }
      }

      @media print {
        repair-execution {
          display: block;
        }
        repair-completion {
          display: block;
        }
        .controls {
          display: none;
        }
      }
    `}submitForm(e){e.preventDefault();const t=e.target,i={customerName:t.querySelector("customer-form").getAttribute("customername"),customerPhone:t.querySelector("customer-form").getAttribute("customerphone"),repairAssignment:t.querySelector("repair-assignment-form").getAttribute("assignment"),estimatedTime:Number(t.querySelector("repair-assignment-form").getAttribute("estimatedtime"))};K.addRepair(i).then(n=>{$.go(`${C}/`)})}print(){window.print()}render(){return g`
      <h1>Reparatiekaart</h1>
      <form @submit=${this.submitForm}>
        <customer-form></customer-form>
        <repair-assignment-form></repair-assignment-form>
        <repair-execution></repair-execution>
        <repair-completion></repair-completion>
        <section class="controls">
          <button type="button" @click=${this.print}>Print</button>
          <button type="submit" tabindex="0">Save</button>
        </section>
      </form>
    `}}customElements.define("repair-form",Ur);class xr extends m{render(){return g`
      <header-bar></header-bar>
      <main>
        <repair-form></repair-form>
      </main>
    `}}customElements.define("repair-form-page",xr);class Mr extends m{static get styles(){return b`
      :host {
        display: block;
      }
    `}static get properties(){return{customerName:{type:String},customerPhone:{type:String},repairAssignment:{type:String}}}constructor(){super(),this.customerName="",this.customerPhone="",this.repairAssignment="",this.customerId=Number(nt.location.params.id)}connectedCallback(){super.connectedCallback(),K.getRepair(this.customerId).then(e=>{this.customerName=e.customerName,this.customerPhone=e.customerPhone,this.repairAssignment=e.repairAssignment,this.estimatedTime=e.estimatedTime})}render(){return g`
      <h1>Reparatie Opdracht</h1>
      <section>
        <h2>Klantgegevens</h2>
        <p>Naam: ${this.customerName}</p>
        <p>Telefoonnummer: ${this.customerPhone}</p>
      </section>
      <section>
        <h2>Reparatie Opdracht</h2>
        <p>Opdracht: ${this.repairAssignment}</p>
        <p>Geschatte reparatietijd: ${this.estimatedTime} minuten</p>
      </section>

      <a href="${C}/"><button>Terug naar de homepagina</button></a>
    `}}customElements.define("repair-card",Mr);class kr extends m{render(){return g`
      <header-bar></header-bar>
      <main>
        <repair-card></repair-card>
      </main>
    `}}customElements.define("repair-page",kr);nt.setRoutes([{path:`${C}/`,component:"home-page"},{path:`${C}/repair-form`,component:"repair-form-page"},{path:`${C}/repair/:id`,component:"repair-page"},{path:"(.*)",component:"home-page"}]);
