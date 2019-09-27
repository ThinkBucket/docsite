(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{179:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return u}));var o=n(0),c=n.n(o),r=c.a.createContext({}),a=function(t){var e=c.a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):Object.assign({},e,t)),n},p=function(t){var e=a(t.components);return c.a.createElement(r.Provider,{value:e},t.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},b=Object(o.forwardRef)((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,i=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["components","mdxType","originalType","parentName"]),b=a(n),u=o,O=b[p+"."+u]||b[u]||l[u]||r;return n?c.a.createElement(O,Object.assign({},{ref:e},i,{components:n})):c.a.createElement(O,Object.assign({},{ref:e},i))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=b;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[i]="string"==typeof t?t:o,a[1]=p;for(var u=2;u<r;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"rightToc",(function(){return p})),n.d(e,"default",(function(){return b}));n(0);var o=n(179);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function r(t,e){if(null==t)return{};var n,o,c=function(t,e){if(null==t)return{};var n,o,c={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var a={id:"action",title:"Action",sidebar_label:"Action"},p=[{value:"Action Type",id:"action-type",children:[]},{value:"Action Creator",id:"action-creator",children:[]},{value:"Sync Action",id:"sync-action",children:[]},{value:"Async Action",id:"async-action",children:[]}],i={rightToc:p},l="wrapper";function b(t){var e=t.components,n=r(t,["components"]);return Object(o.b)(l,c({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"action-type"},"Action Type"),Object(o.b)("p",null,"action type 是对每一个 action 的一个标识，主要用来 reducer 中根据不同的 action type 来更新状态树。"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"强制"),"：action type 统一放在 actionTypes 文件夹下，每个文件以 ",Object(o.b)("inlineCode",{parentName:"p"},".type.js")," 结尾。")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"强制"),"：action type 命名规范：状态树一级属性名称","_","动词","_","操作对象，且都为大写字母。")),Object(o.b)("p",null,"示例："),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"export default {\n    PROFORMA_SET_ISSUEDATE: 'PROFORMA_SET_ISSUEDATE',\n    PROFORMA_SET_PAYEE: 'PROFORMA_SET_PAYEE',\n    PROFORMA_SET_CHECKER: 'PROFORMA_SET_CHECKER'\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"强制"),"：对于异步 action，分别再最后面加上 REQUEST, SUCCESS, ERROR，三个缺一不可。")),Object(o.b)("p",null,"示例："),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"export default {\n    PROFORMA_LOAD_METADATA_REQUEST: 'PROFORMA_LOAD_METADATA_REQUEST',\n    PROFORMA_LOAD_METADATA_SUCCESS: 'PROFORMA_LOAD_METADATA_SUCCESS',\n    PROFORMA_LOAD_METADATA_ERROR: 'PROFORMA_LOAD_METADATA_ERROR'\n}\n")),Object(o.b)("h2",{id:"action-creator"},"Action Creator"),Object(o.b)("p",null,"用来产生一个修改 redux 状态树所需要的 action 对象，action 只是一个 type 和 payload 的集合。"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"强制"),"：以 ",Object(o.b)("inlineCode",{parentName:"p"},".action.js")," 结尾的文件表示 action creator。")),Object(o.b)("p",null,"action 分为 syncAction 和 asyncAction 。"),Object(o.b)("h2",{id:"sync-action"},"Sync Action"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"强制"),"：syncAction 只单纯地返回一个 action 对象，是一个无副作用的纯函数。")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"推荐"),"：syncAction 建议 export 出来。")),Object(o.b)("h2",{id:"async-action"},"Async Action"),Object(o.b)("p",null,"asyncAction 相对会稍稍复杂一点，使用 redux-thunk 会带有一点副作用，基本格式如下："),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"import actionTypes from '../../actionTypes';\nimport { setTotalAmount } from '../proformaSync/setProforma.action';\n\nconst getTotalAmountRequest = () => ({\n    type: actionTypes.PROFORMA_GET_TOTAL_AMOUNT_REQUEST\n});\n\nconst getTotalAmountSuccess = () => ({\n    type: actionTypes.PROFORMA_GET_TOTAL_AMOUNT_SUCCESS\n});\n\nconst getTotalAmountError = e => ({\n    type: actionTypes.PROFORMA_GET_TOTAL_AMOUNT_ERROR,\n    error: e\n});\n\nexport const getTotalAmount = () => (dispatch, getState, utils) => {\n    const ubl = getState().proforma.ubl;\n    dispatch(getTotalAmountRequest());\n    utils.DocumentService\n        .calculateTotals(ubl)\n        .then(newUbl => {\n            dispatch(getTotalAmountSuccess());\n            dispatch(setTotalAmount(newUbl));\n        })\n        .catch(e => {\n            dispatch(getTotalAmountError(e));\n        });\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"推荐"),"：asyncAction 中 request, success, error 建议不要 export 出来。")))}b.isMDXComponent=!0}}]);