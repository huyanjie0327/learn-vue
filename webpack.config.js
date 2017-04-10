module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=[name].[ext]?[hash]'
            },
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
        }
    },
}
