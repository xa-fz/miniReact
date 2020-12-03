// 将虚拟DOM转化为真实的DOM节点，并且将转化的DOM加入到根节点中
function render(vnode, container) {
    container.innerHtml = `<pre>${JSON.stringify(vnode, null, 2)}</pre>`
}

const ReactDOM = {
    render
}

export default ReactDOM