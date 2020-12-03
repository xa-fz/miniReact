import React from './react';
import ReactDOM from './react-dom';
import './index.css';

// jsx实则代码解析为react.createElement(???)
const jsx = (
    <div>
        <h1 className="border">Mini React</h1>
    </div>
)

console.log('jsx:', jsx);

ReactDOM.render(jsx, document.getElementById('root'));