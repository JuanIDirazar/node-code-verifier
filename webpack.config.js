const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
    // Determina el modo basado en la variable de entorno `NODE_ENV`
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: {
            index: './index.ts',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: '/',
        },
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            },
            extensions: ['.ts', '.js']
        },
        externals: [nodeExternals()],
        devtool: isProduction ? false : 'source-map', // No source maps en producción
    };
};
