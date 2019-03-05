module.exports = {
    plugins: {
        'autoprefixer': {},
        'postcss-pxtorem': {
            'rootValue': 75,
            'propList': ['*', '!border*'],
            'selectorBlackList': ['vux-', 'vjs-', 'video-', 'noToRem'],
            'replace': true,
            'mediaQuery': false,
            'minPixelValue': 0
        }
    }
}
