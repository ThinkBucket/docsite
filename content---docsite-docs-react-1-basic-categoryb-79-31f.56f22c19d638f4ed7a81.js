(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));a(0);var n=a(179);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l={id:"category",title:"种类",sidebar_label:"种类"},c=[{value:"类与函数式组件",id:"类与函数式组件",children:[]},{value:"受控组件与非受控组件",id:"受控组件与非受控组件",children:[]},{value:"Ref",id:"ref",children:[]}],p={rightToc:c},o="wrapper";function u(e){var t=e.components,a=b(e,["components"]);return Object(n.b)(o,r({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"类与函数式组件"},"类与函数式组件"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"对比点")),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"class")),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"function（函数式）")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"state"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"可选"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"无状态")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"props"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"有"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"有")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"生命周期"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"有"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"无")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"使用场景"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"需要用到生命周期，需要维护自身的状态，比如处理用户的输入"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"不需要生命周期，不需要维护自身的状态，所有的状态都通过 props 传入")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"强制"),"：函数式组件必须使用箭头函数的形式定义。")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"强制"),"：如果有多个函数式组件嵌套，里面的函数式组件定义的时候 props 参数用 ","_","props 替代。")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"推荐"),"：组件不需要生命周期且不需要维护自身状态的时候，优先使用函数式组件。")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"推荐"),"：presentational 组件优先使用函数式组件。")),Object(n.b)("h2",{id:"受控组件与非受控组件"},"受控组件与非受控组件"),Object(n.b)("p",null,"受控组件与非受控组件是React处理表单的入口。从React的思路来讲，作者肯定让状态控制一切，或者简单的理解为，页面的生成与更新得忠实地执行JSX的指令。但是表单元素有其特殊之处，用户可以通过键盘输入与鼠标选择，改变界面的显示。界面的改变也意味着有一些状态 ",Object(n.b)("strong",{parentName:"p"},"被")," 改动。"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Tips"),"：React 的本质是 ",Object(n.b)("strong",{parentName:"p"},"状态"),"，而受控和非受控也是因 ",Object(n.b)("strong",{parentName:"p"},"状态的控制维护")," 而产生的概念。")),Object(n.b)("p",null,"受控组件和非受控组件主要用在表单的处理当中。controll 指的是对 ",Object(n.b)("strong",{parentName:"p"},"value/checked"),"(","单选框和复选框",")"," 属性的控制。以 input 为例，如果绑定了 value 属性则为受控组件，",Object(n.b)("a",r({parentName:"p"},{href:"https://jsbin.com/wehazujeli/edit?js,console,output"}),"demo"),"："),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'<input type="text" value={this.state.value} /> // 受控组件\n<input type="text" value={this.state.value} onChange={::this.handleChange} /> // 受控组件\n<input type="text" ref={n => this.myInput = n} defaultValue={this.state.value} /> // 非受控组件\n<input type="text" ref={n => this.myInput = n} defaultValue={this.state.value} onChange={::this.handleChange} /> // 非受控组件\n')),Object(n.b)("p",null,"受控组件将value和state进行了绑定，可以通过 react 的生命周期很方便地达到对value的控制，state相应值的变化也会影响到value的变化，使得应用整体的状态更加可控，所以说它是受控的。由于非受控组件没有 value 属性，所以要想控制输入框的内容不是那么方便和“原生自然“，当然通过 ref 反模式也可以达到相同的效果。"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Tips"),"：受控和非受控并不是说，受控做的事情非受控不能做，非受控同样可以通过 ref 这种反模式达到受控组件同样的效果，当然这样会带来一些副作用。大部分情况下受控组件足够我们使用，在一些特殊的情况下则用非受控组件来更快速便捷地达到我们想要的效果。")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"对比点")),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"controlled")),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"uncontrolled（反模式）")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"特征"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"有value/checked属性"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"无value/checked属性")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"优点"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"便于对输入的value作处理"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"可以不用绑定change事件")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"缺点"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"最好绑定change事件，有性能损耗"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"不受props/state控制")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"实时获取输入的value"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"e.target.value"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"e.target.value/this.refs.refName.value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"获取组件的value"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"this.state.value"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"this.refs.refName.value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"set value"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"this.setState","(",")"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"不需要手动set，ref自动同步")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"注意"),"：react 判断一个组件是否是受控组件不是单纯地看是否有value属性，而是要进一步判断value 属性的值 value != null，尤其要注意是 ",Object(n.b)("strong",{parentName:"p"},"!=")," 。")),Object(n.b)("p",null,"由于 ",Object(n.b)("inlineCode",{parentName:"p"},"undefined == null")," 是 true，如果value 绑定的值初始状态是null 或 undefined 的时候 react 会认为该组件是非受控组件，控制台会出现："),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-text"}),"Warning: MyForm is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled \\(or vice versa\\). Decide between using a controlled or uncontrolled input element for the lifetime of the component.\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"强制"),"：受控组件的 value/checked 属性的初始值必须是空字符串（''）。")),Object(n.b)("p",null,"示例："),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"<input type=\"text\" value={this.state.name || ''} onChange={this.handleChange.bind(this)} />\n")),Object(n.b)("h2",{id:"ref"},"Ref"))}u.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(0),r=a.n(n),b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var p="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=l(a),i=n,m=u[c+"."+i]||u[i]||o[i]||b;return a?r.a.createElement(m,Object.assign({},{ref:t},p,{components:a})):r.a.createElement(m,Object.assign({},{ref:t},p))}));function i(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);