# miniReact
react源码学习&手写一个简单的react及其特性

## react
源码路径：
react/packages/react/src/React.js
React.createElement：react/packages/react/src/ReactElement.js

createElement()接收三个参数：type, config, children，作用就是返回标签的类型
和需要传递的属性和子元素；

React 中实际使用到的属性只有 props 和 state；

## react-dom

render就是将createElement创建的虚拟DOM转化为真实的DOM并挂载在需要的DOM节点中；

react-dom/index.js实现了原生标签和文本的挂载

过程解析：
首先加载jsx虚拟dom时会执行react.js中的createElement方法，作用就是解析jsx

1. src/index.js中使用render方法，传入虚拟dom：jsx和要挂载的根节点：root
ReactDOM.render(jsx, document.getElementById('root'));

进入react-dom/index.js文件
2. 将虚拟节点jsx使用createDOMNode()方法进行处理，解构了虚拟节点vnode，因为通过react
    2.1 返回的虚拟dom中，有两个值，一个是type是标签或者文本类型，props是子元素children[]、一些传递的属性例如：id，className
    和虚拟节点的值nodeValue等；
    2.2 这里我的得到的虚拟节点：最外层是div类型，props只有children，没有传递的属性；
    2.3 我们展开第一层children发现，第二层是h1类型，并在props中有属性className：“border”，children中则是最里层的文本也就是
    react中声明的h1标签中的子元素：mini React，这时children为空数组，type类型是TEXT；
3. 判断节点类型是文本还是原生的标签类型，然后分别处理：
    3.1 如果是文本类型，也就是type === 'TEXT'时，使用document.createTextNode方法，将文本类型的值也就是nodeValue创建文本节点；
    3.2 如果是标签类型，也就是type === 'string'时，使用document.createElement方法，将标签类型type创建为标签元素；
    3.3 处理后得到的node，也就是真实节点，返回给render，然后appendChild插入根节点中，第一次插入的时最外层的元素，下面我们需要处理children中的节点；
4. 通过打印可以看到虚拟dom是逐个传入的，我们写的jsx可以得到三组数据（line11），实际上他是循环children得到的三组数据：
    4.1 遍历虚拟dom中的children，这个循环可以这理解，将上一次的节点作为这一次的根节点，循环上一次的逻辑，也就是将下一层的children插入到上一层的节点中，直至虚拟dom中的节点处理完毕；
    
这样就实现了render方法，将虚拟dom处理为真实dom；