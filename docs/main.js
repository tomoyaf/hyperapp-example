!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var u=t.pop();if(u&&u.pop)for(o=u.length;o--;)t.push(u[o]);else null!=u&&!0!==u&&!1!==u&&r.push(u)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}function o(e,n,t,r){return{isExact:e,path:n,url:t,params:r}}function u(e){for(var n=e.length;"/"===e[--n];);return e.slice(0,n+1)}function i(e){try{return decodeURIComponent(e)}catch(n){return e}}function c(e){return function(n,t){var r=n.location,c=function(e,n,t){if(e===n||!e)return o(e===n,e,n);var r=t&&t.exact,c=u(e).split("/"),a=u(n).split("/");if(!(c.length>a.length||r&&c.length<a.length)){var l=0,f={},s=c.length;for(n="";l<s;l++){if(":"===c[l][0])f[c[l].slice(1)]=a[l]=i(a[l]);else if(c[l]!==a[l])return;n+=a[l]+"/"}return o(!1,e,n.slice(0,-1),f)}}(e.path,r.pathname,{exact:!e.parent});return c&&e.render({match:c,location:r})}}t.r(n);var a={state:{pathname:window.location.pathname,previous:window.location.pathname},actions:{go:function(e){history.pushState(null,"",e)},set:function(e){return e}},subscribe:function(e){function n(n){e.set({pathname:window.location.pathname,previous:n.detail?window.location.previous=n.detail:window.location.previous})}var t=function(e){return e.reduce(function(e,n){var t=history[n];return history[n]=function(e,n,r){t.call(this,e,n,r),dispatchEvent(new CustomEvent("pushstate",{detail:e}))},function(){history[n]=t,e&&e()}},null)}(["pushState","replaceState"]);return addEventListener("pushstate",n),addEventListener("popstate",n),function(){removeEventListener("pushstate",n),removeEventListener("popstate",n),t()}}},l={location:a.actions,down:function(e){return function(n){return{count:n.count-e}}},up:function(e){return function(n){return{count:n.count+e}}}},f=0,s=document.head.appendChild(document.createElement("style")).sheet;function p(e){return e.replace(/[A-Z]/g,"-$&").toLowerCase()}function d(e){s.insertRule(e,s.cssRules.length)}function v(e,n){return n+"{"+e+"}"}function h(e,n,t){var r=[""];for(var o in t=t||0,e){var u=e[o];o=p(o),u.sub?r[0]+=o+":"+u+";":(/^(:|>|\.|\*)/.test(o)&&(o=n+o),o=o.replace(/&/g,n),r.push(v(h(u,n,!/^@/.test(o)).join(""),o)))}return t||(r[0]=v(r[0],n)),r}var b=function(e){return function(n){var t={};return function(r){return function(o,u){u=(o=o||{}).children||u;var i="function"==typeof r?r(o):r,c=JSON.stringify(i);return t[c]||(t[c]=function(e){var n="p"+f++;return h(e,"."+n).forEach(d),n}(i)),o.class=[o.class,t[c]].filter(Boolean).join(" "),e(n,o,u)}}}};var y=b(r)("div")({display:"flex",justifyContents:"center",alignItems:"center"}),g={Shadows:["rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.20)","rgba(0, 0, 0, 0.28)"]},m=function(e){return{boxShadow:"0 ".concat(Math.pow(e,2),"px ").concat(0==e?1:Math.pow(e,2)+2*e,"px ").concat(e>=g.Shadows.length?g.Shadows[e]:g.Shadows[g.Shadows.length-1])}};function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}b(r)(y)(function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){w(e,n,t[n])})}return e}({},m(e.elevation?e.elevation:2))});function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){j(e,n,t[n])})}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S,P=O({cursor:"pointer"},m(1),{":hover":O({},m(2)),":active":O({},m(0))});function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var E=b(r)("button")(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){x(e,n,t[n])})}return e}((x(S={backgroundColor:"transparent",border:"none",cursor:"pointer",outline:"none",padding:0,appearance:"none"},"padding","10px 20px"),x(S,"margin","5px"),S),P));function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}!function(e,n,t,r){var o,u=[].map,i=r&&r.children[0]||null,c=i&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:u.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(i),a=[],l=!0,f=h(e),s=function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var u=o(e);return"function"==typeof u&&(u=u(y(n,f),r)),u&&u!==(t=y(n,f))&&!u.then&&v(f=b(n,h(t,u),f)),u}}(o,r[o]):e(n.concat(o),t[o]=h(t[o]),r[o]=h(r[o]));return r}([],f,h(n));return v(),s;function p(e){return"function"==typeof e?p(e(f,s)):null!=e?e:""}function d(){o=!o;var e=p(t);for(r&&!o&&(i=function e(n,t,r,o,u){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var i=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName),o=n.attributes;if(o){o.oncreate&&a.push(function(){o.oncreate(r)});for(var u=0;u<n.children.length;u++)r.appendChild(e(n.children[u]=p(n.children[u]),t));for(var i in o)w(r,i,o[i],null,t)}return r}(o,u);n.insertBefore(i,t),null!=r&&O(n,t,r),t=i}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in h(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&w(e,o,t[o],n[o],r);var u=l?t.oncreate:t.onupdate;u&&a.push(function(){u(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var c={},f={},s=[],d=r.children,v=o.children,b=0;b<d.length;b++){s[b]=t.childNodes[b];var y=g(d[b]);null!=y&&(c[y]=[s[b],d[b]])}for(var b=0,m=0;m<v.length;){var y=g(d[b]),j=g(v[m]=p(v[m]));if(f[y])b++;else if(null==j||j!==g(d[b+1]))if(null==j||l)null==y&&(e(t,s[b],d[b],v[m],u),m++),b++;else{var S=c[j]||[];y===j?(e(t,S[0],S[1],v[m],u),b++):S[0]?e(t,t.insertBefore(S[0],s[b]),S[1],v[m],u):e(t,s[b],null,v[m],u),f[j]=v[m],m++}else null==y&&O(t,s[b],d[b]),b++}for(;b<d.length;)null==g(d[b])&&O(t,s[b],d[b]),b++;for(var b in c)f[b]||O(t,c[b][0],c[b][1])}return t}(r,i,c,c=e)),l=!1;a.length;)a.pop()()}function v(){o||(o=!0,setTimeout(d))}function h(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function b(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?b(e.slice(1),n,t[e[0]]):n,h(t,r)):n}function y(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function g(e){return e?e.key:null}function m(e){return e.currentTarget.events[e.type](e)}function w(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var u in"string"==typeof r&&(r=e.style.cssText=""),h(r,t)){var i=null==t||null==t[u]?"":t[u];"-"===u[0]?e.style.setProperty(u,i):e.style[u]=i}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,m):e.removeEventListener(n,m)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function O(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}({count:0,location:a.state},l,function(e,n){return r("div",null,r(c,{path:"/",render:function(t,o){return function(e,n){return r(y,{style:{flexDirection:"column"}},r("div",null,r("h1",null,e.count)),r(y,null,r(E,{onclick:function(){return n.down(1)}},"-"),r(E,{onclick:function(){return n.up(1)}},"+")))}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){N(e,n,t[n])})}return e}({location:t,match:o},e),n)}}))},document.body)}]);