(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>a});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  width: 80%;\r\n  margin: 30px auto 0;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.justify-content {\r\n  justify-content: space-between;\r\n}\r\n\r\n.scores,\r\n.display {\r\n  margin-top: 20px;\r\n}\r\n\r\n.border {\r\n  border: 1px solid rgb(3, 3, 3);\r\n  padding: 7px;\r\n}\r\n\r\n.display-section {\r\n  width: 100%;\r\n}\r\n\r\n.form-section {\r\n  margin-top: 30px;\r\n}\r\n\r\n.form-section-header {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  margin-bottom: 20px;\r\n  font-size: 13px;\r\n  padding: 5px;\r\n}\r\n\r\nbutton {\r\n  padding: 5px;\r\n}\r\n\r\n.display ul {\r\n  padding: 5px;\r\n}\r\n\r\n.display ul:nth-child(odd) {\r\n  background: rgb(179, 175, 175);\r\n}\r\n\r\n.display ul:nth-child(even) {\r\n  background: #fff;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  body {\r\n    max-width: 600px;\r\n    width: 80%;\r\n    margin: 80px auto 0;\r\n  }\r\n\r\n  .flex,\r\n  .main {\r\n    display: flex;\r\n  }\r\n\r\n  .justify-content {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .display-section {\r\n    width: 60%;\r\n  }\r\n}\r\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:l,updater:o(f,t),references:1}),i.push(l)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var u=r(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),s=r(565),c=r.n(s),d=r(216),u=r.n(d),l=r(589),p=r.n(l),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".display"),y=document.querySelector(".form"),v=document.querySelector(".username"),b=document.querySelector(".userscore"),x=document.querySelector(".refresh");y.addEventListener("submit",(n=>{const e=v.value,r=b.value;n.preventDefault(),(async(n,e)=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ygWEfybemzwhtBzH65xA/scores/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n,score:e})}).then((n=>n.json()))})(e,r),y.reset()})),x.addEventListener("click",(()=>{(async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ygWEfybemzwhtBzH65xA/scores/");return await n.json()})().then((n=>{h.innerHTML="",n.result.forEach((n=>{const e=document.createElement("li");e.classList.add("flex","border");const r=document.createElement("p");r.innerHTML=`${n.user}: ${n.score}`,e.appendChild(r),h.appendChild(e)}))}))}))})()})();