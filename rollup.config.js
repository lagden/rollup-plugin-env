'use strict'

const config = [
	{
		input: 'src/env.js',
		output: [
			{
				file: 'dist/index.js',
				format: 'es',
				sourcemap: true,
				strict: false
			}, {
				file: 'dist/index.cjs.js',
				format: 'cjs',
				exports: 'default',
				sourcemap: true,
				strict: false
			}
		]
	}
]

export default config
