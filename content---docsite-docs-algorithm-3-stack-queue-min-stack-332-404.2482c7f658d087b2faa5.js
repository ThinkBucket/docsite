(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{388:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r),i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,s=u[o+"."+b]||u[b]||l[b]||i;return t?a.a.createElement(s,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,p[1]=o;for(var b=2;b<i;b++)p[b]=t[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));t(0);var r=t(388);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={id:"min-stack",title:"最小栈",sidebar_label:"最小栈"},o=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]},{value:"代码实现",id:"代码实现",children:[]},{value:"复杂度",id:"复杂度",children:[]}],c={rightToc:o},l="wrapper";function u(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(l,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 30》P165"),Object(r.b)("li",{parentName:"ul"},"在线：",Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode-cn.com/problems/min-stack/"}),"LeetCode: 155"))),Object(r.b)("h2",{id:"题目"},"题目"),Object(r.b)("p",null,"定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数。在该栈中，调用 ",Object(r.b)("inlineCode",{parentName:"p"},"getMin"),", ",Object(r.b)("inlineCode",{parentName:"p"},"push"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pop")," 的时间复杂度应为 O(1)。"),Object(r.b)("h2",{id:"思路"},"思路"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"如果用一个变量去保存最小值，那么 pop 的值是最小值后，怎么取到下一个最小值呢，所以用辅助栈"),Object(r.b)("li",{parentName:"ul"},"辅助栈的栈顶永远存放的是最小值"),Object(r.b)("li",{parentName:"ul"},"辅助栈的长度和数据栈的长度保持一致，即使最小值没有变化，也要再 push 到辅助栈"),Object(r.b)("li",{parentName:"ul"},"辅助栈和数据栈一同 pop")),Object(r.b)("div",{align:"center"},Object(r.b)("img",{width:"700",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/2PEAOk.png"}),Object(r.b)("p",null,"图：数据栈、辅助栈和最小值的状态")),Object(r.b)("h2",{id:"代码实现"},"代码实现"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n    this.stack = [];\n    this.helper = [];\n};\n\n/**\n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n    this.stack.push(x);\n    if (!this.helper.length) {\n        this.helper.push(x);\n    } else {\n        let helperTop = this.helper[this.helper.length - 1];\n        helperTop < x ? this.helper.push(helperTop) : this.helper.push(x);\n    }\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n    this.stack.pop();\n    this.helper.pop();\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n    return this.stack[this.stack.length - 1];\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.getMin = function() {\n    return this.helper[this.helper.length - 1];\n};\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.getMin()\n */\n")),Object(r.b)("h2",{id:"复杂度"},"复杂度"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"时间复杂度：O(1)"),Object(r.b)("li",{parentName:"ul"},"空间复杂度：O(n)")),Object(r.b)("p",null,"典型的用空间换时间。"))}u.isMDXComponent=!0}}]);