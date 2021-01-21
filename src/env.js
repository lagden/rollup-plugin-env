'use strict'

function envs(ns, envs) {
	envs = JSON.stringify(envs ?? {})
	return {
		name: 'envs',
		intro: () => `
globalThis.process = globalThis.process ?? {}
globalThis.process.env = globalThis.process.env ?? {}
globalThis.process.env['${ns}'] = {}
for (const [k, v] of Object.entries(${envs})) {
	globalThis.process.env['${ns}'][k] = v
}
`
	}
}

export default envs
