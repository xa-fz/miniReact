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