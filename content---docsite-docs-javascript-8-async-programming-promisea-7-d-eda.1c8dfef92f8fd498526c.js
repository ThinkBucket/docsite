(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{204:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));r(0);var o=r(396);function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s={title:"Promise",sidebar_label:"Promise"},c=[{value:"使用promise的原因",id:"使用promise的原因",children:[]},{value:"promise的三种状态",id:"promise的三种状态",children:[]},{value:"promise语法：",id:"promise语法：",children:[]},{value:"Promise.prototype.then(onFulfilled, onRejected)",id:"promiseprototypethenonfulfilled-onrejected",children:[{value:"promise.then()的注意事项：",id:"promisethen的注意事项：",children:[]},{value:"注意promise和setTimeOut()的优先级：",id:"注意promise和settimeout的优先级：",children:[]},{value:"promise.then()与微任务：",id:"promisethen与微任务：",children:[]}]},{value:"Promise.prototype.catch(onRejected)",id:"promiseprototypecatchonrejected",children:[{value:"catch()的注意事项；",id:"catch的注意事项；",children:[]}]},{value:"Promise.prototype.all(iterable)",id:"promiseprototypealliterable",children:[{value:"Promise.all()的注意事项",id:"promiseall的注意事项",children:[]}]},{value:"Promise.prototype.race(iterable)",id:"promiseprototyperaceiterable",children:[{value:"promise.race 手动实现",id:"promiserace-手动实现",children:[]}]},{value:"创建已处理的Promise",id:"创建已处理的promise",children:[{value:"Promise.resolve(value)",id:"promiseresolvevalue",children:[]},{value:"Promise.reject(reason)",id:"promiserejectreason",children:[]}]}],i={rightToc:c},a="wrapper";function p(e){var n=e.components,r=l(e,["components"]);return Object(o.b)(a,t({},i,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"使用promise的原因"},"使用promise的原因"),Object(o.b)("p",null,"解决回调函数多层嵌套，让异步方法可以像同步方法那样返回值，使代码更易读。"),Object(o.b)("h2",{id:"promise的三种状态"},"promise的三种状态"),Object(o.b)("p",null,"pending: 初始状态，既不是成功，也不是失败状态。"),Object(o.b)("p",null,"fulfilled: 意味着操作成功完成。"),Object(o.b)("p",null,"rejected: 意味着操作失败。"),Object(o.b)("h2",{id:"promise语法："},"promise语法："),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"new Promise( function(resolve, reject) {...} /* executor */  );\n")),Object(o.b)("p",null,"promise参数 executor"),Object(o.b)("p",null,"executor执行器函数包括两个参数resolve 和 reject，",Object(o.b)("inlineCode",{parentName:"p"},"Promise构造函数执行时会立即调用exector函数（宏任务同步操作）"),"，resolve 和 reject函数会被当作参数传给exector函数。exector函数一般会执行一些异步函数，异步函数调用的成功和失败分别调用resolve函数和reject函数，将promise状态分别转为fulfiled和rejected状态。"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"eg:")),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'function myAsyncFunction(url) {\n  return new Promise((resolve, reject) => {\n    const xhr = new XMLHttpRequest();\n    xhr.open("GET", url); // 通过url建立链接\n    xhr.onload = () => resolve(xhr.responseText); //接收到完整响应数据时触发\n    xhr.onerror = () => reject(xhr.statusText); //请求发生错误的时候触发。\n    xhr.send();\n  });\n};\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"代码中的onload，onerror属于W3C规范中进度事件.进度事件规范定义了与客户端与服务器通信相关的一系列事件，这些事件监听了通信进程中的各个关键节点，使我们能够以更细的颗粒度掌控数据传输过程中的细节。"),Object(o.b)("h3",t({parentName:"blockquote"},{id:"promise在事件轮循的注意事项："}),"promise在事件轮循的注意事项：")),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"new Promise(function(resolve, reject){\n    console.log('hello');\n    resolve(24);\n    console.log('world');\n}).then(value => console.log(value));\nconsole.log('number');\n/*\nhello\nworld\nnumber\n24\n*/\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Promise本身是同步的立即执行函数"),"，在执行到resolve()的时候属于异步操作，会把参数传给.then(),并将它放到微任务异步队列里。所以当executor函数中执行完同步操作后，console.log('number')被放到函数调用栈，调用栈的宏观同步任务执行完后，会去微任务队列里取微任务到调用栈。"),Object(o.b)("h2",{id:"promiseprototypethenonfulfilled-onrejected"},"Promise.prototype.then(onFulfilled, onRejected)"),Object(o.b)("p",null,"当new Promise((resolve,reject) => resolve())的时候对应执行then操作，代表Promise的成功状态(fulfilled)。"),Object(o.b)("p",null,"当Promise变成接受状态（fulfilled）时，onFulfilled参数作为回调函数被调用。"),Object(o.b)("p",null,"当Promise变成拒绝状态（rejected ）时，onRejected参数作为回调函数被调用。此时等价与.catch()功能"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"var p = new Promise((resolve, reject) => {\n    resolve('foo')\n})\n\n// 'bar' 不是函数，会在内部被替换为 (x) => x\np.then('bar').then((value) => {\n    console.log(value) // 'foo'\n})\n")),Object(o.b)("p",null,".then()的参数如果只有一个字符串的话，此时可以忽略这个参数。\n.then(String) <=> .then((value) => value) 其中value代表Promise的返回值。"),Object(o.b)("h3",{id:"promisethen的注意事项："},"promise.then()的注意事项："),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"Promise.resolve()\n  .then( () => {\n    // 使 .then() 返回一个 rejected promise\n    throw 'Oh no!';\n  })\n  .catch( reason => {\n    console.error( 'onRejected function called: ', reason );\n  })\n  .then( () => {\n    console.log( \"I am always called even if the prior then's promise rejects\" );\n  });\n")),Object(o.b)("p",null,"当promise.then()返回的状态是rejected promise 的时候这个时候会被catch()捕获，\n这时候只要catch中不返回rejected。此时都会执行后面的then操作。"),Object(o.b)("h3",{id:"注意promise和settimeout的优先级："},"注意promise和setTimeOut()的优先级："),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'Promise.resolve("foo")\n  // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个resolve返回。\n  .then(function(string) {\n    return new Promise(function(resolve, reject) {\n      setTimeout(function() {\n        string += \'bar\';\n        resolve(string);\n      }, 1);\n    });\n  })\n  // 2. 接收 "foobar", 放入一个异步函数中处理该字符串\n  // 并将其打印到控制台中, 但是不将处理后的字符串返回到下一个。\n  .then(function(string) {\n    setTimeout(function() {\n      string += \'baz\';\n      console.log(string);\n    }, 1)\n    return string;\n  })\n  // 3. 打印本节中代码将如何运行的帮助消息，\n  // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。\n  .then(function(string) {\n    console.log("Last Then:  oops... didn\'t bother to instantiate and return " +\n                "a promise in the prior then so the sequence may be a bit " +\n                "surprising");\n\n    // 注意 `string` 这时不会存在 \'baz\'。\n    // 因为这是发生在我们通过setTimeout模拟的异步函数中。\n    console.log(string);\n});\n')),Object(o.b)("p",null,"第一个then()方法中返回了一个新定义的Promise对象，等待1ms后返回一个promiseValue为foobar的值和fulfiled状态。此时执行下一个then(),把foobar传给浏览器定时器API，然后将它放入宏任务异步队列中，return string进入函数调用栈，将值传给下一个then(),此时将then()中的onFulfilled函数放入微任务队列中，此时调用栈为空。微任务队列中只有第三个.then()的内容，将微任务队列清空，将其中的同步代码放入调用栈，打印两个console.log()语句到控制台。最后执行宏任务队列中的setTimeOut()的回调函数。"),Object(o.b)("h3",{id:"promisethen与微任务："},"promise.then()与微任务："),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"new Promise(resolve => {\n  resolve();\n}).then(() => {\n  new Promise(resolve => {\n      resolve();\n  }).then(() => {\n        console.log(777);\n    })\n    .then(() => {\n        console.log(888);\n    })\n    .then(() => {\n        console.log(999);\n    });\n  }).then(() => {\n      console.log(666);\n  })\n  .then(() => {\n      console.log(555);\n  });\n")),Object(o.b)("p",null,"执行第3行then,then里面是函数，直接调用，执行里面的 new Promise,将后面6-14行 放到微任务队列。函数执行完返回一个undefined，此时将15行以后放入微任务队列。从队头取第6行.then,执行第7行输出 777， 将9行到14行放到队尾。此时队头是第15行执行输出666，将18行以后放到队尾。此时执行队头是第9行，输出888，将12行到14放入队尾，此时18行的then是队头，输出555，最后执行12-14行输出999"),Object(o.b)("h2",{id:"promiseprototypecatchonrejected"},"Promise.prototype.catch(onRejected)"),Object(o.b)("p",null,"当返回一个rejected promise的时候，或者throw出一个错，此时会被catch()捕获"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"var p1 = new Promise(function(resolve, reject) {\n  throw 'Uh-oh!';\n}).catch();\n<=>\nvar p1 = new Promise(function(resolve, reject) {\n return Promise.reject('Uh-oh!');\n}).catch();\n")),Object(o.b)("h3",{id:"catch的注意事项；"},"catch()的注意事项；"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"// 在异步函数中抛出的错误不会被catch捕获到\nvar p2 = new Promise(function(resolve, reject) {\n  setTimeout(function() {\n    throw 'Uncaught Exception!';\n  }, 1000);\n});\n\np2.catch(function(e) {\n  console.log(e); // 不会执行\n});\n\n// 在resolve()后面抛出的错误会被忽略\nvar p3 = new Promise(function(resolve, reject) {\n  resolve();\n  throw 'Silenced Exception!';\n});\n\np3.catch(function(e) {\n   console.log(e); // 不会执行\n});\n\n\n")),Object(o.b)("p",null,"在异步函数中抛错之所以无法被catch到的原因是：new Promise是同步的立即执行函数，执行到setTimeout函数，将它放到宏任务异步队列中，宏任务异步队列的执行优先级最低。只有当微任务异步队列和函数调用栈队列为空时才会调用。当setTimeout函数执行时，外部已经没有代码可以接到它所抛出的错误。所以异步回调函数抛出的错总是因为函数调用栈为空，没有代码可以承接错误而导致无法被捕获到。"),Object(o.b)("h2",{id:"promiseprototypealliterable"},"Promise.prototype.all(iterable)"),Object(o.b)("p",null,"当promise.all()内没有参数的时候，返回一个已完成状态的promise。"),Object(o.b)("p",null,"如果所有传入的 promise 都变为完成状态，或者传入的可迭代对象内没有 promise，Promise.all 返回的 promise 异步地变为完成。"),Object(o.b)("p",null,"在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组"),Object(o.b)("p",null,"如果传入的 promise 中有一个失败（rejected），promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成。"),Object(o.b)("h3",{id:"promiseall的注意事项"},"Promise.all()的注意事项"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"const p1 = new Promise((resolve, reject) => {\n  resolve('hello');\n})\n.then(result => result)\n.catch(e => e);\n\nconst p2 = new Promise((resolve, reject) => {\n  throw new Error('报错了');\n})\n.then(result => result)\n.catch(e => e);\n\nPromise.all([p1, p2])\n.then(result => console.log(result))\n.catch(e => console.log(e));\n// [\"hello\", Error: 报错了]\n\n")),Object(o.b)("p",null,"当p1执行成功状态变为resolved，p2执行的时候会出错跳到catch()，执行完状态也会变为resolved，所以Promise.all()可以正常执行。"),Object(o.b)("p",null,"如果p2没有catch的化，状态还是rejected，此时的Promise.all()不会执行。"),Object(o.b)("p",null,"Promise.all()代码实现: ",Object(o.b)("a",t({parentName:"p"},{href:"https://ustc-han.github.io/2019/04/22/promise.all()%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0/"}),"https://ustc-han.github.io/2019/04/22/promise.all()%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0/")),Object(o.b)("h2",{id:"promiseprototyperaceiterable"},"Promise.prototype.race(iterable)"),Object(o.b)("p",null,"Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，就会返回一个解决状态或拒绝状态的promise。简言之，以最先返回结果的promise的状态为准。"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'var p3 = new Promise(function(resolve, reject) { \n    setTimeout(resolve, 100, "three");\n});\nvar p4 = new Promise(function(resolve, reject) { \n    setTimeout(reject, 500, "four"); \n});\n\nPromise.race([p3, p4]).then(function(value) {\n  console.log(value); // "three"\n  // p3 更快，所以它完成了\n}, function(reason) {\n  // 未被调用\n});\n')),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"var promise1 = new Promise(function(resolve, reject) {\n    setTimeout(resolve, 500, 'one');\n});\n\nvar promise2 = new Promise(function(resolve, reject) {\n    setTimeout(resolve, 100, 'two');\n});\n\nPromise.race([promise1, promise2]).then(function(value) {\n  console.log(value);\n  // Both resolve, but promise2 is faster\n});\n// expected output: \"two\"\n\n")),Object(o.b)("h3",{id:"promiserace-手动实现"},"promise.race 手动实现"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"function promiseRace(promises) {\n return new Promise(function(resolve, reject) {\n   if (Arr.isArray(promise)) {\n       for (let item of promises) {\n       Promise.resolve(item).then(function(value) {\n          return resolve(value)\n       }, function(reason) {return reject(reason)});\n   }\n   }\n })\n}\n")),Object(o.b)("h2",{id:"创建已处理的promise"},"创建已处理的Promise"),Object(o.b)("h3",{id:"promiseresolvevalue"},"Promise.resolve(value)"),Object(o.b)("p",null,"value的值分多种情况，当value的值是Promise，此时Promise.resolve()不起作用，返回的promise状态和value的最后状态保持一致。当value是thenable（带有then方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态。其它情况返回成功状态的promise。"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"Promise.resolve(value);\nPromise.resolve(promise);\nPromise.resolve(thenable);\n")),Object(o.b)("p",null,"thenable函数使用第一参数函数返回一个成功状态的promise,使用第二个参数函数返回一个失败的promise。"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'var p1 = Promise.resolve({ \n  then: function(test, rej) { rej("rejected!"); }\n});\nconsole.log(p1 instanceof Promise) // true, 这是一个Promise对象\n\np1.then(function(v) {\n    console.log(v); \n  }, function(e) {\n    console.log(e) //rejected\n})\n')),Object(o.b)("h3",{id:"promiserejectreason"},"Promise.reject(reason)"),Object(o.b)("p",null,"Promise.reject返回一个被拒绝的Promise对象，\n参数代表被拒绝的原因。"),Object(o.b)("p",null,"Promise.reject(reason).catch((reason) => ...);"))}p.isMDXComponent=!0},396:function(e,n,r){"use strict";r.d(n,"a",(function(){return c})),r.d(n,"b",(function(){return u}));var o=r(0),t=r.n(o),l=t.a.createContext({}),s=function(e){var n=t.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},c=function(e){var n=s(e.components);return t.a.createElement(l.Provider,{value:n},e.children)};var i="mdxType",a={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},p=Object(o.forwardRef)((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(r[o]=e[o]);return r}(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,m=p[c+"."+u]||p[u]||a[u]||l;return r?t.a.createElement(m,Object.assign({},{ref:n},i,{components:r})):t.a.createElement(m,Object.assign({},{ref:n},i))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=p;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[i]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<l;u++)s[u]=r[u];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);