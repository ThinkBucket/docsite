(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));t(0);var r=t(396);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={id:"missing-number",title:"有序数组中缺失的数字",sidebar_label:"有序数组中缺失的数字"},c=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]},{value:"代码实现",id:"代码实现",children:[{value:"二分查找",id:"二分查找",children:[]},{value:"异或运算",id:"异或运算",children:[]}]}],o={rightToc:c},b="wrapper";function u(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(b,a({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 53-2》P266"),Object(r.b)("li",{parentName:"ul"},"在线：",Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode-cn.com/problems/missing-number/"}),"LeetCode: 268"))),Object(r.b)("h2",{id:"题目"},"题目"),Object(r.b)("p",null,"给定一个包含 ",Object(r.b)("inlineCode",{parentName:"p"},"0, 1, 2, ..., n")," 中 n 个数的序列，找出 ",Object(r.b)("inlineCode",{parentName:"p"},"0 .. n")," 中没有出现在序列中的那个数。"),Object(r.b)("p",null,"示例 1:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"输入: [0,1,3]\n输出: 2\n")),Object(r.b)("p",null,"示例 2:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"输入: [0,1,2,3,4,5,6,7,9]\n输出: 8\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"说明"),": 你的算法应具有",Object(r.b)("strong",{parentName:"p"},"线性时间复杂度"),"。你能否仅使用额外",Object(r.b)("strong",{parentName:"p"},"常数空间"),"来实现?"),Object(r.b)("h2",{id:"思路"},"思路"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"法一：先用求和公式算出 ",Object(r.b)("inlineCode",{parentName:"li"},"0 .. n")," 的和为 s1，再求出该数列的和为 s2，",Object(r.b)("inlineCode",{parentName:"li"},"s1 - s2")," 即为缺失数字，时间复杂度 O(n)"),Object(r.b)("li",{parentName:"ol"},"法二：用异或替代累加优化法一，巧妙算出缺失数字，时间复杂度也为 O(n)"),Object(r.b)("li",{parentName:"ol"},"法三：因为是有序的，可以利用二分查找，将时间复杂度降至 O(logn)")),Object(r.b)("div",{align:"center"},Object(r.b)("img",{width:"520",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/nEcTPC.png"}),Object(r.b)("p",null,"图：二分查找缺失数字步骤")),Object(r.b)("h2",{id:"代码实现"},"代码实现"),Object(r.b)("h3",{id:"二分查找"},"二分查找"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction missingNumber (nums) {\n    let left = 0;\n    let right = nums.length - 1;\n    while (left <= right) {\n        let mid = left + (right - left >> 1);\n        if (nums[mid] === mid) {\n            left = mid + 1;\n            continue;\n        }\n        if (nums[mid - 1] === mid - 1) {\n            return mid;\n        }\n        return right = mid - 1;\n    }\n    return -1;\n}\n")),Object(r.b)("h3",{id:"异或运算"},"异或运算"),Object(r.b)("p",null,"如果题目中的数组不是有序的，那么使用异或是相对比较好的方法。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function missingNumber (nums) {\n    // 注意，默认值设为最后一个元素\n    let ans = nums.length；\n    for (let i =0; i < nums.length; i++) {\n        ans ^= i ^ nums[i]；\n    }\n    return ans；\n}\n")))}u.isMDXComponent=!0},396:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r),i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=l(t),p=r,s=u[c+"."+p]||u[p]||b[p]||i;return t?a.a.createElement(s,Object.assign({},{ref:n},o,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},o))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c[o]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);