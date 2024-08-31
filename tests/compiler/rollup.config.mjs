import nodeResolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { fileURLToPath } from 'url';
const filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filepath)
const relative = path.relative(process.cwd(), __dirname)

export default {
	input: path.join(__dirname, './generate-runtime-test-files.ts'),
	output: {
		file: path.join(relative, 'generate-runtime-test-files.cjs'),
		format: 'cjs'
	},
    plugins: [
        typescript({
            declaration: false,
            module: 'ES2020',
        }),
        nodeResolve(),
        commonJS(),
    ]
};