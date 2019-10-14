(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));n(0);var o=n(388),a=n(389);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={id:"container-component",title:"容器型组件",sidebar_label:"容器型组件"},p=[{value:"contianer 组件",id:"contianer-组件",children:[]}],l={rightToc:p},i="wrapper";function m(e){var t=e.components,n=c(e,["components"]);return Object(o.b)(i,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Redux 的一个重要思想是将组件主要分为 ",Object(o.b)("strong",{parentName:"p"},"container（容器型） 组件"),"和 ",Object(o.b)("strong",{parentName:"p"},"presentational（展示型） 组件"),"。"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"container 主要是为 presentational 组件提供一个 ",Object(o.b)("strong",{parentName:"li"},"数据容器"),"，这里的数据包括属性和方法（需要 dispatch 的方法，和不需要 dispatch 的方法）。"),Object(o.b)("li",{parentName:"ul"},"presentational 组件仅仅作为拿到数据（血液）后的展示作用，上承接 contianer 传过来的数据，下接ui 组件。")),Object(o.b)("p",null,Object(o.b)("img",r({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/H2Or1W.jpg",alt:"Redux 组件与 Store 的关系"}))),Object(o.b)("p",null,"一个完整 React App 的组件树，根节点即 mountNode，叶子节点应该是 presentational 组件或 ui 组件，中间的节点是 container 组件，主要用与传递和监听数据，作为一个数据的中间容器。"),Object(o.b)("p",null,Object(o.b)("img",r({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/LnJ7J3.jpg",alt:"Redux 组件树"}))),Object(o.b)("h2",{id:"contianer-组件"},"contianer 组件"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(Component)\n")),Object(o.b)("p",null,"connect: 一个柯里化函数，函数将被调用两次。"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"第一次是设置参数，第一次调用的时候4个参数都是可选。"),Object(o.b)("li",{parentName:"ol"},"第二次是组件与 Redux store 连接。")),Object(o.b)("p",null,"connect 函数不会修改传入的 React 组件，返回的是一个新的已与 Redux store 连接的组件。"),Object(o.b)(a.a,{type:"better",mdxType:"Hint"},"mapStateToProps 和 mapDispatchToProps 里面的对象保持扁平化，不要发生嵌套。"),Object(o.b)(a.a,{type:"better",mdxType:"Hint"},"connect 的参数名字可以自定义，但推荐使用默认的参数名字。"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mapStateToProps","(","state, ownProps?",")",": stateProps")," 在 store 发生改变的时候才会调用，然后把返回的结果作为组件的 props。")),Object(o.b)(a.a,{type:"tip",mdxType:"Hint"},"该函数 return 的对象里面的值有变化才会引起其所对应的 Component 的更新。"),Object(o.b)(a.a,{type:"tip",mdxType:"Hint"},"mapStateToProps 可以不传，如果不传，组件不会监听 store 的变化，也就是说 store 的更新不会引起 Component 的更新。"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mapDispatchToProps","(","dispatch, ownProps?",")",": dispatchProps")," 里面主要是事件绑定的方法，方法里面可以通过 ",Object(o.b)("inlineCode",{parentName:"li"},"dispatch")," 调用 ",Object(o.b)("inlineCode",{parentName:"li"},"action")," 。"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mergeProps","(","stateProps, dispatchProps, ownProps",")",": props")," 用来指定这三个 props 的合并规则，合并的结果作为组件的 props。如果要指定这个函数，建议不要太复杂。")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"const mapStateToProps = state => ({\n  page: selector.getPage(state)\n});\nconst mapDispatchToProps = dispatch => ({\n  deleteDiscount(page, lineId) {\n    dispatch(asyncAction.deleteDiscount(page, lineId));\n  }\n});\nconst mergeProps = (stateProps, dispatchProps, ownProps) => {\n  return Object.assign({}, ownProps, stateProps, dispatchProps, {\n    deleteDiscount: dispatchProps.deleteDiscount.bind(null, stateProps.page)\n  });\n};\nexport default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Table);\n")),Object(o.b)(a.a,{type:"must",mdxType:"Hint"},"使用 ES2015 的 **Object.assign** 方法来做 props 的合并，第一个参数传空对象。"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"options: object")," 里面主要关注 pure。"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"[","pure = true","]"," ","(","Boolean",")"),": 如果为 true，connector 将执行 shouldComponentUpdate 并且浅对比 mergeProps 的结果，避免不必要的更新，前提是当前组件是一个“",Object(o.b)("strong",{parentName:"li"},"纯"),"”组件，它不依赖于任何的输入或 state 而只依赖于 props 和 Redux store 的 state。",Object(o.b)("strong",{parentName:"li"},"默认值为 true"),"。"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"[","withRef = false","]"," ","(","Boolean",")"),": 如果为 true，connector 会保存一个对被被包含的组件实例的引用，该引用通过 ",Object(o.b)("inlineCode",{parentName:"li"},"getWrappedInstance()")," 方法获得。",Object(o.b)("strong",{parentName:"li"},"默认值为 false"),"。"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Component")," 就是要被连接的 React 组件。")))}m.isMDXComponent=!0},389:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(391),c=n.n(r),s=(n(390),{better:{name:"推荐",color:"#50c610",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},a.a.createElement("g",null,a.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),a.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},a.a.createElement("g",null,a.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},a.a.createElement("g",null,a.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},a.a.createElement("g",null,a.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),a.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return a.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(s[t].color)}},a.a.createElement("div",{style:{float:"left"}},s[t].icon),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:c()("<strong>".concat(s[t].name,"</strong>：").concat(n))}}))}},390:function(e,t,n){}}]);