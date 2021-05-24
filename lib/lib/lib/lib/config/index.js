const config = {
    projectName: 'Ionic.Shop',
    date: '2020-12-17',
    designWidth: 750,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [],
    defineConstants: {},
    copy: {
        patterns: [],
        options: {}
    },
    framework: 'react',
    mini: {
        postcss: {
            pxtransform: {
                enable: true,
                config: {}
            },
            url: {
                enable: true,
                config: {
                    limit: 1024 // 设定转换尺寸上限
                }
            },
            cssModules: {
                enable: false,
                config: {
                    namingPattern: 'module',
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        postcss: {
            autoprefixer: {
                enable: true,
                config: {}
            },
            cssModules: {
                enable: false,
                config: {
                    namingPattern: 'module',
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    }
};
module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'));
    }
    return merge({}, config, require('./prod'));
};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map