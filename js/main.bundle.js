!function(){var e,t,n=(e=function(e,t){var n=m.document,r=L(n)&&L(n.createElement);e.exports=function(e){return r?n.createElement(e):{}}},function(n){return t||e(t={exports:{},parent:n},t.exports),t.exports}),r=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},o={}.hasOwnProperty,a=function(e,t){return o.call(e,t)},u={}.toString,c=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return u.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},i=function(e){return c(r(e))},s=Math.ceil,f=Math.floor,l=function(e){return isNaN(e=+e)?0:(e>0?f:s)(e)},d=Math.min,p=Math.max,h=Math.min,v={},y=v={version:"2.6.12"};"number"==typeof __e&&(__e=y);var m={},b=m="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=b);var g,w=m["__core-js_shared__"]||(m["__core-js_shared__"]={});(g=function(e,t){return w[e]||(w[e]=void 0!==t?t:{})})("versions",[]).push({version:v.version,mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var _,M=0,j=Math.random(),O=g("keys"),E=(!1,function(e,t,n){var r,o=i(e),a=(r=o.length)>0?d(l(r),9007199254740991):0,u=function(e,t){return(e=l(e))<0?p(e+t,0):h(e,t)}(n,a);for(0;a>u;u++)if(u in o&&o[u]===t)return u||0;return-1}),P=O[_="IE_PROTO"]||(O[_]=function(e){return"Symbol(".concat(e,")_",(++M+j).toString(36))}(_)),S="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),T=Object.keys||function(e){return function(e,t){var n,r=i(e),o=0,u=[];for(n in r)n!=P&&a(r,n)&&u.push(n);for(;t.length>o;)a(r,n=t[o++])&&(~E(u,n)||u.push(n));return u}(e,S)},k=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},L=function(e){return"object"==typeof e?null!==e:"function"==typeof e},C=function(e){if(!L(e))throw TypeError(e+" is not an object!");return e},A=function(e){try{return!!e()}catch(e){return!0}},x=!A((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),F=!x&&!A((function(){return 7!=Object.defineProperty(n({})("div"),"a",{get:function(){return 7}}).a})),H={},R=Object.defineProperty;H.f=x?Object.defineProperty:function(e,t,n){if(C(e),t=function(e,t){if(!L(e))return e;var n,r;if("function"==typeof(n=e.toString)&&!L(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!L(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(t),C(n),F)try{return R(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e};var q,G,I,N,D=x?function(e,t,n){return H.f(e,t,function(e,t){return{enumerable:!1,configurable:!0,writable:!0,value:t}}(0,n))}:function(e,t,n){return e[t]=n,e},z={},B=function(e,t,n){var r,o,u,c=e&B.F,i=e&B.G,s=e&B.S,f=e&B.P,l=e&B.B,d=e&B.W,p=i?v:v[t]||(v[t]={}),h=p.prototype,y=i?m:s?m[t]:(m[t]||{}).prototype;for(r in i&&(n=t),n)(o=!c&&y&&void 0!==y[r])&&a(p,r)||(u=o?y[r]:n[r],p[r]=i&&"function"!=typeof y[r]?n[r]:l&&o?k(u,m):d&&y[r]==u?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(u):f&&"function"==typeof u?k(Function.call,u):u,f&&((p.virtual||(p.virtual={}))[r]=u,e&B.R&&h&&!h[r]&&D(h,r,u)))};B.F=1,B.G=2,B.S=4,B.P=8,B.B=16,B.W=32,B.U=64,B.R=128,z=B,q="keys",G=function(){return function(e){return T(function(e){return Object(r(e))}(e))}},I=(v.Object||{})[q]||Object[q],(N={})[q]=G(),z(z.S+z.F*A((function(){I(1)})),"Object",N);var U={default:v.Object.keys,__esModule:!0},W={__esModule:!0,default:function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}};z(z.S+z.F*!x,"Object",{defineProperty:H.f});var K,V=v.Object,J={__esModule:!0},Q=(K={default:function(e,t,n){return V.defineProperty(e,t,n)},__esModule:!0})&&K.__esModule?K:{default:K};J.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,Q.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var X={};Object.defineProperty(X,"__esModule",{value:!0}),X.PasswordGenerator=void 0;var Y=$(W),Z=$(J);function $(e){return e&&e.__esModule?e:{default:e}}X.PasswordGenerator=function(){function e(){(0,Y.default)(this,e)}return(0,Z.default)(e,[{key:"getRandomNumbers",value:function(e){var t=new Uint8Array(e),n=new Float32Array(e);window.crypto.getRandomValues(t);for(var r=0;r<t.length;r++)t[r]%255==0&&(t[r]=254),n[r]=t[r]/255;return n}},{key:"getPassword",value:function(e){for(var t=this.genChars(e),n=t.length,r=this.getRandomNumbers(e.length),o=[],a=0;a<e.length;a++){var u=t.charAt(Math.floor(r[a]*n));o.push(u)}var c=o.join("");return console.log(c),o}},{key:"genChars",value:function(e){var t="";return e.numbers||e.letters||e.specialCharacters||e.lockedSpecialCharacters?(e.numbers&&(t+="0123456789"),e.letters&&(t+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.specialCharacters&&(t+="!§$%/()´`^°*~#|,:._-€@"),e.lockedSpecialCharacters&&(t+="\\?\"[{'&>;+}=]< "),t):"-"}}]),e}();var ee,te=(ee=U)&&ee.__esModule?ee:{default:ee},ne=[],re=!1,oe=document.querySelector("#controls"),ae=document.querySelector("#password"),ue=document.querySelector("#length-value"),ce=new X.PasswordGenerator,ie=function(e,t){return Math.floor(Math.random()*(t-e)+e)},se=function(e){ne=ce.getPassword(e),function(){ae.innerHTML="";var e=document.createElement("div");e.setAttribute("class","characters"),ne.forEach((function(t,n){var r=document.createElement("div");r.setAttribute("class","character"),r.setAttribute("id","character-"+n),r.setAttribute("data-character",t),e.appendChild(r)})),ae.appendChild(e);var t=document.createElement("div");t.innerHTML="Kopieren",t.setAttribute("id","copyed"),t.setAttribute("class","copyed"),ae.appendChild(t),document.querySelectorAll(".character").forEach((function(e){var t;t=e,setTimeout((function(){t.classList.add("show"),setTimeout((function(){t.classList.add("animate");var e=ie(5,15),n=0,r=setInterval((function(){t.innerHTML=Math.random().toString(16).substr(2,1),n===e&&(t.classList.remove("animate"),t.classList.add("done"),t.innerHTML=t.dataset.character,clearInterval(r)),n++}),50)}),ie(0,150))}),ie(0,150))}))}()},fe=function(e){var t={};return(0,te.default)(e.currentTarget.elements).forEach((function(n){var r=e.currentTarget.elements[n];"checkbox"===r.type&&(t[r.name]=r.checked),"range"===r.type&&(t[r.name]=+r.value,ue.innerHTML=+r.value)})),t};se({length:45,specialCharacters:!0,numbers:!0,letters:!0,lockedSpecialCharacters:!1}),ae.addEventListener("click",(function(){re||(re=!0,navigator.clipboard.writeText(ne.join("")).then((function(){var e=document.querySelector("#copyed");e.classList.add("copyed-done"),e.innerHTML="Passwort kopiert",setTimeout((function(){e.classList.remove("copyed-done"),re=!1}),500)})))})),oe.addEventListener("submit",(function(e){e.preventDefault(),se(fe(e))})),oe.addEventListener("change",(function(e){e.preventDefault(),se(fe(e))}))}();
//# sourceMappingURL=main.bundle.js.map
