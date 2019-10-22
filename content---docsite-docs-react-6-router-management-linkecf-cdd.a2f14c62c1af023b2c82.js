(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{411:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));t(58),t(31),t(22),t(23),t(59),t(0);var r=t(537);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={id:"link",title:"Link",sidebar_label:"Link"},i=[],c={rightToc:i},l="wrapper";function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(l,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5728\u5404\u4e2a\u9875\u9762\u95f4\u5207\u6362\u65f6\u5982\u679c\u4f7f\u7528\u951a\u70b9\u5143\u7d20\u5b9e\u73b0\uff0c\u90a3\u4e48\u6bcf\u6b21\u70b9\u51fb\u65f6\u9875\u9762\u5c06\u88ab\u91cd\u65b0\u52a0\u8f7d\u3002React Router \u63d0\u4f9b\u4e86 ","<","Link",">"," \u7ec4\u4ef6\u7528\u6765\u907f\u514d\u8fd9\u79cd\u72b6\u51b5\u7684\u53d1\u751f\u3002\u5f53\u4f60\u70b9\u51fb ","<","Link",">"," \u65f6\uff0cURL \u4f1a\u66f4\u65b0\uff0c\u7ec4\u4ef6\u4f1a\u88ab\u91cd\u65b0\u6e32\u67d3\uff0c\u4f46\u662f\u9875\u9762\u4e0d\u4f1a\u91cd\u65b0\u52a0\u8f7d\u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import { Link } from 'react-router-dom'\nconst Header = () => (\n  <header>\n    <nav>\n      <ul>\n        <li><Link to='/'>Home</Link></li>\n        <li><Link to='/article'>Article</Link></li>\n      </ul>\n    </nav>\n  </header>\n)\n")),Object(r.b)("p",null,"<","Link",">"," \u4f7f\u7528 'to' \u53c2\u6570\u6765\u63cf\u8ff0\u9700\u8981\u5b9a\u4f4d\u7684\u9875\u9762\u3002\u5b83\u7684\u503c\u5373\u53ef\u662f\u5b57\u7b26\u4e32\u4e5f\u53ef\u662f location \u5bf9\u8c61\uff08\u5305\u542bpathname\uff0csearch\uff0chash\u4e0estate\u5c5e\u6027\uff09\u3002\u5982\u679c\u5176\u503c\u4e3a\u5b57\u7b26\u4e32\u5c06\u4f1a\u88ab\u8f6c\u6362\u4e3a location \u5bf9\u8c61\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"<Link to={{ pathname: '/article/6' }}>Article #6</Link>\n")))}p.isMDXComponent=!0},537:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=i(t),s=r,f=u[c+"."+s]||u[s]||p[s]||o;return t?a.a.createElement(f,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(f,Object.assign({},{ref:n},l))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);