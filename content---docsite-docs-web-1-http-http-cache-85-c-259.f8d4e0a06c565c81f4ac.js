(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{300:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return o}));n(0);var a=n(396);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b={id:"http-cache",title:"HTTP 缓存",sidebar_label:"HTTP 缓存"},c=[{value:"缓存分类",id:"缓存分类",children:[]},{value:"强缓存",id:"强缓存",children:[]},{value:"协商缓存",id:"协商缓存",children:[]},{value:"整体流程",id:"整体流程",children:[]}],p={rightToc:c},i="wrapper";function o(t){var e=t.components,n=l(t,["components"]);return Object(a.b)(i,r({},p,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"缓存分类"},"缓存分类"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/CXFABV.png",alt:null}))),Object(a.b)("p",null,"HTTP缓存都是从第二次请求开始的。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"第一次请求时，服务器返回资源，并在respone header中回传资源的缓存参数；")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"第二次请求时，浏览器判断这些请求参数，击中强缓存就直接200(from memory/disk cache)，否则就把请求参数加到request header头传给服务器，看是否击中协商缓存，击中则返回304，否则服务器会返回新的资源。"))),Object(a.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/PShPaZ.png",width:"500",height:"200"}),Object(a.b)("p",null,"状态码200的有三种情况："),Object(a.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/V8aYae.png",width:"710",height:"65"}),Object(a.b)("p",null,"HTTP缓存分为强缓存和协议缓存，它们的区别如下："),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null})),Object(a.b)("th",r({parentName:"tr"},{align:null}),"强缓存"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"协商缓存"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"状态码"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"200(from memory/disk cache)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"304")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"缓存位置"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"浏览器"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"浏览器")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"谁来决定"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"浏览器"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"服务器")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"请求头还是响应头"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"if 开头的都是请求头，Cache-Control都有，其他都是响应头"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"与强缓存相同")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Normal Reload(CMD + R)"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Hard Reload(CMD + Shift + R)"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Empty Cache and Hard Relaod"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}))))),Object(a.b)("h2",{id:"强缓存"},"强缓存"),Object(a.b)("p",null,"强缓存的200也有两种情况："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"200 from memory 不访问服务器，直接读缓存，从内存中读取缓存。此时的数据时缓存到内存中的，当kill进程后，也就是浏览器关闭以后，数据将不存在。但是这种方式只能缓存派生资源")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"200 from disk 不访问服务器，直接读缓存，从磁盘中读取缓存，当kill进程时，数据还是存在。这种方式也只能缓存派生资源。"))),Object(a.b)("p",null,"以图片为例："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"访问-> 200 -> 退出浏览器"),Object(a.b)("li",{parentName:"ul"},"再进来-> 200(from disk cache) -> 正常刷新 -> 200(from memory cache)")),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Vfo3MR.png",alt:null}))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"强缓存"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"可选值"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"优先级"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"优缺点"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Cache-Control"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"max-age"),": xx秒，相对时间，强缓存必备；",Object(a.b)("strong",{parentName:"td"},"no-cache"),": 不直接使用缓存，开始服务器新鲜度判定；",Object(a.b)("strong",{parentName:"td"},"no-store"),": 每次都下载最新资源；",Object(a.b)("strong",{parentName:"td"},"public/private"),": 是否只能被单个用户保存"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"高"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"无")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Expires"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"GMT时间"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"低"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"服务器和本地时间不一定统一")))),Object(a.b)("h2",{id:"协商缓存"},"协商缓存"),Object(a.b)("p",null,"304 Not Modified 访问服务器，发现数据没有更新，服务器返回此状态码。然后从缓存中读取数据。"),Object(a.b)("p",null,"如下图，协商缓存都是成对出现的（相同颜色是一对响应和请求头部，if 开头的都是请求头部）。"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/x4wXe9.png",alt:null}))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"协商缓存"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"可选值"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"优先级"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"优缺点"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Last-Modify/If-Modify-Sicne"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"GMT时间"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"依次比较，排序靠后"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"1.修改并不意味修改；2.秒级判断（精确度到秒）")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"ETag/If-None-Match"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"校验值"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"依次比较，先比较"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"使用系统默认的Hash算法，在分布式部署中会导致不同服务器的ETag值不一致")))),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/vX3wwK.png",alt:null}))),Object(a.b)("h2",{id:"整体流程"},"整体流程"),Object(a.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/pXmTws.png",width:"445",height:"520"}),Object(a.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/8yA4hg.png",width:"630",height:"380"}),Object(a.b)("p",null,"相关文章推荐："),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://juejin.im/post/5b3c87386fb9a04f9a5cb037#heading-3"}),"https://juejin.im/post/5b3c87386fb9a04f9a5cb037#heading-3")),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://imweb.io/topic/5795dcb6fb312541492eda8c"}),"https://imweb.io/topic/5795dcb6fb312541492eda8c")))}o.isMDXComponent=!0},396:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a),l=r.a.createContext({}),b=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):Object.assign({},e,t)),n},c=function(t){var e=b(t.components);return r.a.createElement(l.Provider,{value:e},t.children)};var p="mdxType",i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},o=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&-1===e.indexOf(a)&&(n[a]=t[a]);return n}(t,["components","mdxType","originalType","parentName"]),o=b(n),m=a,u=o[c+"."+m]||o[m]||i[m]||l;return n?r.a.createElement(u,Object.assign({},{ref:e},p,{components:n})):r.a.createElement(u,Object.assign({},{ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,b=new Array(l);b[0]=o;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[p]="string"==typeof t?t:a,b[1]=c;for(var m=2;m<l;m++)b[m]=n[m];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);