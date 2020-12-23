// 将虚拟DOM转化为真实的DOM节点，并且将转化的DOM加入到根节点中
function render(vnode, container) {
    let node = createDOMNode(vnode);
    container.appendChild(node);
}

// 处理虚拟dom节点
function createDOMNode(vnode) {
    let node;
    const { type,props } = vnode;
    console.log(vnode);
    if(type === 'TEXT'){
        //处理文本节点类型
        node = createTextNode(props.nodeValue);
    } else if(typeof type === 'string'){
        //处理原生标签节点类型
        node = createElementNode(type);
    }
    reconcileChild(props, node);
    updateNode(props, node);
    return node;
}
function createTextNode(nodeValue) {
    return document.createTextNode(nodeValue);
}
function createElementNode(type) {
   return document.createElement(type);
}

// 处理children中的节点
function reconcileChild(props,node) {
    const { children } = props;
    console.log(children);
    for(let i = 0;i < children.length; i++){
        let child = children[i];
        render (child,node)
    }
}

function updateNode(props,node) {
    for(let i in props){
        //由于 children 是子节点，所以在添加属性时要过滤掉。 
        if(i!=='children'){
            node[i] = props[i];
        }
    }
}

const ReactDOM = {
    render
}

export default ReactDOM