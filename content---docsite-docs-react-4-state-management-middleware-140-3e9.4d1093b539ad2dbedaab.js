(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{179:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n),o=a.a.createContext({}),c=function(e){var r=a.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):Object.assign({},r,e)),t},l=function(e){var r=c(e.components);return a.a.createElement(o.Provider,{value:r},e.children)};var i="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===r.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),p=c(t),b=n,s=p[l+"."+b]||p[b]||u[b]||o;return t?a.a.createElement(s,Object.assign({},{ref:r},i,{components:t})):a.a.createElement(s,Object.assign({},{ref:r},i))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[i]="string"==typeof e?e:n,c[1]=l;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));t(0);var n=t(179);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={id:"middleware",title:"Middleware",sidebar_label:"Middleware"},l=[{value:"redux-observables",id:"redux-observables",children:[]}],i={rightToc:l},u="wrapper";function p(e){var r=e.components,t=o(e,["components"]);return Object(n.b)(u,a({},i,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,"请慎用自定义的 redux-middleware，错误的配置可能会影响到其他 middleware。"),Object(n.b)("p",null,Object(n.b)("img",a({parentName:"p"},{src:"https://raw.githubusercontent.com/ThinkBucket/oss/master/middleware.png",alt:"dispatch workflow"}))),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"applyMiddleware(m1, m2, m3)\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"注意"),"：在执行middleware的时候顺序是从左至右，即：m1, m2, m3。在 Rematch 的 middlewares 数组中的顺序也是从左至右。")),Object(n.b)("h2",{id:"redux-observables"},"redux-observables"),Object(n.b)("p",null,Object(n.b)("a",a({parentName:"p"},{href:"https://github.com/redux-observable/redux-observable"}),"https://github.com/redux-observable/redux-observable")))}p.isMDXComponent=!0}}]);