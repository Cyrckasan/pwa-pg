(this["webpackJsonppockettrainer-ui"]=this["webpackJsonppockettrainer-ui"]||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),r=t(3),a=t.n(r),c=t(4),s=t(0),d=function(){var e;return window.matchMedia("(display-mode: standalone)").matches||(null===(e=window.navigator)||void 0===e?void 0:e.standalone)||document.referrer.includes("android-app://")},l=function(){var e=Object(o.useState)(),n=Object(c.a)(e,2),t=n[0],i=n[1];Object(o.useEffect)((function(){var e="beforeinstallprompt",n=function(n){n.preventDefault(),i(n),alert(e)};return window.addEventListener(e,n),function(){return window.removeEventListener(e,n)}}),[]);var r="standalone"in window.navigator&&!window.navigator.standalone,a=!window.matchMedia("(display-mode: standalone)").matches,l=!(!r&&!a);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["deferredPrompt:",t?"truthy":"falsy"]}),Object(s.jsx)("button",{onClick:function(){t||alert("deferredPrompt was falsy..."),t.prompt(),t.userChoice.then((function(e){"accepted"===e.outcome?alert("User accepted the install prompt"):alert("User dismissed the install prompt")}))},children:"show install prompt"}),Object(s.jsxs)("div",{children:["is standalone : ",l+""]}),Object(s.jsxs)("div",{children:["is standalone ios: ",r+""]}),Object(s.jsxs)("div",{children:["is standalone android: ",a+""]}),Object(s.jsxs)("div",{children:[" is standalone v2: ",d()+""," "]})]})},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h="beforeinstallprompt";window.addEventListener(h,(function(e){e.preventDefault(),alert(h+"was catched outside the App component")})),a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):f(n,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.2da3ed3c.chunk.js.map