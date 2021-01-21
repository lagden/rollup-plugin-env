'use strict'

import {rollup}from 'rollup'
import envs from '../src/env'

async function _code(bundle) {
	const {output: [{code}]} = await bundle.generate({
		format: 'es'
	})
	return code
}

test('options', async () => {
	const bundle = await rollup({
		input: '__fixtures__/in.js',
		plugins: [
			envs('test', {
				foo: 'bar'
			})
		]
	})

	const code = await _code(bundle)
	expect(code).toMatchSnapshot()
})

test('no options', async () => {
	const bundle = await rollup({
		input: '__fixtures__/in.js',
		plugins: [
			envs('test')
		]
	})

	const code = await _code(bundle)
	expect(code).toMatchSnapshot()
})
