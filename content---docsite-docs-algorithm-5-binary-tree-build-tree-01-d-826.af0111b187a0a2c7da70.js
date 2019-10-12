(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return p}));n(0);var t=n(396);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l={id:"build-tree",title:"重建二叉树",sidebar_label:"重建二叉树"},c=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]},{value:"代码实现",id:"代码实现",children:[]},{value:"拓展",id:"拓展",children:[]}],i={rightToc:c},b="wrapper";function p(e){var r=e.components,n=a(e,["components"]);return Object(t.b)(b,o({},i,n,{components:r,mdxType:"MDXLayout"}),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 7》P62"),Object(t.b)("li",{parentName:"ul"},"在线：",Object(t.b)("a",o({parentName:"li"},{href:"https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"}),"LeetCode: 105"))),Object(t.b)("h2",{id:"题目"},"题目"),Object(t.b)("p",null,"根据一棵树的前序遍历与中序遍历构造二叉树。注意: 你可以假设树中没有重复的元素。"),Object(t.b)("p",null,"例如，给出:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-text"}),"前序遍历 preorder = [1, 2, 4, 7, 3, 5, 6, 8]\n中序遍历 inorder = [4, 7, 2, 1, 5, 3, 8, 6]\n")),Object(t.b)("p",null,"返回如下的二叉树："),Object(t.b)("div",{align:"center"},Object(t.b)("img",{width:"160",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/HipCM5.jpg"}),Object(t.b)("p",null,"图：构造后的二叉树")),Object(t.b)("h2",{id:"思路"},"思路"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"从前序遍历确定根结点"),Object(t.b)("li",{parentName:"ol"},"在中序遍历找到根结点，将其分为左右子树"),Object(t.b)("li",{parentName:"ol"},"根据中序遍历左右子树的个数，将前序遍历也分为对应的左右子树"),Object(t.b)("li",{parentName:"ol"},"对左右子树的前序和中序再分别进行递归求解"),Object(t.b)("li",{parentName:"ol"},"最后返回根节点")),Object(t.b)("div",{align:"center"},Object(t.b)("img",{width:"430",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/HxOdfm.jpg"}),Object(t.b)("p",null,"图：确定根结点后划分左右子树（前序和中序都要划分）")),Object(t.b)("h2",{id:"代码实现"},"代码实现"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} preorder\n * @param {number[]} inorder\n * @return {TreeNode}\n */\nfunction buildTree(preorder, inorder) {\n    if (preorder.length !== inorder.length || inorder.length === 0) {\n        return null;\n    }\n    let root = new TreeNode(preorder[0]);\n    let i = inorder.indexOf(preorder[0]);\n    root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));\n    root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));\n    return root;\n}\n")),Object(t.b)("h2",{id:"拓展"},"拓展"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"如何从中序与后序遍历序列构造二叉树？",Object(t.b)("a",o({parentName:"li"},{href:"https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"}),"LeetCode: 106")),Object(t.b)("li",{parentName:"ul"},"前序遍历和后序遍历可以构造二叉树吗？")))}p.isMDXComponent=!0},396:function(e,r,n){"use strict";n.d(r,"a",(function(){return c})),n.d(r,"b",(function(){return u}));var t=n(0),o=n.n(t),a=o.a.createContext({}),l=function(e){var r=o.a.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):Object.assign({},r,e)),n},c=function(e){var r=l(e.components);return o.a.createElement(a.Provider,{value:r},e.children)};var i="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},p=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,i=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===r.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),u=t,d=p[c+"."+u]||p[u]||b[u]||a;return n?o.a.createElement(d,Object.assign({},{ref:r},i,{components:n})):o.a.createElement(d,Object.assign({},{ref:r},i))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var b in r)hasOwnProperty.call(r,b)&&(c[b]=r[b]);c.originalType=e,c[i]="string"==typeof e?e:t,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);