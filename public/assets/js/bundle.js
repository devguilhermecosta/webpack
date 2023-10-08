(()=>{"use strict";var e,n,r,t,o,a,c,i,s,u,f,p,d,l,v={122:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(537),o=r.n(t),a=r(645),c=r.n(a)()(o());c.push([e.id,"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #000000;\n  color: #ffffff;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB",sourcesContent:["*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n}\r\n"],sourceRoot:""}]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var f=[].concat(e[u]);t&&c[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),r&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=r):f[2]=r),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},537:e=>{e.exports=function(e){var n=e[1],r=e[3];if(!r)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=t.base?s[0]+t.base:s[0],f=a[u]||0,p="".concat(u," ").concat(f);a[u]=f+1;var d=r(p),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(l);else{var v=o(l,t);t.byIndex=i,n.splice(i,0,{identifier:p,updater:v,references:1})}c.push(p)}return c}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);n[i].references--}for(var s=t(e,o),u=0;u<a.length;u++){var f=r(a[u]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function y(e){var n=m[e];if(void 0!==n)return n.exports;var r=m[e]={id:e,exports:{}};return v[e](r,r.exports,y),r.exports}y.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return y.d(n,{a:n}),n},y.d=(e,n)=>{for(var r in n)y.o(n,r)&&!y.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},y.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),y.nc=void 0,e=y(379),n=y.n(e),r=y(795),t=y.n(r),o=y(569),a=y.n(o),c=y(565),i=y.n(c),s=y(216),u=y.n(s),f=y(589),p=y.n(f),d=y(122),(l={}).styleTagTransform=p(),l.setAttributes=i(),l.insert=a().bind(null,"head"),l.domAPI=t(),l.insertStyleElement=u(),n()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals})();
//# sourceMappingURL=bundle.js.map