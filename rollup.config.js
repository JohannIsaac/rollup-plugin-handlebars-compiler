import nodeResolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import mv from "rollup-plugin-mv";

const CONFIG_TEMPLATE = {
    input: 'lib/index.ts',
    plugins: [
        nodeResolve(),
        commonJS()
    ]
}

const ALT_CONFIG = {
    output: [
        {
            file: `dist/cjs.js`,
            format: 'cjs'
        }
    ],
    plugins: [
        typescript()
    ]
}

const MAIN_CONFIG = {
    output: {
        file: `dist/es.js`,
        format: 'es'
    },
    plugins: [
        typescript({
            declaration: true,
            declarationDir: "types"
        }),
        mv([
            {
                src: `dist/cjs.js`,
                dest: `dist/cjs/index.js`,
                overwrite: true,
            },
            {
                src: `dist/es.js`,
                dest: `dist/es/index.js`,
                overwrite: true,
            },
            {
                src: `dist/types/index.d.ts`,
                dest: `types/index.d.ts`,
                overwrite: true,
            }
        ])
    ]
}

function configs() {
    let configs = {}
    configs.others = Object.assign({}, ALT_CONFIG)
    configs.main = Object.assign({}, MAIN_CONFIG)

    configs.others = Object.assign({}, CONFIG_TEMPLATE, configs.others)
    configs.main = Object.assign({}, CONFIG_TEMPLATE, configs.main)
    configs.others.plugins.push(...CONFIG_TEMPLATE.plugins)
    configs.main.plugins.push(...CONFIG_TEMPLATE.plugins)

    let parsedConfigs = []
    parsedConfigs.push(configs.others)
    parsedConfigs.push(configs.main)

    return parsedConfigs
}

export default configs()