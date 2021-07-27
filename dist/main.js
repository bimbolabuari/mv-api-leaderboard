(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>a});var t=r(645),i=r.n(t)()((function(n){return n[1]}));i.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  width: 80%;\r\n  margin: 30px auto 0;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.justify-content {\r\n  justify-content: space-between;\r\n}\r\n\r\n.scores {\r\n  margin-top: 20px;\r\n}\r\n\r\n.display {\r\n  border: 1px solid rgb(3, 3, 3);\r\n  margin-top: 20px;\r\n}\r\n\r\n.display-section {\r\n  width: 100%;\r\n}\r\n\r\n.form-section {\r\n  margin-top: 30px;\r\n}\r\n\r\n.form-section-header {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  margin-bottom: 20px;\r\n  font-size: 13px;\r\n  padding: 5px;\r\n}\r\n\r\nbutton {\r\n  padding: 5px;\r\n}\r\n\r\n.display ul {\r\n  padding: 5px;\r\n}\r\n\r\n.display ul:nth-child(odd) {\r\n  background: rgb(179, 175, 175);\r\n}\r\n\r\n.display ul:nth-child(even) {\r\n  background: #fff;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  body {\r\n    max-width: 600px;\r\n    width: 80%;\r\n    margin: 80px auto 0;\r\n  }\r\n\r\n  .flex,\r\n  .main {\r\n    display: flex;\r\n  }\r\n\r\n  .justify-content {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .display-section {\r\n    width: 60%;\r\n  }\r\n}\r\n",""]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},o=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var p=r(d),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:d,updater:i(f,t),references:1}),o.push(d)}return o}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var a=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=r(a[o]);e[s].references--}for(var l=t(n,i),c=0;c<a.length;c++){var u=r(a[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=l}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,i=r.media,a=r.sourceMap;i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(795),i=r.n(t),a=r(569),o=r.n(a),s=r(565),l=r.n(s),c=r(216),u=r.n(c),d=r(589),p=r.n(d),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.createElement("section");h.classList.add("display-section"),h.innerHTML='\n<div class="flex justify-content scores">\n    <h2>Recent scores</h2>\n    <button type="reset">Refresh</button>\n</div>\n<ul class="display">\n <li>\n     <ul class="flex">\n        <li>Name<span>:</span></li>\n        <li>100</li>\n     </ul>\n     <ul class="flex">\n        <li>Name<span>:</span></li>\n        <li>20</li>\n     </ul>\n     <ul class="flex">\n        <li>Name<span>:</span></li>\n        <li>50</li>\n     </ul>\n     <ul class="flex">\n        <li>Name<span>:</span></li>\n        <li>78</li>\n     </ul>\n     <ul class="flex">\n        <li>Name<span>:</span></li>\n        <li>125</li>\n     </ul>\n     <ul class="flex">\n        <li>Name<span>:</span></li>\n        <li>77</li>\n     </ul>\n     <ul class="flex">\n        <li>Name<span>:</span></li>\n        <li>42</li>\n     </ul>\n </li>\n</ul>\n';const b=h,v=document.createElement("section");v.classList.add("form-section"),v.innerHTML='\n<h2 class="form-section-header">Add your score</h2>\n<form>\n    <label><input type="text" placeholder="Your name"></label><br>\n    <label><input type="number" placeholder="Your score"></label><br>\n<button type="submit">Submit</button>\n </form>\n';const x=v;document.querySelector(".main").append(b,x)})()})();