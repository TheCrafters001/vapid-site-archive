!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t){function n(e,t=200,n="linear",o){const r={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:(4-2*e)*e-1,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},u=window.pageYOffset,a="now"in window.performance?performance.now():(new Date).getTime(),i=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),c=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,l="number"==typeof e?e:e.offsetTop,d=Math.round(i-l<c?i-c:l);if("requestAnimationFrame"in window==!1)return window.scroll(0,d),void(o&&o());!function e(){const i="now"in window.performance?performance.now():(new Date).getTime(),c=Math.min(1,(i-a)/t),l=r[n](c);window.scroll(0,Math.ceil(l*(d-u)+u)),window.pageYOffset!==d?requestAnimationFrame(e):o&&o()}()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("[data-scroll]");for(let t of e)t.addEventListener("click",e=>{e.preventDefault();const o=t.getAttribute("data-scroll"),r=document.querySelector(o).offsetTop;n(Math.max(0,r),250,"easeOutQuad")})})},function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("form[name=signup]"),t=e.querySelector("input[type=email]"),n=e.querySelector("input[type=submit]"),o=document.querySelector("#flash"),r=n.value;function u(e){o.innerText=e,o.style.display="block"}e.addEventListener("submit",a=>{a.preventDefault();const i=new XMLHttpRequest,c={email:t.value,referral:window.Rewardful?Rewardful.referral:""},l=Object.keys(c).map(e=>`${e}=${encodeURIComponent(c[e])}`).join("&");o.style.display="none",n.value="Signing up...",i.open("POST",e.action,!0),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),i.onload=()=>{t.value="",n.value=r,u(JSON.parse(i.responseText).message)},i.onerror=e=>{u("Sorry, an error occured. Please contact us at hello@vapid.com.")},i.send(l)})})}]);