!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.store=t(require("react")):e.store=t(e.react)}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";var n=r(5),o=r(14),i=Object.prototype.toString;function u(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function s(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:u,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)s(arguments[n],r);return t},extend:function(e,t,r){return s(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,r){t.exports=e},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.Provider=t.default=void 0;var o=((n=r(1))&&n.__esModule?n:{default:n}).default.createContext("store"),i=o.Provider,u=o.Consumer;t.Consumer=u,t.Provider=i;var a=o;t.default=a},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(17),i={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=r(6):void 0!==t&&(a=r(6)),a),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(u(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){c.headers[e]={}}),n.forEach(["post","put","patch"],function(e){c.headers[e]=n.merge(i)}),e.exports=c}).call(this,r(16))},function(e,t,r){e.exports=r(13)},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0),o=r(18),i=r(20),u=r(21),a=r(22),c=r(7),s="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(23);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",y=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",y=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+s(v+":"+m)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||y)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};o(t,f,n),d=null}},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var b=r(24),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(e,t,r){"use strict";var n=r(19);e.exports=function(e,t,r,o,i){var u=new Error(e);return n(u,t,r,o,i)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeRoute=t.getQs=t.decodeQs=t.typeCheck=t.range=t.compose=t.genId=t.clone=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=r(1),a=r(3);var c=function(e){return e?"?"+Object.entries(e).map(function(e){var t=i(e,2),r=t[0],o=t[1],u="object"===(void 0===o?"undefined":n(o))?btoa(JSON.stringify(o)):o;return r+"="+encodeURIComponent(u)}).join("&"):""};t.clone=function(e){return JSON.parse(JSON.stringify(e))},t.genId=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)},t.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce(function(e,t){return t(e)},e)}},t.range=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=i(t,2),o=n[0],u=n[1];return u?(t=o>u?[u,o]:[o,u],a._range.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t))):(0,a._range)(0,o)},t.typeCheck=function(e,t){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.forEach(function(e,t){var r=e.split("|")[0]||"any";if(!(e.match("optional")&&(0,u.isUndefined)(n[t])||"any"===r||(0,a._getType)(n[t])===r))throw new Error("Type error: param "+t+" must be of type "+r)}),e.apply(void 0,n)}},t.decodeQs=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").slice(1).split("&").reduce(function(e,t){var r=t.split("="),n=i(r,2),u=n[0],a=n[1];return o({},e,function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},u,decodeURIComponent(a)))},{})},t.getQs=c,t.changeRoute=function(e){var t=window.location,r=""+t.origin+t.pathname+c(e);window.history.pushState({path:r},"",r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isObj=function(e){return!!e&&e instanceof Object},t.isPlainObj=function(e){return!!e&&e.constructor===Object},t.isUndefined=function(e){return void 0===e},t.isArray=function(e){return Array.isArray(e)},t.isString=function(e){return"string"==typeof e},t.isNumber=function(e){return"number"==typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var o=r(4);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=r(5);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var u=r(7);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var a=r(1);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t._range=function(e,t){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(Array(t-e).keys())).map(function(t){return t+e})},t._getType=function(e){return{}.toString.call(e).match(/\s(\w+)/)[1].toLowerCase()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=void 0;var n=r(1);var o=(0,r(0).typeCheck)(function(e,t){return(0,n.isUndefined)(t)?Array.from(new Set(e)):e.reduce(function(e,r){return e.find(function(e){return e[t]===r[t]})?e:[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e),[r])},[])},["array","string|optional"]);t.uniq=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapValues=t.mapKeys=t.getPath=t.setPath=t.deepFindKey=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r(1),a=(r(0),r(6));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.deepFindKey=function e(t,r){var n=t&&t[r];if(n)return n;for(var o in t){var u=t[o];if("object"===(void 0===u?"undefined":i(u))){var a=e(u,r);if(a)return a}}},t.setPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments[2];if(!(0,u.isUndefined)(r))for(var n=(0,a.formattedPath)(t).split(".").filter(function(e){return""!==e});n.length>0;){var o=(0,a.matchedKey)(n.shift()).value;0===n.length?e[o]=r:(e[o]||(e[o]=(0,a.matchedKey)(n[0]).match?[]:{}),e=e[o])}},t.getPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,a.formattedPath)(t).replace(/\[(\d+)\]/g,"$1").split(".").reduce(function(e,t){return e?e[t]:void 0},e)},t.mapKeys=function(e,t){return Object.entries(e).reduce(function(e,r){var i=o(r,2),u=i[0],a=i[1];return n({},e,c({},t(a,u),a))},{})},t.mapValues=function(e,t){return Object.entries(e).reduce(function(e,r){var i=o(r,2),u=i[0],a=i[1];return n({},e,c({},u,t(a,u)))},{})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.formattedPath=function(e){return e.replace(/\[["'`]([\w\d]+)["'`]\]/g,"$1").split(/(\[\d+\])/).join(".").replace(/\.+/g,".")},t.matchedKey=function(e){var t=e.match(/\[(\d+)\]/);return t&&(e=parseInt(t[1])),{match:t,value:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=void 0;var n=(0,r(0).typeCheck)(function(e){return e.charAt(0).toUpperCase()+e.slice(1)},["string"]);t.capitalize=n}])},e.exports=n()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Provider",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Context",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"State",{enumerable:!0,get:function(){return a.default}}),t.Request=void 0;var n=c(r(12)),o=c(r(32)),i=c(r(33)),u=c(r(2)),a=c(r(34));function c(e){return e&&e.__esModule?e:{default:e}}var s={Get:n.default,Save:o.default};t.Request=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=u(r(4)),i=u(r(2));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=n.default.createContext("get"),s=c.Provider,f=c.Consumer;t.default=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]),u=r.name,c=r.transform,l=r.path,p=r.defaultValue,d=r.params,h=void 0===d?{}:d,y=r.headers,v=void 0===y?{}:y,m=(0,n.useContext)(i.default),b=m.setData,g=m.setBusy,w=m.getData,O=m.getBusy,j=m.apiUrl,P=w(u)||p,x="refresh.".concat(u);(0,n.useEffect)(function(){return S(),window.addEventListener(x,_),function(){window.removeEventListener(x,_)}},[u,l].concat(a(Object.values(h)),a(Object.values(v))));var _=function(){S()},S=(E=regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g(u),t=Array.isArray(l)?l:[l],r=t.map(function(e){return(0,o.default)({method:"get",url:"".concat(j,"/").concat(e),params:h,headers:v})}),e.next=5,Promise.all(r);case 5:n=(n=e.sent).map(function(e){return e.data}),c&&(n=c(n.length>1?n:n[0])),b(u,n),g(u,!1);case 10:case"end":return e.stop()}},e,this)}),A=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=E.apply(e,t);function i(e,t){try{var i=o[e](t),c=i.value}catch(e){return void n(e)}i.done?r(c):Promise.resolve(c).then(u,a)}function u(e){i("next",e)}function a(e){i("throw",e)}u()})},function(){return A.apply(this,arguments)});var E,A;return n.default.createElement(s,{value:{data:P,busy:O(u)}},n.default.createElement(f,null,t))}},function(e,t,r){"use strict";var n=r(0),o=r(5),i=r(15),u=r(3);function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var c=a(u);c.Axios=i,c.create=function(e){return a(n.merge(u,e))},c.Cancel=r(9),c.CancelToken=r(30),c.isCancel=r(8),c.all=function(e){return Promise.all(e)},c.spread=r(31),e.exports=c,e.exports.default=c},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,r){"use strict";var n=r(3),o=r(0),i=r(25),u=r(26);function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[u,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=a},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&d())}function d(){if(!f){var e=a(p);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new h(e,t)),1!==s.length||f||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var u=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),u.push(o(t)+"="+o(e))}))}),i=u.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,u={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(u[t]&&o.indexOf(t)>=0)return;u[t]="set-cookie"===t?(u[t]?u[t]:[]).concat([r]):u[t]?u[t]+", "+r:r}}),u):u}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,i=String(e),u="",a=0,c=n;i.charAt(0|a)||(c="=",a%1);u+=c.charAt(63&t>>8-a%1*8)){if((r=i.charCodeAt(a+=.75))>255)throw new o;t=t<<8|r}return u}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,u){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===u&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(27),i=r(8),u=r(3),a=r(28),c=r(29);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||u.adapter)(e).then(function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(9);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=u(r(4)),i=u(r(2));function u(e){return e&&e.__esModule?e:{default:e}}var a=n.default.createContext("create"),c=a.Provider,s=a.Consumer;t.default=function(e){var t=e.children,r=e.path,u=e.name,a=e.validate,f=(0,n.useContext)(i.default),l=f.apiUrl,p=f.setBusy,d=f.getBusy,h="save".concat(u),y=(v=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a(t)){e.next=2;break}return e.abrupt("return",!1);case 2:return p("save".concat(u)),e.next=5,(0,o.default)({method:"post",url:"".concat(l,"/").concat(r),data:t});case 5:return n=e.sent,p(h,!1),e.abrupt("return",n.data);case 8:case"end":return e.stop()}},e,this)}),m=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=v.apply(e,t);function i(e,t){try{var i=o[e](t),c=i.value}catch(e){return void n(e)}i.done?r(c):Promise.resolve(c).then(u,a)}function u(e){i("next",e)}function a(e){i("throw",e)}u()})},function(e){return m.apply(this,arguments)});var v,m;return n.default.createElement(c,{value:{save:y,busy:d(h)}},n.default.createElement(s,null,t))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(2),i=r(10);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){function t(e){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==u(o)&&"function"!=typeof o?f(n):o,p.call(f(r));var i=e.data,c=void 0===i?{}:i,s=e.busy,l=void 0===s?{}:s,d=e.shown,h=void 0===d?{}:d;return r.state={data:a({},c),busy:a({},l),shown:a({},h)},r}var r,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(i=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.apiUrl,i=void 0===r?"":r,u=this.state,a=this.setData,c=this.setBusy,s=this.setShown,f=this.getData,l=this.getBusy,p=this.getShown,d=this.refreshResource;return n.default.createElement(o.Provider,{value:{state:u,setData:a,setBusy:c,setShown:s,getData:f,getBusy:l,getShown:p,apiUrl:i,refreshResource:d}},t)}}])&&s(r.prototype,i),c&&s(r,c),t}();t.default=l;var p=function(){var e=this;Object.defineProperty(this,"setData",{configurable:!0,enumerable:!0,writable:!0,value:function(t,r){var n=e.state.data;(0,i.setPath)(n,t,r),e.setState({data:n})}}),Object.defineProperty(this,"setBusy",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.state.busy;(0,i.setPath)(n,t,!!r),e.setState({busy:n})}}),Object.defineProperty(this,"setShown",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.state.shown;(0,i.setPath)(n,t,!!r),e.setState({shown:n})}}),Object.defineProperty(this,"getData",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=e.state.data;return Array.isArray(t)?t.reduce(function(e,t){return a({},e,c({},t,(0,i.getPath)(r,t)))},{}):(0,i.getPath)(r,t)}}),Object.defineProperty(this,"getBusy",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=e.state.busy;return!!(0,i.getPath)(r,t)}}),Object.defineProperty(this,"getShown",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var r=e.state.shown;return!!(0,i.getPath)(r,t)}}),Object.defineProperty(this,"refreshResource",{configurable:!0,enumerable:!0,writable:!0,value:function(e){window.dispatchEvent(new CustomEvent("refresh.".concat(e)))}})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(10),u=(n=r(2))&&n.__esModule?n:{default:n};var a=o.default.createContext("resource"),c=a.Provider,s=a.Consumer;t.default=function(e){var t=e.children,r=e.transform,n=e.name,a=e.defaultValue,f=(0,o.useContext)(u.default).state.data,l=(0,i.getPath)(f,n)||a;return r&&(l=r(l)),o.default.createElement(c,{value:l},o.default.createElement(s,null,t))}}])});