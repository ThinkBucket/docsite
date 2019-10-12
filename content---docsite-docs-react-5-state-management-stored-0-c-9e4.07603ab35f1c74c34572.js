(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return i}));r(0);var n=r(396);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c={id:"store",title:"Store",sidebar_label:"Store"},p=[{value:"Store 和 reducer",id:"store-和-reducer",children:[]},{value:"Store 的数据设计",id:"store-的数据设计",children:[]}],l={rightToc:p},u="wrapper";function i(e){var t=e.components,r=a(e,["components"]);return Object(n.b)(u,o({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"store-和-reducer"},"Store 和 reducer"),Object(n.b)("p",null,"Store 其实和 reducer 息息相关。"),Object(n.b)("p",null,"一个Redux app中只有一个store，所有的数据都在这个store中，而通过："),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"createStore(reducer, [initState]) // initState 是可选参数\n")),Object(n.b)("p",null,"也就是说决定 store 的是reducer，reducer 决定 store中存放什么样的数据、处理什么样的数据、处理数据的方式。"),Object(n.b)("p",null,"Store 在创建的时候内部会执行 ",Object(n.b)("inlineCode",{parentName:"p"},"dispatch({ type: ActionTypes.INIT })"),"，用来初始化整个 Store 的数据结构，同时获取 Reducer 中的默认数据。"),Object(n.b)("p",null,"之所以能拿到全部的数据结构，是因为在 ",Object(n.b)("inlineCode",{parentName:"p"},"dispatch({ type: ActionTypes.INIT })")," 的时候，所有的Reducer 都会执行，并根据 Reducer 的 combine 结构生成数据。"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"注意"),"：在 Redux 内，每执行一次 dispatch，所有的 Reducer 都会执行。")),Object(n.b)("h2",{id:"store-的数据设计"},"Store 的数据设计"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"推荐"),"：应用状态应该尽可能扁平化，或者使用 ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/paularmstrong/normalizr"}),"normalizr")," 工具，依据定义的 schema 设计应用的数据结构。")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"推荐"),"：Store 应该只存储不可以被计算出的数据，储存尽可能少的 state，而让 Selector 去计算推导的数据和需要缓存的数据。")),Object(n.b)("p",null,"对于可以从其他数据中计算出来的，就不要在 Store 中重复存储一份了，直接在 Selector 中计算出来就可以了。因为冗余数据的同步维护，是非常费力并且容易出错的。"),Object(n.b)("p",null,"临时数据不一定要进 Store。例如查询结果这种数据，可以直接放在 React 组件的 state 中。但如果查询结果需要被缓存，切换页面回来后还能看到，那还是要进 Store。"))}i.isMDXComponent=!0},396:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n),a=o.a.createContext({}),c=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},p=function(e){var t=c(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},i=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),i=c(r),b=n,s=i[p+"."+b]||i[b]||u[b]||a;return r?o.a.createElement(s,Object.assign({},{ref:t},l,{components:r})):o.a.createElement(s,Object.assign({},{ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=i;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[l]="string"==typeof e?e:n,c[1]=p;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}i.displayName="MDXCreateElement"}}]);