/**
 * 
 * @param {string} type 传入标签的类型
 * @param {object} config 标签上的属性对象,例如属性：id或者class
 * @param  {...obj} children 标签中间的子元素
 */
function createElement(type, config, ...children) {
    console.log(arguments, type, config, children);
    const  props = {
        ...config,
        children:children.map((child)=>typeof child ==='object'?child:createElementText(child))
    }
    return { type, props }
}

function createElementText(child) {
    return{
        type:"TEXT",
        props:{
            children:[],
            nodeValue:child
        }
    }
}

const React = {
    createElement
}

export default React