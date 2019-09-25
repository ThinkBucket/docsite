(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{147:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return p}));var a=t(0),c=t.n(a),o=c.a.createContext({}),r=function(e){var n=c.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=r(e.components);return c.a.createElement(o.Provider,{value:n},e.children)};var u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=r(t),p=a,l=s[i+"."+p]||s[p]||b[p]||o;return t?c.a.createElement(l,Object.assign({},{ref:n},u,{components:t})):c.a.createElement(l,Object.assign({},{ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=s;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));t(0);var a=t(147);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var r={id:"hooks",title:"Hooks",sidebar_label:"Hooks"},i=[{value:"什么是State Hooks？",id:"什么是state-hooks？",children:[{value:"声明一个状态变量",id:"声明一个状态变量",children:[]},{value:"读取状态值",id:"读取状态值",children:[]},{value:"更新状态",id:"更新状态",children:[]},{value:"假如一个组件有多个状态值怎么办？",id:"假如一个组件有多个状态值怎么办？",children:[]},{value:"React是怎么保证多个useState的相互独立的？",id:"react是怎么保证多个usestate的相互独立的？",children:[]}]},{value:"Effect Hooks",id:"effect-hooks",children:[{value:"useEffect做了什么？",id:"useeffect做了什么？",children:[]},{value:"useEffect怎么解绑一些副作用?",id:"useeffect怎么解绑一些副作用",children:[]},{value:"为什么要让副作用函数每次组件更新都执行一遍？",id:"为什么要让副作用函数每次组件更新都执行一遍？",children:[]},{value:"怎么跳过一些不必要的副作用函数",id:"怎么跳过一些不必要的副作用函数",children:[]}]}],u={rightToc:i},b="wrapper";function s(e){var n=e.components,t=o(e,["components"]);return Object(a.b)(b,c({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"什么是state-hooks？"},"什么是State Hooks？"),Object(a.b)("p",null,"看一个例子，我们分解来看到底state hooks做了什么："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"import { useState } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n")),Object(a.b)("h3",{id:"声明一个状态变量"},"声明一个状态变量"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"import { useState } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useState"),"是react自带的一个hook函数，它的作用就是用来声明状态变量。",Object(a.b)("inlineCode",{parentName:"p"},"useState"),"这个函数接收的参数是我们的状态初始值（initial state），它返回了一个数组，这个数组的第",Object(a.b)("inlineCode",{parentName:"p"},"[0]"),"项是当前当前的",Object(a.b)("strong",{parentName:"p"},"状态值"),"，第",Object(a.b)("inlineCode",{parentName:"p"},"[1]"),"项是可以改变状态值的",Object(a.b)("strong",{parentName:"p"},"方法函数"),"。"),Object(a.b)("p",null,"所以我们做的事情其实就是，声明了一个状态变量count，把它的初始值设为0，同时提供了一个可以更改count的函数setCount。"),Object(a.b)("h3",{id:"读取状态值"},"读取状态值"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"<p>You clicked {count} times</p>\n")),Object(a.b)("p",null,"很简单，因为我们的状态count就是一个单纯的变量而已，我们再也不需要写成",Object(a.b)("inlineCode",{parentName:"p"},"{this.state.count}"),"这样了。"),Object(a.b)("h3",{id:"更新状态"},"更新状态"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"<button onClick={() => setCount(count + 1)}>\n  Click me\n</button>\n")),Object(a.b)("p",null,"当用户点击按钮时，我们调用setCount函数，这个函数接收的参数是修改过的新状态值。接下来的事情就交给react了，react将会重新渲染我们的Example组件，并且使用的是更新后的新的状态，即",Object(a.b)("inlineCode",{parentName:"p"},"count=1"),"。这里我们要停下来思考一下，Example本质上也是一个普通的函数，为什么它可以记住之前的状态？"),Object(a.b)("h3",{id:"假如一个组件有多个状态值怎么办？"},"假如一个组件有多个状态值怎么办？"),Object(a.b)("p",null,"首先，useState是可以多次调用的，所以我们完全可以这样写："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"function ExampleWithManyStates() {\n  const [age, setAge] = useState(42);\n  const [fruit, setFruit] = useState('banana');\n  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);\n}\n")),Object(a.b)("p",null,"其次，useState接收的初始值没有规定一定要是string/number/boolean这种简单数据类型，它完全",Object(a.b)("strong",{parentName:"p"},"可以接收对象或者数组作为参数"),"。最后，react也给我们提供了一个",Object(a.b)("inlineCode",{parentName:"p"},"useReducer"),"的hook，如果你更喜欢redux式的状态管理方案的话。"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"注意"),"：之前我们的",Object(a.b)("inlineCode",{parentName:"p"},"this.setState"),"做的是",Object(a.b)("strong",{parentName:"p"},"合并状态"),"后返回一个新状态，而",Object(a.b)("inlineCode",{parentName:"p"},"useState"),"是直接",Object(a.b)("strong",{parentName:"p"},"替换"),"老状态后返回新状态。")),Object(a.b)("p",null,"从",Object(a.b)("inlineCode",{parentName:"p"},"ExampleWithManyStates"),"函数我们可以看到，",Object(a.b)("inlineCode",{parentName:"p"},"useState"),"无论调用多少次，相互之间是独立的。这一点至关重要。为什么这么说呢？"),Object(a.b)("p",null,"其实我们看hook的“形态”，有点类似之前被官方否定掉的Mixins这种方案，都是提供一种“插拔式的功能注入”的能力。而mixins之所以被否定，是因为",Object(a.b)("strong",{parentName:"p"},"Mixins机制是让多个Mixins共享一个对象的数据空间"),"，这样就很难确保不同Mixins依赖的状态不发生冲突。"),Object(a.b)("p",null,"而现在我们的hook，一方面它是直接用在function当中，而不是class；另一方面每一个hook都是相互独立的，",Object(a.b)("strong",{parentName:"p"},"不同组件调用同一个hook也能保证各自状态的独立性。"),"这就是两者的本质区别了。"),Object(a.b)("h3",{id:"react是怎么保证多个usestate的相互独立的？"},"React是怎么保证多个useState的相互独立的？"),Object(a.b)("p",null,"还是看上面给出的",Object(a.b)("inlineCode",{parentName:"p"},"ExampleWithManyStates"),"例子，我们调用了三次",Object(a.b)("inlineCode",{parentName:"p"},"useState"),"，每次我们传的参数只是一个值（如42，‘banana’）",Object(a.b)("em",{parentName:"p"},"，"),"我们根本没有告诉react这些值对应的key是哪个，那react是怎么保证这三个useState找到它对应的state呢？"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Tips"),"：React是根据",Object(a.b)("inlineCode",{parentName:"p"},"useState"),"出现的顺序来定的。")),Object(a.b)("p",null,"我们具体来看一下："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"  //第一次渲染\n  useState(42);  //将age初始化为42\n  useState('banana');  //将fruit初始化为banana\n  useState([{ text: 'Learn Hooks' }]); //...\n\n  //第二次渲染\n  useState(42);  //读取状态变量age的值（这时候传的参数42直接被忽略）\n  useState('banana');  //读取状态变量fruit的值（这时候传的参数banana直接被忽略）\n  useState([{ text: 'Learn Hooks' }]); //...\n")),Object(a.b)("p",null,"假如我们改一下代码："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"let showFruit = true;\nfunction ExampleWithManyStates() {\n  const [age, setAge] = useState(42);\n  \n  if(showFruit) {\n    const [fruit, setFruit] = useState('banana');\n    showFruit = false;\n  }\n \n  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);\n}\n")),Object(a.b)("p",null,"这样一来："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"  //第一次渲染\n  useState(42);  //将age初始化为42\n  useState('banana');  //将fruit初始化为banana\n  useState([{ text: 'Learn Hooks' }]); //...\n\n  //第二次渲染\n  useState(42);  //读取状态变量age的值（这时候传的参数42直接被忽略）\n  // useState('banana');  \n  useState([{ text: 'Learn Hooks' }]); //读取到的却是状态变量fruit的值，导致报错\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"强制"),"：React规定我们必须把hooks写在函数的最外层，不能写在",Object(a.b)("inlineCode",{parentName:"p"},"ifelse"),"等条件语句当中，来确保hooks的执行顺序一致。")),Object(a.b)("h2",{id:"effect-hooks"},"Effect Hooks"),Object(a.b)("p",null,"我们在上一节的例子中增加一个新功能："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"import { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  // 类似于componentDidMount 和 componentDidUpdate:\n  useEffect(() => {\n    // 更新文档的标题\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n")),Object(a.b)("p",null,"我们对比着看一下，如果没有hooks，我们会怎么写？"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"class Example extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  componentDidMount() {\n    document.title = `You clicked ${this.state.count} times`;\n  }\n\n  componentDidUpdate() {\n    document.title = `You clicked ${this.state.count} times`;\n  }\n\n  render() {\n    return (\n      <div>\n        <p>You clicked {this.state.count} times</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Click me\n        </button>\n      </div>\n    );\n  }\n}\n")),Object(a.b)("p",null,"我们写的有状态组件，通常会产生很多的副作用（side effect），比如发起ajax请求获取数据，添加一些监听的注册和取消注册，手动修改dom等等。我们之前都把这些副作用的函数写在生命周期函数钩子里，比如",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount"),"，",Object(a.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"和",Object(a.b)("inlineCode",{parentName:"p"},"componentWillUnmount"),"。而现在的",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"就相当与这些声明周期函数钩子的集合体。它以一抵三。"),Object(a.b)("p",null,"同时，由于前文所说hooks可以反复多次使用，相互独立。所以我们合理的做法是，给每一个副作用一个单独的",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"钩子。这样一来，这些副作用不再一股脑堆在生命周期钩子里，代码变得更加清晰。"),Object(a.b)("h3",{id:"useeffect做了什么？"},"useEffect做了什么？"),Object(a.b)("p",null,"我们再梳理一遍下面代码的逻辑："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n")),Object(a.b)("p",null,"首先，我们声明了一个状态变量",Object(a.b)("inlineCode",{parentName:"p"},"count"),"，将它的初始值设为0。然后我们告诉react，我们的这个组件有一个副作用。我们给",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"hook传了一个匿名函数，这个匿名函数就是我们的副作用。"),Object(a.b)("p",null,"在这个例子里，我们的副作用是调用browser API来修改文档标题。当react要渲染我们的组件时，它会先记住我们用到的副作用。等react更新了DOM之后，它再依次执行我们定义的副作用函数。"),Object(a.b)("p",null,"这里要注意几点："),Object(a.b)("p",null,"第一，react首次渲染和之后的每次渲染都会调用一遍传给",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"的函数。而之前我们要用两个声明周期函数来分别表示首次渲染（",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount"),"），和之后的更新导致的重新渲染（",Object(a.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"）。"),Object(a.b)("p",null,"第二，",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"中定义的副作用函数的执行不会阻碍浏览器更新视图，也就是说这些函数是",Object(a.b)("strong",{parentName:"p"},"异步"),"执行的，而之前的",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount"),"或",Object(a.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"中的代码则是同步执行的。"),Object(a.b)("p",null,"这种安排对大多数副作用说都是合理的，但有的情况除外，比如我们有时候需要先根据DOM计算出某个元素的尺寸再重新渲染，这时候我们希望这次重新渲染是同步发生的，也就是说它会在浏览器真的去绘制这个页面前发生。"),Object(a.b)("h3",{id:"useeffect怎么解绑一些副作用"},"useEffect怎么解绑一些副作用?"),Object(a.b)("p",null,"这种场景很常见，当我们在",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount"),"里添加了一个注册，我们得马上在",Object(a.b)("inlineCode",{parentName:"p"},"componentWillUnmount"),"中，也就是",Object(a.b)("strong",{parentName:"p"},"组件被注销之前"),"清除掉我们添加的注册，否则",Object(a.b)("strong",{parentName:"p"},"内存泄漏"),"的问题就出现了。"),Object(a.b)("p",null,"怎么清除呢？让我们传给",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"的副作用函数返回一个新的函数即可。这个新的函数将会在组件下一次重新渲染之后执行。这种模式在一些pubsub模式的实现中很常见。看下面的例子："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"import { useState, useEffect } from 'react';\n\nfunction FriendStatus(props) {\n  const [isOnline, setIsOnline] = useState(null);\n\n  function handleStatusChange(status) {\n    setIsOnline(status.isOnline);\n  }\n\n  useEffect(() => {\n    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);\n    // 一定注意下这个顺序：告诉react在下次重新渲染组件之后，同时是下次调用ChatAPI.subscribeToFriendStatus之前执行cleanup\n    return function cleanup() {\n      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);\n    };\n  });\n\n  if (isOnline === null) {\n    return 'Loading...';\n  }\n  return isOnline ? 'Online' : 'Offline';\n}\n")),Object(a.b)("p",null,"这里有一个点需要重视！这种解绑的模式跟",Object(a.b)("inlineCode",{parentName:"p"},"componentWillUnmount"),"不一样。",Object(a.b)("inlineCode",{parentName:"p"},"componentWillUnmount"),"只会在组件被销毁前执行一次而已，而",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"里的函数，每次组件渲染后都会执行一遍，包括副作用函数返回的这个清理函数也会重新执行一遍。所以我们一起来看一下下面这个问题。"),Object(a.b)("h3",{id:"为什么要让副作用函数每次组件更新都执行一遍？"},"为什么要让副作用函数每次组件更新都执行一遍？"),Object(a.b)("p",null,"我们先看以前的模式："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"  componentDidMount() {\n    ChatAPI.subscribeToFriendStatus(\n      this.props.friend.id,\n      this.handleStatusChange\n    );\n  }\n\n  componentWillUnmount() {\n    ChatAPI.unsubscribeFromFriendStatus(\n      this.props.friend.id,\n      this.handleStatusChange\n    );\n  }\n")),Object(a.b)("p",null,"我们在",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount"),"注册，再在componentWillUnmount清除注册。但假如这时候",Object(a.b)("inlineCode",{parentName:"p"},"props.friend.id"),"变了怎么办？我们不得不再添加一个",Object(a.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"来处理这种情况："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"...\n  componentDidUpdate(prevProps) {\n    // 先把上一个friend.id解绑\n    ChatAPI.unsubscribeFromFriendStatus(\n      prevProps.friend.id,\n      this.handleStatusChange\n    );\n    // 再重新注册新但friend.id\n    ChatAPI.subscribeToFriendStatus(\n      this.props.friend.id,\n      this.handleStatusChange\n    );\n  }\n...\n")),Object(a.b)("p",null,"看到了吗？很繁琐，而我们但useEffect则没这个问题，因为它在每次组件更新后都会重新执行一遍。所以代码的执行顺序是这样的："),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-text"}),"1.页面首次渲染\n2.替friend.id=1的朋友注册\n\n3.突然friend.id变成了2\n4.页面重新渲染\n5.清除friend.id=1的绑定\n6.替friend.id=2的朋友注册\n...\n")),Object(a.b)("h3",{id:"怎么跳过一些不必要的副作用函数"},"怎么跳过一些不必要的副作用函数"),Object(a.b)("p",null,"按照上一节的思路，每次重新渲染都要执行一遍这些副作用函数，显然是不经济的。怎么跳过一些不必要的计算呢？我们只需要给useEffect传第二个参数即可。用第二个参数来告诉react只有当这个参数的值发生改变时，才执行我们传的副作用函数（第一个参数）。"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"useEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]); // 只有当count的值发生变化时，才会重新执行`document.title`这一句\n")),Object(a.b)("p",null,"当我们第二个参数传一个空数组","[","]","时，其实就相当于只在首次渲染的时候执行。也就是",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount"),"加",Object(a.b)("inlineCode",{parentName:"p"},"componentWillUnmount"),"的模式。不过这种用法可能带来bug，少用。"))}s.isMDXComponent=!0}}]);