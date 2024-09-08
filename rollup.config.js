import nodeResolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

const IS_DEVELOPMENT = process.env.BUILD === 'development'

const CONFIG_TEMPLATE = {
    external: [
        'handlebars',
        '@web/parse5-utils',
        'parse5',
        'picomatch',
        'js-beautify'
    ],
    input: 'lib/index.ts',
    plugins: [
        nodeResolve(),
        commonJS(),
        json()
    ]
}

const MAIN_CONFIG = {
    output: [
        {
            dir: `dist/es`,
            format: 'es'
        },
        {
            dir: `dist/cjs`,
            format: 'cjs',
            entryFileNames: '[name].cjs',
        }
    ],
    plugins: [
        typescript({
            declaration: false
        })
    ]
}

const DECLARATION_CONFIG = {
    // Dummy output to be deleted
    output: {
        dir: `dist/types`,
        format: 'es'
    },
    plugins: [
        typescript({
            declaration: true,
            declarationDir: "./dist/types",
            include: [
                "lib/**"
            ]
        })
    ]
}

const TYPES_CONFIG = {
    input: './dist/types/index.d.ts',
    output: [{ file: 'types/index.d.ts', format: 'es' }],
    plugins: [
        dts(),
        del({ hook: "buildEnd", targets: "./dist/types" })
    ],
}

function configs() {
    let configs = {}
    configs.others = Object.assign({}, CONFIG_TEMPLATE, MAIN_CONFIG)
    configs.declaration = Object.assign({}, CONFIG_TEMPLATE, DECLARATION_CONFIG)
    configs.type = Object.assign({}, TYPES_CONFIG)

    configs.others.plugins.push(...CONFIG_TEMPLATE.plugins)
    configs.declaration.plugins.push(...CONFIG_TEMPLATE.plugins)

    let parsedConfigs = []
    parsedConfigs.push(configs.others)
    !IS_DEVELOPMENT && parsedConfigs.push(configs.declaration)
    !IS_DEVELOPMENT && parsedConfigs.push(configs.type)

    return parsedConfigs
}

export default configs()