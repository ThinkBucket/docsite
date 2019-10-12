(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));n(0);var r=n(396);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={id:"CSRF",title:"CSRF",sidebar_label:"CSRF"},i=[{value:"CSRF",id:"csrf",children:[]}],u={rightToc:i},p="wrapper";function l(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(p,o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"csrf"},"CSRF"),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"https://www.youtube.com/watch?v=gEPii2y3ISQ"}),"https://www.youtube.com/watch?v=gEPii2y3ISQ")),Object(r.b)("p",null,"CSRF（Cross-site request forgery）跨站请求伪造，也被称为“OneClick Attack”或者“Session Riding”，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。"),Object(r.b)("div",{align:"center"},Object(r.b)("img",{width:"640",height:"365",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/xwd1jG.png"})),Object(r.b)("p",null,"cookie 和 token 都存放在 header 中，为什么不会劫持 token？\nCSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token"))}l.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=o.a.createContext({}),c=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=c(n),s=r,f=l[i+"."+s]||l[s]||p[s]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},u,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);