import babel from '@rollup/plugin-babel';

const input = 'src/index.js'

var MODE = [
    {
        fomart: 'cjs'
    },
    {
        fomart: 'esm'
    },
    {
        fomart: 'umd'
    }
]

var config = []

MODE.map((m) => {
    var conf = {
        input: input,
        output: {
            name: "react-search-params",
            file: `dist/index.${m.fomart}.js`,
            format: m.fomart,
            exports: "auto"
        },
        external: ["react", /@babel\/runtime/],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: ['@babel/transform-runtime'],
                babelHelpers: 'runtime'
            }),
        ]
    }
    config.push(conf)
})

export default [
    ...config,
]