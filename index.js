'use strict'

const ripemdRegExps = {
	128: '[a-f0-9]{32}',
	160: '[a-f0-9]{40}',
	256: '[a-f0-9]{64}',
	320: '[a-f0-9]{80}'
}

function buildRegExp(bodyExp, options) {
	let beginning = '\\b(?:'
	let end = ')\\b'
	if (options && options.exact) {
		beginning = '^('
		end = ')$'
	}

	const regExp = beginning + bodyExp + end
	if (options && options.exact) {
		return new RegExp(regExp)
	}

	return new RegExp(regExp, 'g')
}

const ripemdRegex = options => {
	const individualRegExps = []
	for (const version in ripemdRegExps) {
		const oneRegExp = '(?:' + ripemdRegExps[version] + ')'
		individualRegExps.push(oneRegExp)
	}

	const bodyExp = individualRegExps.join('|')
	return buildRegExp(bodyExp, options)
}

ripemdRegex.version = (version, options) => {
	if (!ripemdRegExps[version]) {
		throw new Error('Invalid hash version')
	}

	const bodyExp = ripemdRegExps[version]
	return buildRegExp(bodyExp, options)
}

module.exports = ripemdRegex
