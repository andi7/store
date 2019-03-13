!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.store=t(require("react")):e.store=t(e.react)}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){"use strict";var n=r(7),o=r(16),u=Object.prototype.toString;function i(e){return"[object Array]"===u.call(e)}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===u.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===u.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===u.call(e)},isFile:function(e){return"[object File]"===u.call(e)},isBlob:function(e){return"[object Blob]"===u.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,r){t.exports=e},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.Provider=t.default=void 0;var o=((n=r(1))&&n.__esModule?n:{default:n}).default.createContext("store"),u=o.Provider,i=o.Consumer;t.Consumer=i,t.Provider=u;var a=o;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useGet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"useSave",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"useFetch",{enumerable:!0,get:function(){return u.default}});var n=i(r(14)),o=i(r(34)),u=i(r(6));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){e.exports=r(15)},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(19),u={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=r(8):void 0!==t&&(a=r(8)),a),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){c.headers[e]={}}),n.forEach(["post","put","patch"],function(e){c.headers[e]=n.merge(u)}),e.exports=c}).call(this,r(18))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=i(r(4)),u=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t=e.transform,r=e.path,i=(0,n.useContext)(u.default),c=i.apiUrl,f=i.globalHeaders,s=i.beforeGet,l=i.afterGet,d=i.setBusy,p=i.getBusy,y=Array.isArray(r)?r:[r];return{get:function(e){var r=e.params,n=void 0===r?{}:r,u=e.headers,i=void 0===u?{}:u,p=e.replace,h=void 0===p?{}:p;return new Promise(function(e,r){d(name);var u=y.map(function(e,t){var r,u,l=Array.isArray(n)?n[t]:n;return s&&(l=s(l)),(0,o.default)({method:"get",url:"".concat(c,"/").concat((r=e,u=h,r.replace(/:(\w+)/,function(e,t){return u[t]}))),params:l,headers:a({},f(),{headers:i})})});Promise.all(u).then(function(r){r=r.map(function(e){return e.data}),l&&(r=r.map(function(e){return l(e)})),t&&(r=t(r.length>1?r:r[0],n)),d(name,!1),e(r)}).catch(function(e){return r(e)})})},busy:p(name)}}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0),o=r(20),u=r(22),i=r(23),a=r(24),c=r(9),f="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(25);e.exports=function(e){return new Promise(function(t,s){var l=e.data,d=e.headers;n.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,y="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,y="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var v=e.auth.username||"",b=e.auth.password||"";d.Authorization="Basic "+f(v+":"+b)}if(p.open(e.method.toUpperCase(),u(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[y]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:r,config:e,request:p};o(t,s,n),p=null}},p.onerror=function(){s(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){s(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var m=r(26),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&n.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),s(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},function(e,t,r){"use strict";var n=r(21);e.exports=function(e,t,r,o,u){var i=new Error(e);return n(i,t,r,o,u)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={Request:!0,Provider:!0,Context:!0,State:!0};Object.defineProperty(t,"Provider",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Context",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"State",{enumerable:!0,get:function(){return f.default}}),t.Request=void 0;var o=l(r(13)),u=l(r(35)),i=l(r(36)),a=l(r(37)),c=l(r(2)),f=l(r(39)),s=r(3);function l(e){return e&&e.__esModule?e:{default:e}}Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))});var d={Get:o.default,Save:u.default,Delete:i.default};t.Request=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(1))&&n.__esModule?n:{default:n},u=r(3);var i=o.default.createContext("get"),a=i.Provider,c=i.Consumer;t.default=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]),n=(0,u.useGet)(r),i=n.data,f=n.busy;return o.default.createElement(a,{value:{data:i,busy:f}},o.default.createElement(c,null,t))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=i(r(2)),u=i(r(6));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t=e.name,r=e.path,i=e.defaultValue,c=e.params,f=void 0===c?{}:c,s=e.headers,l=void 0===s?{}:s,d=e.replace,p=void 0===d?{}:d,y=e.memoize,h=void 0!==y&&y,v=e.transform,b=(0,n.useContext)(o.default),m=b.setData,g=b.getData,O=a((0,n.useState)(i),2),w=O[0],j=O[1],P=g(t=t.replace(/:(\w+)/,function(e,t){return p[t]}))||i,_="refresh.".concat(t),S=(0,u.default)({transform:v,path:r}),x=S.get,E=S.busy;(0,n.useEffect)(function(){return C(),window.addEventListener(_,A),function(){window.removeEventListener(_,A)}},[t,JSON.stringify(r),JSON.stringify(f),JSON.stringify(l)]);var A=function(){return C()},C=(M=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!h||P===i){e.next=3;break}return j(P),e.abrupt("return");case 3:return e.next=5,x({params:f,headers:l,replace:p});case 5:r=e.sent,m(t,r),j(r);case 8:case"end":return e.stop()}},e,this)}),T=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=M.apply(e,t);function u(e,t){try{var u=o[e](t),c=u.value}catch(e){return void n(e)}u.done?r(c):Promise.resolve(c).then(i,a)}function i(e){u("next",e)}function a(e){u("throw",e)}i()})},function(){return T.apply(this,arguments)});var M,T;return{data:w,busy:E}}},function(e,t,r){"use strict";var n=r(0),o=r(7),u=r(17),i=r(5);function a(e){var t=new u(e),r=o(u.prototype.request,t);return n.extend(r,u.prototype,t),n.extend(r,t),r}var c=a(i);c.Axios=u,c.create=function(e){return a(n.merge(i,e))},c.Cancel=r(11),c.CancelToken=r(32),c.isCancel=r(10),c.all=function(e){return Promise.all(e)},c.spread=r(33),e.exports=c,e.exports.default=c},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,r){"use strict";var n=r(5),o=r(0),u=r(27),i=r(28);function a(e){this.defaults=e,this.interceptors={request:new u,response:new u}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=a},function(e,t){var r,n,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,f=[],s=!1,l=-1;function d(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&p())}function p(){if(!s){var e=a(d);s=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new y(e,t)),1!==f.length||s||a(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(9);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var u;if(r)u=r(t);else if(n.isURLSearchParams(t))u=t.toString();else{var i=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),u=i.join("&")}return u&&(e+=(-1===e.indexOf("?")?"?":"&")+u),e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,u,i={};return e?(n.forEach(e.split("\n"),function(e){if(u=e.indexOf(":"),t=n.trim(e.substr(0,u)).toLowerCase(),r=n.trim(e.substr(u+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}}),i):i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,u=String(e),i="",a=0,c=n;u.charAt(0|a)||(c="=",a%1);i+=c.charAt(63&t>>8-a%1*8)){if((r=u.charCodeAt(a+=.75))>255)throw new o;t=t<<8|r}return i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,u,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(u)&&a.push("domain="+u),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(29),u=r(10),i=r(5),a=r(30),c=r(31);function f(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return f(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return f(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return u(t)||(f(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(11);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=i(r(4)),u=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t=e.path,r=e.name,i=e.validate,c=e.headers,f=void 0===c?{}:c,s=e.transform,l=e.method,d=void 0===l?"post":l,p=(0,n.useContext)(u.default),y=p.apiUrl,h=p.setBusy,v=p.getBusy,b=p.globalHeaders,m=p.beforeSave,g="save".concat(r);return{save:function(e){e.key;var r=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["key"]);return new Promise(function(e,n){if(!i||i(r)){var u="".concat(y,"/").concat(t.replace(/:(\w+)/,function(e,t){return r[t]}));m&&(r=m(r)),s&&(r=s(r)),h(g),(0,o.default)({method:d,url:u,data:r,headers:a({},b(),{headers:f})}).then(function(t){return e(t.data)}).catch(function(e){return n(e)}).finally(function(){return h(g,!1)})}else n(new Error("Failed to pass validation"))})},busy:v(g)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(1))&&n.__esModule?n:{default:n},u=r(3);var i=o.default.createContext("save"),a=i.Provider,c=i.Consumer;t.default=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]),n=(0,u.useSave)(r),i=n.save,f=n.busy;return o.default.createElement(a,{value:{save:i,busy:f}},o.default.createElement(c,null,t))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=i(r(4)),u=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=n.default.createContext("create"),s=f.Provider,l=f.Consumer;t.default=function(e){var t=e.children,r=e.path,i=e.name,c=e.params,f=void 0===c?{}:c,d=e.headers,p=void 0===d?{}:d,y=e.show,h=(0,n.useContext)(u.default),v=h.apiUrl,b=h.setBusy,m=h.getBusy,g=h.globalHeaders,O="delete".concat(i);return y||(t=function(){return null}),n.default.createElement(s,{value:{destroy:function(){return new Promise(function(e,t){b(O),(0,o.default)({method:"delete",url:"".concat(v,"/").concat(r.replace(/:(\w+)/,function(e,t){return f[t]})),headers:a({},g(),p)}).then(function(t){return e(t.data)}).catch(function(e){return t(e)}).finally(function(){return b(O,!1)})})},busy:m(O)}},n.default.createElement(l,null,t))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(2),u=r(38);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){function t(e){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==i(o)&&"function"!=typeof o?s(n):o,d.call(s(r));var u=e.data,c=void 0===u?{}:u,f=e.busy,l=void 0===f?{}:f,p=e.shown,y=void 0===p?{}:p;return r.state={data:a({},c),busy:a({},l),shown:a({},y)},r}var r,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(u=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.apiUrl,u=void 0===r?"":r,i=e.headers,a=e.beforeGet,c=e.afterGet,f=e.beforeSave,s=this.setData,l=this.setBusy,d=this.setShown,p=this.getData,y=this.getBusy,h=this.getShown,v=this.refreshResource;return n.default.createElement(o.Provider,{value:{setData:s,setBusy:l,setShown:d,getData:p,getBusy:y,getShown:h,apiUrl:u,refreshResource:v,globalHeaders:function(){return i(p())||{}},beforeGet:a,afterGet:c,beforeSave:f}},t)}}])&&f(r.prototype,u),c&&f(r,c),t}();t.default=l;var d=function(){var e=this;Object.defineProperty(this,"setData",{configurable:!0,enumerable:!0,writable:!0,value:function(t,r){var n=e.state.data;(0,u.setPath)(n,t,r),e.setState({data:n})}}),Object.defineProperty(this,"setBusy",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.state.busy;(0,u.setPath)(n,t,!!r),e.setState({busy:n})}}),Object.defineProperty(this,"setShown",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.state.shown;(0,u.setPath)(n,t,!!r),e.setState({shown:n})}}),Object.defineProperty(this,"getData",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=e.state.data;return t?Array.isArray(t)?t.reduce(function(e,t){return a({},e,c({},t,(0,u.getPath)(r,t)))},{}):(0,u.getPath)(r,t):r}}),Object.defineProperty(this,"getBusy",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=e.state.busy;return!!(0,u.getPath)(r,t)}}),Object.defineProperty(this,"getShown",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=e.state.shown;return!!(0,u.getPath)(r,t)}}),Object.defineProperty(this,"refreshResource",{configurable:!0,enumerable:!0,writable:!0,value:function(e){window.dispatchEvent(new CustomEvent("refresh.".concat(e)))}})}},function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isObj=function(e){return!!e&&e instanceof Object},t.isPlainObj=function(e){return!!e&&e.constructor===Object},t.isUndefined=function(e){return void 0===e},t.isArray=function(e){return Array.isArray(e)},t.isString=function(e){return"string"==typeof e},t.isNumber=function(e){return"number"==typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeRoute=t.getQs=t.decodeQs=t.typeCheck=t.range=t.compose=t.genId=t.clone=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(0),a=r(3);var c=function(e){return e?"?"+Object.entries(e).map(function(e){var t=u(e,2),r=t[0],o=t[1],i="object"===(void 0===o?"undefined":n(o))?btoa(JSON.stringify(o)):o;return r+"="+encodeURIComponent(i)}).join("&"):""};t.clone=function(e){return JSON.parse(JSON.stringify(e))},t.genId=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)},t.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce(function(e,t){return t(e)},e)}},t.range=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=u(t,2),o=n[0],i=n[1];return i?(t=o>i?[i,o]:[o,i],a._range.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t))):(0,a._range)(0,o)},t.typeCheck=function(e,t){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.forEach(function(e,t){var r=e.split("|")[0]||"any";if(!(e.match("optional")&&(0,i.isUndefined)(n[t])||"any"===r||(0,a._getType)(n[t])===r))throw new Error("Type error: param "+t+" must be of type "+r)}),e.apply(void 0,n)}},t.decodeQs=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").slice(1).split("&").reduce(function(e,t){var r=t.split("="),n=u(r,2),i=n[0],a=n[1];return o({},e,function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},i,decodeURIComponent(a)))},{})},t.getQs=c,t.changeRoute=function(e){var t=window.location,r=""+t.origin+t.pathname+c(e);window.history.pushState({path:r},"",r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var o=r(4);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var u=r(5);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var i=r(7);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=r(0);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t._range=function(e,t){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(Array(t-e).keys())).map(function(t){return t+e})},t._getType=function(e){return{}.toString.call(e).match(/\s(\w+)/)[1].toLowerCase()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chunk=t.uniq=void 0;var n=r(0);t.uniq=function(e,t){return(0,n.isUndefined)(t)?Array.from(new Set(e)):e.reduce(function(e,r){return e.find(function(e){return e[t]===r[t]})?e:[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e),[r])},[])},t.chunk=function(e,t){for(var r=[],n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deepMapKeys=t.mapValues=t.mapKeys=t.getPath=t.setPath=t.deepFindKey=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(0),a=(r(1),r(6));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.deepFindKey=function e(t,r){var n=t&&t[r];if(n)return n;for(var o in t){var i=t[o];if("object"===(void 0===i?"undefined":u(i))){var a=e(i,r);if(a)return a}}},t.setPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments[2];if(!(0,i.isUndefined)(r))for(var n=(0,a.formattedPath)(t).split(".").filter(function(e){return""!==e});n.length>0;){var o=(0,a.matchedKey)(n.shift()).value;0===n.length?e[o]=r:(e[o]||(e[o]=(0,a.matchedKey)(n[0]).match?[]:{}),e=e[o])}},t.getPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,a.formattedPath)(t).replace(/\[(\d+)\]/g,"$1").split(".").reduce(function(e,t){return e?e[t]:void 0},e)},t.mapKeys=function(e,t){return Object.entries(e).reduce(function(e,r){var u=o(r,2),i=u[0],a=u[1];return n({},e,c({},t(i,a),a))},{})},t.mapValues=function(e,t){return Object.entries(e).reduce(function(e,r){var u=o(r,2),i=u[0],a=u[1];return n({},e,c({},i,t(i,a)))},{})},t.deepMapKeys=function e(t,r){return(0,i.isPlainObj)(t)?Object.entries(t).reduce(function(t,u){var a=o(u,2),f=a[0],s=a[1];return(0,i.isPlainObj)(s)?s=e(s,r):(0,i.isArray)(s)&&(s=s.map(function(t){return e(t,r)})),n({},t,c({},r(f,s),s))},{}):t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.formattedPath=function(e){return e.replace(/\[["'`]([\w\d]+)["'`]\]/g,"$1").split(/(\[\d+\])/).join(".").replace(/\.+/g,".")},t.matchedKey=function(e){var t=e.match(/\[(\d+)\]/);return t&&(e=parseInt(t[1])),{match:t,value:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}])},e.exports=n()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),u=(n=r(2))&&n.__esModule?n:{default:n};var i=o.default.createContext("resource"),a=i.Provider,c=i.Consumer;t.default=function(e){var t=e.children,r=e.transform,n=e.name,i=e.defaultValue,f=(0,(0,o.useContext)(u.default).getData)(n)||i;return r&&(f=r(f)),o.default.createElement(a,{value:f},o.default.createElement(c,null,t))}}])});