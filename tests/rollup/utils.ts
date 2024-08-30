import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import handlebars from '../../dist/es';

import { OutputChunk, OutputOptions, rollup, RollupBuild, RollupOptions } from 'rollup';
import path from 'path';

export async function generateBundle(buildData: Build) {
    const { inputOptions } = buildData
	let bundle: RollupBuild | null;

    let error = null
	try {
		bundle = await rollup(inputOptions);
	} catch (e) {
		error = e
	}
    return { bundle, error}
}

export async function generateOutputs(bundle: RollupBuild, buildData: Build, toWriteFile = false) {
    const { outputOptionsList } = buildData
    const outputs = []
	for (const outputOptions of outputOptionsList) {
		const { output } = await bundle.generate(outputOptions);

		for (const chunkOrAsset of output) {
            const { code } = chunkOrAsset as OutputChunk
            outputs.push(code)
		}
        if (toWriteFile) {
            const inputName = buildData.inputOptions.input as string
            const basename = path.basename(inputName)
            const outputFile = outputOptions.dir
            try {
                bundle.write(outputOptions)
                console.log('\x1b[36mGenerated', `${path.join(outputFile, basename)}\x1b[0m`)
            } catch (e) {
                console.error('Could not write', outputFile)
            }
            console.log("\n")
        }
        if (bundle) {
            bundle.close()
        }
	}
    return outputs
}

type Build = {
    inputOptions: RollupOptions,
    outputOptionsList: OutputOptions[]
}

interface Builds {
    [key: string]: Build
}

export const BUILDS: Builds = {
    'simple': {
        inputOptions: {
            input: 'tests/rollup/src/simple.js',
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/rollup/dist',
                format: 'cjs',
            }
        ]
    },
    'invalid-syntax-error': {
        inputOptions: {
            input: 'tests/rollup/src/invalid-syntax-error.js',
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/rollup/dist',
                format: 'iife',
            }
        ]
    },
}