(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{439:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(537);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={id:"ajax",title:"Ajax",sidebar_label:"Ajax"},p=[{value:"Ajax",id:"ajax",children:[]}],s={rightToc:p},c="wrapper";function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(c,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"ajax"},"Ajax"),Object(r.b)("p",null,"Ajax\u662fAsynchronous Javascript + XML\u7684\u7b80\u5199\uff0c\u8fd9\u4e00\u6280\u672f\u80fd\u591f\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u989d\u5916\u7684\u6570\u636e\u800c\u65e0\u987b\u5378\u8f7d\u9875\u9762\uff0cAjax\u6280\u672f\u7684\u6838\u5fc3\u662fXMLHttpRequest\u5bf9\u8c61\uff08\u7b80\u79f0XHR\uff09\u3002"),Object(r.b)("p",null,"XHR\u7684\u7528\u6cd5\u9996\u5148\u521b\u5efaXHR\u5bf9\u8c61\uff0c\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"var xhr = new XMLHttpRequest();\n")),Object(r.b)("p",null,"\u5728\u4f7f\u7528XHR\u5bf9\u8c61\u65f6\uff0c\u8981\u8c03\u7528\u7684\u7b2c\u4e00\u4e2a\u65b9\u6cd5\u662fopen()\uff0c\u5b83\u63a5\u53d73\u4e2a\u53c2\u6570\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'\u8981\u53d1\u9001\u7684\u8bf7\u6c42\u7684\u7c7b\u578b\uff08"get"\u3001"post"\u7b49\uff09'),Object(r.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u7684URL"),Object(r.b)("li",{parentName:"ul"},"\u8868\u793a\u662f\u5426\u5f02\u6b65\u53d1\u9001\u8bf7\u6c42\u7684\u5e03\u5c14\u503c\uff0c",Object(r.b)("strong",{parentName:"li"},"\u9ed8\u8ba4\u662ftrue(\u5f02\u6b65),\u53ef\u4ee5\u7701\u53bb"))),Object(r.b)("p",null,"\u4e0b\u9762\u5c31\u662f\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u7684\u4f8b\u5b50\u3002  "),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'xhr.open("get", "api/example", false);\n')),Object(r.b)("p",null,"\u8fd9\u884c\u4ee3\u7801\u4f1a\u542f\u52a8\u4e00\u4e2a\u9488\u5bf9api/example\u7684GET\u8bf7\u6c42\u3002\u6709\u5173\u8fd9\u884c\u4ee3\u7801\uff0c\u9700\u8981\u8bf4\u660e\u4e24\u70b9\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"URL\u76f8\u5bf9\u4e8e\u6267\u884c\u4ee3\u7801\u7684\u5f53\u524d\u9875\u9762\uff08\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\uff09\uff1b"),Object(r.b)("li",{parentName:"ul"},"\u8c03\u7528open()\u65b9\u6cd5\u5e76\u4e0d\u4f1a\u771f\u6b63\u53d1\u9001\u8bf7\u6c42\uff0c\u800c\u53ea\u662f\u542f\u52a8\u4e00\u4e2a\u8bf7\u6c42\u4ee5\u5907\u53d1\u9001\u3002")),Object(r.b)("p",null,"\u6ce8\uff1a\u53ea\u80fd\u5411\u540c\u4e00\u4e2a\u57df\u4f7f\u7528\u76f8\u540c\u7aef\u53e3\u548c\u534f\u8bae\u7684URL\u53d1\u9001\u8bf7\u6c42\u3002\u5982\u679cURL\u4e0e\u542f\u52a8\u8bf7\u6c42\u7684\u9875\u9762\u6709\u4efb\u4f55\u5dee\u522b\uff0c\u90fd\u4f1a\u5f15\u53d1\u5b89\u5168\u9519\u8bef\u3002\u8981\u53d1\u9001\u7279\u5b9a\u7684\u8bf7\u6c42\uff0c\u5fc5\u987b\u50cf\u4e0b\u9762\u8fd9\u6837\u8c03\u7528send()\u65b9\u6cd5\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'xhr.open("get", "api/example", false);\nxhr.send(null);\n')),Object(r.b)("p",null,"\u8fd9\u91cc\u7684send()\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u8981\u4f5c\u4e3a\u8bf7\u6c42\u4e3b\u4f53\u53d1\u9001\u7684\u6570\u636e\u3002",Object(r.b)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u9700\u8981\u901a\u8fc7\u8bf7\u6c42\u4e3b\u4f53\u53d1\u9001\u6570\u636e\uff0c\u5219\u5fc5\u987b\u4f20\u5165null"),"\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u53c2\u6570\u5bf9\u6709\u4e9b\u6d4f\u89c8\u5668\u6765\u8bf4\u662f\u5fc5\u9700\u7684\u3002"),Object(r.b)("p",null,"\u8c03\u7528send()\u4e4b\u540e\uff0c\u8bf7\u6c42\u5c31\u4f1a\u88ab\u53d1\u9001\u5230\u670d\u52a1\u5668\u3002\u7531\u4e8e\u8fd9\u6b21\u8bf7\u6c42\u662f\u540c\u6b65\u7684\uff0cJS\u4ee3\u7801\u4f1a\u7b49\u5230\u670d\u52a1\u5668\u54cd\u5e94\u4e4b\u540e\u518d\u7ee7\u7eed\u6267\u884c\u3002\u5728\u6536\u5230\u54cd\u5e94\u540e\uff0c\u54cd\u5e94\u7684\u6570\u636e\u4f1a\u81ea\u52a8\u586b\u5145XHR\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u76f8\u5173\u7684\u5c5e\u6027\u7b80\u4ecb\u5982\u4e0b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"status\uff1a\u54cd\u5e94\u7684HTTP\u72b6\u6001\u3002"),Object(r.b)("li",{parentName:"ul"},"responseText\uff1a\u4f5c\u4e3a\u54cd\u5e94\u4e3b\u4f53\u88ab\u8fd4\u56de\u7684\u6587\u672c\u3002"),Object(r.b)("li",{parentName:"ul"},'responseXML\uff1a\u5982\u679c\u54cd\u5e94\u7684\u5185\u5bb9\u7c7b\u578b\u662f"text/xml"\u6216"application/xml"\uff0c\u8fd9\u4e2a\u5c5e\u6027\u4e2d\u5c06\u4fdd\u5b58\u5305\u542b\u7740\u54cd\u5e94\u6570\u636e\u7684XML DOM\u6587\u6863\u3002'),Object(r.b)("li",{parentName:"ul"},"statusText\uff1aHTTP\u72b6\u6001\u7684\u8bf4\u660e\u3002")),Object(r.b)("p",null,"\u5728\u63a5\u6536\u5230\u54cd\u5e94\u540e\uff0c\u7b2c\u4e00\u6b65\u662f\u68c0\u67e5status\u5c5e\u6027\uff0c\u4ee5\u786e\u5b9a\u54cd\u5e94\u5df2\u7ecf\u6210\u529f\u8fd4\u56de\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u53ef\u4ee5\u5c06HTTP\u72b6\u6001\u4ee3\u7801\u4e3a200\u4f5c\u4e3a\u6210\u529f\u7684\u6807\u5fd7\u3002\u6b64\u65f6\uff0cresponseText\u5c5e\u6027\u7684\u5185\u5bb9\u5df2\u7ecf\u5c31\u7eea\uff0c\u800c\u4e14\u5728\u5185\u5bb9\u7c7b\u578b\u6b63\u786e\u7684\u60c5\u51b5\u4e0b\uff0cresponseXML\u4e5f\u5e94\u8be5\u80fd\u591f\u8bbf\u95ee\u4e86\u3002\u6b64\u5916\uff0c\u72b6\u6001\u4ee3\u7801\u4e3a304\u8868\u793a\u8bf7\u6c42\u7684\u8d44\u6e90\u5e76\u6ca1\u6709\u88ab\u4fee\u6539\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6d4f\u89c8\u5668\u4e2d\u7f13\u5b58\u7684\u7248\u672c\uff1b\u4e5f\u610f\u5473\u7740\u54cd\u5e94\u662f\u6709\u6548\u7684\u3002\u4e3a\u786e\u4fdd\u63a5\u6536\u5230\u9002\u5f53\u7684\u54cd\u5e94\uff0c\u5e94\u8be5\u50cf\u4e0b\u9762\u8fd9\u6837\u68c0\u67e5\u4e0a\u8ff0\u4e24\u79cd\u72b6\u6001\u4ee3\u7801\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),'xhr.open("get", "api/example", false);\nxhr.send(null);\nif ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {\n          alert(xhr.responseText);\n} else {\n          alert("Request was unsuccessful:"+xhr.status);\n}\n')),Object(r.b)("p",null,"\u6839\u636e\u8fd4\u56de\u7684\u72b6\u6001\u4ee3\u7801\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u53ef\u80fd\u4f1a\u663e\u793a\u7531\u670d\u52a1\u5668\u8fd4\u56de\u7684\u5185\u5bb9\uff0c\u4e5f\u53ef\u80fd\u4f1a\u663e\u793a\u4e00\u6761\u9519\u8bef\u4fe1\u606f\u3002\u5efa\u8bae\u901a\u8fc7\u68c0\u6d4bstatus\u6765\u51b3\u5b9a\u4e0b\u4e00\u6b65\u7684\u64cd\u4f5c\uff0c\u4e0d\u8981\u4f9d\u8d56statusText\uff0c\u56e0\u4e3a\u540e\u8005\u5728\u6d4f\u89c8\u5668\u4f7f\u7528\u65f6\u4e0d\u592a\u53ef\u9760\u3002"),Object(r.b)("p",null,"\u53e6\u5916\uff0c\u65e0\u8bba\u5185\u5bb9\u7c7b\u578b\u662f\u4ec0\u4e48\uff0c\u54cd\u5e94\u4e3b\u4f53\u7684\u5185\u5bb9\u90fd\u4f1a\u4fdd\u5b58\u5230responseText\u5c5e\u6027\u4e2d\uff1b\u800c\u5bf9\u4e8e\u975eXML\u800c\u8a00\uff0cresponseXML\u5c5e\u6027\u7684\u503c\u5c06\u4e3anull\u3002\u50cf\u524d\u9762\u8fd9\u6837\u53d1\u9001\u540c\u6b65\u8bf7\u6c42\u5f53\u7136\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u8fd8\u662f\u8981\u53d1\u9001\u5f02\u6b65\u8bf7\u6c42\uff0c\u624d\u80fd\u8ba9JavaScript\u7ee7\u7eed\u6267\u884c\u800c\u4e0d\u5fc5\u7b49\u5f85\u54cd\u5e94\u3002\u6b64\u65f6\uff0c\u53ef\u4ee5\u68c0\u6d4bXHR\u5bf9\u8c61\u7684readyState\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u8868\u793a\u8bf7\u6c42/\u54cd\u5e94\u8fc7\u7a0b\u7684\u5f53\u524d\u6d3b\u52a8\u9636\u6bb5\u3002\u8fd9\u4e2a\u5c5e\u6027\u53ef\u53d6\u7684\u503c\u5982\u4e0b\uff1a"),Object(r.b)("p",null,"0\uff1a\u672a\u521d\u59cb\u5316\u3002\u5c1a\u672a\u8c03\u7528open()\u65b9\u6cd5\u3002"),Object(r.b)("p",null,"1\uff1a\u542f\u52a8\u3002\u5df2\u7ecf\u8c03\u7528open()\u65b9\u6cd5\uff0c\u4f46\u5c1a\u672a\u8c03\u7528send()\u65b9\u6cd5\u3002"),Object(r.b)("p",null,"2\uff1a\u53d1\u9001\u3002\u5df2\u7ecf\u8c03\u7528send()\u65b9\u6cd5\uff0c\u4f46\u5c1a\u672a\u63a5\u6536\u5230\u54cd\u5e94\u3002"),Object(r.b)("p",null,"3\uff1a\u63a5\u6536\u3002\u5df2\u7ecf\u63a5\u6536\u5230\u90e8\u5206\u54cd\u5e94\u6570\u636e\u3002"),Object(r.b)("p",null,"4\uff1a\u5b8c\u6210\u3002\u5df2\u7ecf\u63a5\u6536\u5230\u5168\u90e8\u54cd\u5e94\u6570\u636e\uff0c\u800c\u4e14\u5df2\u7ecf\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u4e86\u3002"),Object(r.b)("p",null,"\u53ea\u8981readyState\u5c5e\u6027\u7684\u503c\u7531\u4e00\u4e2a\u503c\u53d8\u6210\u53e6\u4e00\u4e2a\u503c\uff0c\u90fd\u4f1a\u89e6\u53d1\u4e00\u6b21 ",Object(r.b)("strong",{parentName:"p"},"readystatechange")," \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u4e8b\u4ef6\u6765\u68c0\u6d4b\u6bcf\u6b21\u72b6\u6001\u53d8\u5316\u540ereadyState\u7684\u503c\u3002\u901a\u5e38\u6211\u4eec\u53ea\u5bf9",Object(r.b)("strong",{parentName:"p"},"readyState\u503c\u4e3a4\u7684\u9636\u6bb5\u611f\u5174\u8da3"),"\uff0c\u56e0\u4e3a\u8fd9\u65f6\u6240\u6709\u6570\u636e\u90fd\u5df2\u7ecf\u5c31\u7eea\u3002\u4e0d\u8fc7\uff0c",Object(r.b)("strong",{parentName:"p"},"\u5fc5\u987b\u5728\u8c03\u7528open()\u4e4b\u524d\u6307\u5b9aonreadystatechange\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u624d\u80fd\u786e\u4fdd\u8de8\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),"\u3002"),Object(r.b)("p",null,"Old XHR Ajax\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'var xhr = new XMLHttpRequest();\nxhr.onreadystatechange = function(){\n   if (xhr.readyState == 4){\n           if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {\n               alert(xhr.responseText);\n         } else {\n              alert("Request was unsuccessful:" + xhr.status);\n         }\n   }\n};\nxhr.open("get", "exanmple.php", true);\nxhr.send(null);\n')),Object(r.b)("p",null,"XHR Level2 Ajax\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'function myAsyncFunction(url) {\n return new Promise((resolve, reject) => {\n   const xhr = new XMLHttpRequest();\n   xhr.open("GET", url); // \u901a\u8fc7url\u5efa\u7acb\u94fe\u63a5\n   xhr.onload = () => resolve(xhr.responseText); //\u63a5\u6536\u5230\u5b8c\u6574\u54cd\u5e94\u6570\u636e\u65f6\u89e6\u53d1\n   xhr.onerror = () => reject(xhr.statusText); //\u8bf7\u6c42\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\u89e6\u53d1\u3002\n   xhr.send();\n });\n};\n')),Object(r.b)("p",null,"\u5b8c\u6574\u7684XHR\u5e94\u7528\u53c2\u8003\uff1a",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/cosmos-x/earth-ui/blob/master/src/components/_utils/xhr/index.js"}),"https://github.com/cosmos-x/earth-ui/blob/master/src/components/_utils/xhr/index.js")," "),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest"}),"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest")," "),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html"}),"XMLHttpRequest Level 2 \u4f7f\u7528\u6307\u5357\uff0c\u4f5c\u8005\uff1a\u962e\u4e00\u5cf0")),Object(r.b)("p",null,"\u6398\u91d1\u4e0a\u4e00\u7bc7",Object(r.b)("a",a({parentName:"p"},{href:"https://juejin.im/post/5a20b1f1f265da432529179c#heading-8"}),"Ajax"),"\u8be6\u89e3\u8bb2\u7684\u8fd8\u4e0d\u9519"))}u.isMDXComponent=!0},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(0),a=n.n(r),l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=p(n),o=r,i=b[s+"."+o]||b[o]||u[o]||l;return n?a.a.createElement(i,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(i,Object.assign({},{ref:t},c))}));function o(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var o=2;o<l;o++)p[o]=n[o];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);