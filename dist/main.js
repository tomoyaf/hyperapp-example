!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!0)).push([e.i,"html, body {\n  margin: 0;\n  background-color: #eee;\n  min-height: 100%; }\n","",{version:3,sources:["/Users/tomoyaf/workdir/tomoyaf/hyperapp-boilerplate/src/src/style.scss"],names:[],mappings:"AAAA;EACI,UAAS;EACT,uBAAsB;EACtB,iBAAgB,EACnB",file:"style.scss",sourcesContent:["html, body {\n    margin: 0;\n    background-color: #eee;\n    min-height: 100%;\n}\n"],sourceRoot:""}])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,a=0,c=[],l=n(4);function s(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var u=0;u<i.parts.length;u++)i.parts[u](o.parts[u]);for(;u<o.parts.length;u++)i.parts.push(b(o.parts[u],t))}else{var a=[];for(u=0;u<o.parts.length;u++)a.push(b(o.parts[u],t));r[o.id]={id:o.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(a):n.push(r[u]={id:u,parts:[a]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return h(t,e.attrs),p(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=a++;n=u||(u=v(t)),r=m.bind(null,n,c,!1),o=m.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(u),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return s(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var u=n[i];(a=r[u.id]).refs--,o.push(a)}e&&s(f(e,t),t);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r=[],o=arguments.length;o-- >2;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof e?e(t||{},r):{nodeName:e,attributes:t||{},children:r,key:t&&t.key}}function o(e){return e.protocol+"//"+e.hostname+(e.port?":"+e.port:"")}function i(e){return o(location)!==o(e)}function u(e,t){return function(n,o){var u=e.to,a=n.location,c=e.onclick;return delete e.to,delete e.location,e.href=u,e.onclick=function(t){c&&c(t),t.defaultPrevented||0!==t.button||t.altKey||t.metaKey||t.ctrlKey||t.shiftKey||"_blank"===e.target||i(t.currentTarget)||(t.preventDefault(),u!==a.pathname&&history.pushState(a.pathname,"",u))},r("a",e,t)}}function a(e,t,n,r){return{isExact:e,path:t,url:n,params:r}}function c(e){for(var t=e.length;"/"===e[--t];);return e.slice(0,t+1)}function l(e){try{return decodeURIComponent(e)}catch(t){return e}}function s(e){return function(t,n){var r=t.location,o=function(e,t,n){if(e===t||!e)return a(e===t,e,t);var r=n&&n.exact,o=c(e).split("/"),i=c(t).split("/");if(!(o.length>i.length||r&&o.length<i.length)){var u=0,s={},f=o.length;for(t="";u<f;u++){if(":"===o[u][0])s[o[u].slice(1)]=i[u]=l(i[u]);else if(o[u]!==i[u])return;t+=i[u]+"/"}return a(!1,e,t.slice(0,-1),s)}}(e.path,r.pathname,{exact:!e.parent});return o&&e.render({match:o,location:r})}}n.r(t);var f={state:{pathname:window.location.pathname,previous:window.location.pathname},actions:{go:function(e){history.pushState(null,"",e)},set:function(e){return e}},subscribe:function(e){function t(t){e.set({pathname:window.location.pathname,previous:t.detail?window.location.previous=t.detail:window.location.previous})}var n=function(e){return e.reduce(function(e,t){var n=history[t];return history[t]=function(e,t,r){n.call(this,e,t,r),dispatchEvent(new CustomEvent("pushstate",{detail:e}))},function(){history[t]=n,e&&e()}},null)}(["pushState","replaceState"]);return addEventListener("pushstate",t),addEventListener("popstate",t),function(){removeEventListener("pushstate",t),removeEventListener("popstate",t),n()}}},p={location:f.actions,down:function(e){return function(t){return{count:t.count-e}}},up:function(e){return function(t){return{count:t.count+e}}},reset:function(e){return function(e){return{count:0}}}},d=0,v=document.head.appendChild(document.createElement("style")).sheet;function h(e){return e.replace(/[A-Z]/g,"-$&").toLowerCase()}function b(e){v.insertRule(e,v.cssRules.length)}function y(e,t){return t+"{"+e+"}"}function m(e,t,n){var r=[""];for(var o in n=n||0,e){var i=e[o];o=h(o),i.sub?r[0]+=o+":"+i+";":(/^(:|>|\.|\*)/.test(o)&&(o=t+o),o=o.replace(/&/g,t),r.push(y(m(i,t,!/^@/.test(o)).join(""),o)))}return n||(r[0]=y(r[0],t)),r}var g=function(e){return function(t){var n={};return function(r){return function(o,i){i=(o=o||{}).children||i;var u="function"==typeof r?r(o):r,a=JSON.stringify(u);return n[a]||(n[a]=function(e){var t="p"+d++;return m(e,"."+t).forEach(b),t}(u)),o.class=[o.class,n[a]].filter(Boolean).join(" "),e(t,o,i)}}}};var w=g(r)("div")({display:"flex",justifyContents:"center",alignItems:"center"}),O={Shadows:["rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.16)"],molecules:{Button:{backgroundColor:{default:"#eeeeee",primary:"#4286f4"},color:{default:"rgb(30, 30, 30)",primary:"#eeeeee"}},Text:{XS:"rgba(30, 30, 30, 0.7)",S:"rgba(30, 30, 30, 0.8)",M:"rgba(30, 30, 30, 1.0)",L:"rgba(30, 30, 30, 1.0)",XL:"rgba(30, 30, 30, 1.0)"}},organisms:{Header:{backgroundColor:"#eeeeee",color:"rgb(30, 30, 30)"}}},x=function(e){return{boxShadow:"0 ".concat(.5*Math.pow(e,2)+.5*e,"px ").concat(0==e?1:Math.pow(e,2)+2*e,"px ").concat(e>=O.Shadows.length?O.Shadows[e]:O.Shadows[O.Shadows.length-1])}};function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){S(e,t,n[t])})}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=j({cursor:"pointer"},x(1),{":hover":j({},x(2)),":active":j({},x(0))});function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={default:"normal",primary:"bold"},L=g(r)("button")(function(e){var t;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){k(e,t,n[t])})}return e}((k(t={backgroundColor:e.type?O.molecules.Button.backgroundColor[e.type]:O.molecules.Button.backgroundColor.default,color:e.type?O.molecules.Button.color[e.type]:O.molecules.Button.color.default,fontWeight:e.type?E[e.type]:E.default,border:"none",cursor:"pointer",outline:"none",padding:0,appearance:"none"},"padding","10px 20px"),k(t,"margin","5px"),k(t,"borderRadius","5px"),t),C)});function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P={XS:"0.75rem",S:"0.85rem",M:"1.0rem",L:"1.3rem",XL:"1.8rem"},N={XS:"1px 2px",S:"2px 4px",M:"4px 8px",L:"8px 16px",XL:"16px 32px"},U=g(r)(w)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){A(e,t,n[t])})}return e}({fontSize:e.level?P[e.level]:P.M,padding:e.level?N[e.level]:N.M},!e.defaultColor&&{color:e.level?O.molecules.Text[e.level]:O.molecules.Text.M})});function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=g(r)(w)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}({},x(null==e.elevation?2:e.elevation))}),R=g(r)(M)(function(e){return{backgroundColor:O.organisms.Header.backgroundColor,color:O.organisms.Header.color,width:"100%",height:"56px",padding:"0 10px"}}),T=function(e){e.state,e.actions;return r(R,{elevation:1},r(u,{to:"/",style:{textDecoration:"none"}},r(U,{level:"M",style:{fontWeight:"bold"}},"hyperapp-boilerplate")))},I=function(e){var t=e.state,n=e.actions;return r(w,{style:{flexDirection:"column",width:"100%"}},r(T,null),r(w,{style:{flexDirection:"column"}},r(U,{level:"XL"},t.count),r(w,null,r(L,{onclick:function(){return n.down(1)}},r(U,null,"Decrement")),r(L,{onclick:function(){return n.up(1)}},r(U,null,"Increment")),r(L,{onclick:function(){return n.reset()},type:"primary"},r(U,{defaultColor:!0},"Reset")))))};function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(0);!function(e,t,n,r){var o,i=[].map,u=r&&r.children[0]||null,a=u&&function e(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:i.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:e(t)})}}(u),c=[],l=!0,s=h(e),f=function e(t,n,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var i=o(e);return"function"==typeof i&&(i=i(y(t,s),r)),i&&i!==(n=y(t,s))&&!i.then&&v(s=b(t,h(n,i),s)),i}}(o,r[o]):e(t.concat(o),n[o]=h(n[o]),r[o]=h(r[o]));return r}([],s,h(t));return v(),f;function p(e){return"function"==typeof e?p(e(s,f)):null!=e?e:""}function d(){o=!o;var e=p(n);for(r&&!o&&(u=function e(t,n,r,o,i){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=function e(t,n){var r="string"==typeof t||"number"==typeof t?document.createTextNode(t):(n=n||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),o=t.attributes;if(o){o.oncreate&&c.push(function(){o.oncreate(r)});for(var i=0;i<t.children.length;i++)r.appendChild(e(t.children[i]=p(t.children[i]),n));for(var u in o)w(r,u,o[u],null,n)}return r}(o,i);t.insertBefore(u,n),null!=r&&O(t,n,r),n=u}else if(null==r.nodeName)n.nodeValue=o;else{!function(e,t,n,r){for(var o in h(t,n))n[o]!==("value"===o||"checked"===o?e[o]:t[o])&&w(e,o,n[o],t[o],r);var i=l?n.oncreate:n.onupdate;i&&c.push(function(){i(e,t)})}(n,r.attributes,o.attributes,i=i||"svg"===o.nodeName);for(var a={},s={},f=[],d=r.children,v=o.children,b=0;b<d.length;b++){f[b]=n.childNodes[b];var y=m(d[b]);null!=y&&(a[y]=[f[b],d[b]])}for(var b=0,g=0;g<v.length;){var y=m(d[b]),x=m(v[g]=p(v[g]));if(s[y])b++;else if(null==x||x!==m(d[b+1]))if(null==x||l)null==y&&(e(n,f[b],d[b],v[g],i),g++),b++;else{var j=a[x]||[];y===x?(e(n,j[0],j[1],v[g],i),b++):j[0]?e(n,n.insertBefore(j[0],f[b]),j[1],v[g],i):e(n,f[b],null,v[g],i),s[x]=v[g],g++}else null==y&&O(n,f[b],d[b]),b++}for(;b<d.length;)null==m(d[b])&&O(n,f[b],d[b]),b++;for(var b in a)s[b]||O(n,a[b][0],a[b][1])}return n}(r,u,a,a=e)),l=!1;c.length;)c.pop()()}function v(){o||(o=!0,setTimeout(d))}function h(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function b(e,t,n){var r={};return e.length?(r[e[0]]=e.length>1?b(e.slice(1),t,n[e[0]]):t,h(n,r)):t}function y(e,t){for(var n=0;n<e.length;)t=t[e[n++]];return t}function m(e){return e?e.key:null}function g(e){return e.currentTarget.events[e.type](e)}function w(e,t,n,r,o){if("key"===t);else if("style"===t)if("string"==typeof n)e.style.cssText=n;else for(var i in"string"==typeof r&&(r=e.style.cssText=""),h(r,n)){var u=null==n||null==n[i]?"":n[i];"-"===i[0]?e.style.setProperty(i,u):e.style[i]=u}else"o"===t[0]&&"n"===t[1]?(t=t.slice(2),e.events?r||(r=e.events[t]):e.events={},e.events[t]=n,n?r||e.addEventListener(t,g):e.removeEventListener(t,g)):t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!o?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),null!=n&&!1!==n||e.removeAttribute(t)}function O(e,t,n){function r(){e.removeChild(function e(t,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)e(t.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(t)}return t}(t,n))}var o=n.attributes&&n.attributes.onremove;o?o(t,r):r()}}({count:0,location:f.state},p,function(e,t){return r("div",null,r(s,{parent:!0,path:"/",render:function(n,o){return function(e,t){return r(I,{state:e,actions:t})}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){D(e,t,n[t])})}return e}({location:n,match:o},e),t)}}))},document.body)}]);