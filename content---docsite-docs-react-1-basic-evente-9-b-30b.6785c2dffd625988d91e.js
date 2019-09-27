(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));n(0);var a=n(179);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var c={id:"event",title:"事件",sidebar_label:"事件"},o=[{value:"合成事件与原生事件",id:"合成事件与原生事件",children:[{value:"合成事件",id:"合成事件",children:[]},{value:"原生事件",id:"原生事件",children:[]}]},{value:"合成事件的绑定",id:"合成事件的绑定",children:[{value:"方式一：render 时绑定",id:"方式一：render-时绑定",children:[]},{value:"方式二：创建实例时绑定",id:"方式二：创建实例时绑定",children:[]}]}],l={rightToc:o},p="wrapper";function u(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(p,b({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"合成事件与原生事件"},"合成事件与原生事件"),Object(a.b)("h3",{id:"合成事件"},"合成事件"),Object(a.b)("p",null,"在 JSX 中直接绑定的事件，如"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-jsx"}),'<a ref="aTag" onClick={(e)=>this.handleClick(e)}>UPDATE</a>\n')),Object(a.b)("p",null,"这里的 ",Object(a.b)("inlineCode",{parentName:"p"},"handleClick")," 事件就是合成事件。"),Object(a.b)("p",null,"VirtualDOM 在内存中是以 ",Object(a.b)("strong",{parentName:"p"},"对象")," 的形式存在，React 基于 VirtualDOM 实现了一个 SyntheticEvent（合成事件）层，我们所定义的事件处理器会接收到一个 SyntheticEvent 对象的实例（比如",Object(a.b)("inlineCode",{parentName:"p"},"handleChange(reactEvent)"),"），且与原生的浏览器事件有同样的接口。"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：React 使用事件委托机制，会将所有的事件都绑定在最外层","(",Object(a.b)("inlineCode",{parentName:"p"},"document"),")","元素上，依赖事件的冒泡机制完成委派，在冒泡阶段处理事件，不支持捕获阶段处理事件。")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"推荐"),"：阻止合成事件间的冒泡，用 e.stopPropagation","(",")"," 。")),Object(a.b)("h3",{id:"原生事件"},"原生事件"),Object(a.b)("p",null,"通过 JS 原生代码绑定的事件，如："),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-javascript"}),"document.body.addEventListener('click',e => {\n  // 通过e.target判断阻止冒泡\n  if(e.target && e.target.matches('a')){\n    return;\n  }\n  console.log('body');\n})\n// 或\nthis.refs.update.addEventListener('click',e => {\n  console.log('update');\n});\n")),Object(a.b)("p",null,"Q：为什么有时候还需要原生事件？"),Object(a.b)("p",null,"A：react 的 app 一般是挂在 body 下面某个div 结点上，如果我想将事件绑定在 body 上（比如监听 body 的滚动事件，window 的 resize 事件）就需要用原生事件。实际上，react 合成事件只是原生 DOM 事件的一个子集，它仅仅实现了 ",Object(a.b)("a",b({parentName:"p"},{href:"https://www.w3.org/TR/DOM-Level-3-Events/"}),"DOM Level 3")," 的事件接口，并且统一了浏览器的兼容问题，有些事件 React 并没有实现。"),Object(a.b)("p",null,"Q：在什么生命周期才可以绑定原生事件？"),Object(a.b)("p",null,"A：组件挂载完成之后，即 componentDidMount。"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"强制"),"：一定要在组件卸载（componentWillUnmount）时手动移除，否则很可能出现内存泄漏的问题，而合成事件不需要，因为 react 内部已经帮你自动处理了。")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：合成事件中阻止事件冒泡是没办法阻止原生事件的冒泡。即使是 reactEvent.nativeEvent.stopPropagation","(",")","。")),Object(a.b)("p",null,"reactEvent 是封装好的事件，它是在 document 的回调里进行封装，并执行回调的。而原生的监听，在document 接收到冒泡时早就执行完了。",Object(a.b)("inlineCode",{parentName:"p"},"reactEvent.nativeEvent.stopPropagation()")," 方法实际上是在最外层节点上调用了原生的 stopPropagation， 只阻止了 document 的冒泡。"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：原生事件中阻止冒泡是可以阻止合成事件的冒泡。")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"推荐"),"：阻止合成事件与最外层 document 上的事件间的冒泡，用e.nativeEvent.stopImmediatePropagation","(",")"," 。")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"推荐"),"：阻止合成事件与除最外层 document 上的原生事件上的冒泡，通过判断 e.target 来避免。")),Object(a.b)("h2",{id:"合成事件的绑定"},"合成事件的绑定"),Object(a.b)("p",null,"对于 ",Object(a.b)("strong",{parentName:"p"},"合成事件")," 根据组件事件绑定的创建时间主要有两类方法："),Object(a.b)("h3",{id:"方式一：render-时绑定"},"方式一：render 时绑定"),Object(a.b)("p",null,"渲染时绑定主要有三种："),Object(a.b)("h4",{id:"bind-显式绑定方式："},"bind 显式绑定方式："),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-jsx"}),"onChange = {this.handleChange.bind(this)}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：这种方法有一个潜在的性能问题：当组件每次重新渲染时，都会有一个新的函数创建。")),Object(a.b)("p",null,"但是在真正的开发场景中，由此引发的性能问题往往不值一提（除非是大型组件消费类应用或游戏）。"),Object(a.b)("h4",{id:"箭头函数隐式绑定："},"箭头函数隐式绑定："),Object(a.b)("p",null,"这种方法其实和第一种类似，我们可以利用ES6 箭头函数 ",Object(a.b)("strong",{parentName:"p"},"隐式")," 绑定 this："),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-jsx"}),"onChange = {e => this.handleChange(e)}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：这种方法与第一种方法一样，同样存在潜在的性能问题。")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"推荐"),"：函数式组件优先使用箭头函数隐式绑定this。")),Object(a.b)("h4",{id:"双冒号隐式绑定："},"双冒号隐式绑定："),Object(a.b)("p",null,"ES next ",Object(a.b)("strong",{parentName:"p"},"Stage-0")," 中 ",Object(a.b)("a",b({parentName:"p"},{href:"https://github.com/zenparsing/es-function-bind"}),"Function bind syntax")," 提案："),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-jsx"}),"onChange = {::this.handleChange}\n")),Object(a.b)("p",null,"函数绑定运算符是并排的两个双冒号（ :: ），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即 this 对象），绑定到右边的函数上面。如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：该方法不能带参数。")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Tips"),"：babel 会将该方法转译成 ",Object(a.b)("inlineCode",{parentName:"p"},".bind(this)")," 的方式。")),Object(a.b)("h3",{id:"方式二：创建实例时绑定"},"方式二：创建实例时绑定"),Object(a.b)("h4",{id:"constructor-内绑定："},"constructor 内绑定："),Object(a.b)("p",null,"constructor 方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。 所以我们可以："),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-jsx"}),"constructor(props) {\n  super(props);\n  this.handleChange = this.handleChange.bind(this);\n}\n")),Object(a.b)("p",null,"就个人习惯而言，与前两种方法相比，constructor 内绑定在可读性和可维护性上也许有些欠缺。 同时，我们知道在 constructor 声明的方法不会存在实例的原型上，而属于实例本身的方法。每个实例都有同样一个 handleChange，这本身也是一种重复和浪费。"),Object(a.b)("p",null,"缺点：即使不用到state，也需要添加类构造函数来绑定this，代码量多； 添加参数要在构造函数中bind时指定，不在render中。"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：组件实例会重复绑定该方法。")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"推荐"),"：class 类型的组件优先使用该方法，也是性能最好的。")),Object(a.b)("h4",{id:"class-属性中使用--和箭头函数："},"class 属性中使用 = 和箭头函数："),Object(a.b)("p",null,"这个方法依赖于 ES next 的新特性，请参考：",Object(a.b)("a",b({parentName:"p"},{href:"https://tc39.github.io/proposal-class-public-fields/"}),"https://tc39.github.io/proposal-class-public-fields/")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-jsx"}),"handleChange = () => {\n  // call this function from render \n  // and this.whatever in here works fine.\n};\n")),Object(a.b)("p",null,"总结一下这种方式的优点："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"使用箭头函数，有效绑定了 this； "),Object(a.b)("li",{parentName:"ul"},"没有方式一的潜在性能问题；"),Object(a.b)("li",{parentName:"ul"},"避免了constructor 内绑定的组件实例重复问题；")))}u.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(0),b=n.n(a),r=b.a.createContext({}),c=function(e){var t=b.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=c(e.components);return b.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=c(n),i=a,s=u[o+"."+i]||u[i]||p[i]||r;return n?b.a.createElement(s,Object.assign({},{ref:t},l,{components:n})):b.a.createElement(s,Object.assign({},{ref:t},l))}));function i(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:a,c[1]=o;for(var i=2;i<r;i++)c[i]=n[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);