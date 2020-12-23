const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"main.js"
    },
    mode: 'development',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader:'babel-loader',
                options:{
                    presets: [
                        [ "@babel/preset-react",
                            {
                                "pragma": "React.createElementText", // default pragma is React.createElement
                            }
                        ]
                    ],
                }
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']  // 从右到左执行，所以注意顺序
            }
        ]
    },
    plugins:[new htmlWebpackPlugin({
        template:path.join(__dirname,'./public/index.html'),
        filename: 'index.html'
    })
    ],
}