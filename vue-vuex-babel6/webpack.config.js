module.exports = {
    entry: {
        app: "./src/assets/js/entry.js"
    },
    output: {
        path: './build/js',
        publicPath: '/js/',
        filename: "[name].js"
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue"
        },
        modulesDirectories: ['node_modules', 'src/', 'src/assets/js/', 'src/views/', 'src/components/', 'src/directives/', 'src/filters/'],
        // require()するときに拡張子を省略可能にします
        extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js']
    },
    devServer: {
        contentBase: "./build",
    },
    module: {
         loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.js(x?)$/,
                loader: 'babel-loader?sourceMaps=true'
            }
        ]
    }
};