'use strict'

function envs(ns, options = {}) {
	options = JSON.stringify(options)
	return {
		name: 'envs',
		intro: () => `
globalThis.process = globalThis.process ?? {}
globalThis.process.env = globalThis.process.env ?? {}
globalThis.process.env['${ns}'] = {}
for (const [k, v] of Object.entries(${options})) {
	globalThis.process.env['${ns}'][k] = v
}
`
	}
}

export default envs
