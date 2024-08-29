import nodeResolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs';

import handlebars from '../../dist/es/index.js'

export default {
	input: 'tests/rollup/index.js',
	output: {
<<<<<<< HEAD
		file: 'tests/rollup/dist/index.js',
=======
		file: 'tests/rollup//dist/topbar.js',
>>>>>>> main
		format: 'iife'
	},
    watch: {
        include: 'src/**'
    },
    plugins: [
        nodeResolve(),
        commonJS(),
        handlebars(),
    ]
};