// __dirname 是nodeJS的全局变量，指代当前脚本目录
module.exports = {
    devtool: 'eval-source-map', // 生成source-map
    entry: __dirname + "/lib/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugin("this is a 假装的 js 声明， ��")
    ]

}