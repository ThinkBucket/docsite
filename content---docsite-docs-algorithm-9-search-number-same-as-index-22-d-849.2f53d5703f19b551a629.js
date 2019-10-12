(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return m}));t(0);var r=t(396);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={id:"number-same-as-index",title:"有序数组中值和下标相等的元素",sidebar_label:"有序数组中值和下标相等的元素"},u=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]},{value:"代码实现",id:"代码实现",children:[{value:"迭代版",id:"迭代版",children:[]},{value:"递归版",id:"递归版",children:[]}]}],c={rightToc:u},o="wrapper";function m(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(o,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 53-3》P267")),Object(r.b)("h2",{id:"题目"},"题目"),Object(r.b)("p",null,"假设一个单调递增的数组里的每个元素都是整数并且是唯一的。请找出数组中任意一个数值等于其下标的元素，如果没有找到则返回 -1。"),Object(r.b)("p",null,"示例："),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"输入: [-3,-1,1,3,5]\n输出: 3\n")),Object(r.b)("h2",{id:"思路"},"思路"),Object(r.b)("p",null,"因为是有序数组，直接二分查找，如果下标和元素相等则返回该元素，时间复杂度 O(logn)。"),Object(r.b)("h2",{id:"代码实现"},"代码实现"),Object(r.b)("h3",{id:"迭代版"},"迭代版"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function getNumberSameAsIndex (nums) {\n    let left = 0;\n    let right = nums.length - 1;\n    while (left <= right) {\n        let mid = left + (right - left >> 1);\n        if (nums[mid] === mid) {\n            return mid;\n        }\n        if (nums[mid] > k) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return -1;\n}\n")),Object(r.b)("h3",{id:"递归版"},"递归版"),Object(r.b)("p",null,"这个版本也是尾递归，一些浏览器也遵循 ES 标准对尾递归进行了优化，让其不会栈溢出。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function getNumberSameAsIndex (nums, left = 0, right = nums.length - 1) {\n    if (left > right) return -1;\n    let mid = left + (right - left >> 1);\n    if (nums[mid] === mid) {\n        return mid;\n    }\n    if (nums[mid] > k) {\n        return getNumberSameAsIndex(nums, left, mid - 1);\n    } else {\n        return getNumberSameAsIndex(nums, mid + 1, right);\n    }\n}\n")))}m.isMDXComponent=!0},396:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r),i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},u=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,d=m[u+"."+p]||m[p]||o[p]||i;return t?a.a.createElement(d,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(d,Object.assign({},{ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[c]="string"==typeof e?e:r,l[1]=u;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);