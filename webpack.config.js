const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: __dirname + '/src/index.ts',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                // 需要用到的 loader
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 指定輸出位置
            // [name] 為上方進入點設定的 "名稱"
            filename: './css/[name].css',
        }),
    ],
};
