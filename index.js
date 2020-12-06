'use strict';

module.exports = {
	extends: `eslint:all`,
	env: {
		browser: true,
		node: true
	},
	parser: `babel-eslint`,
	parserOptions: {
		ecmaVersion: 8,
		sourceType: `module`
	},
	rules: {
		'arrow-body-style': `off`,
		'array-element-newline': [
			`error`,
			`consistent`
		],
		'callback-return': `off`,
		'capitalized-comments': [
			`error`,
			`always`,
			{
				ignoreConsecutiveComments: true,
				ignoreInlineComments: true
			}
		],
		'dot-location': [
			`error`,
			`property`
		],
		'function-call-argument-newline': [
			`error`,
			`never`
		],
		'global-require': `off`,
		'id-length': [
			`error`,
			{
				exceptions: [
					`i`
				]
			}
		],
		indent: [
			`error`,
			`tab`
		],
		'line-comment-position': `off`,
		'max-len': [
			`error`,
			120
		],
		'max-statements': `off`,
		'multiline-comment-style': [
			`error`,
			`separate-lines`
		],
		'multiline-ternary': [
			`error`,
			`never`
		],
		'no-console': [
			`warn`,
			{
				allow: [
					`warn`,
					`error`
				]
			}
		],
		'no-inline-comments': `off`,
		'no-magic-numbers': [
			`error`,
			{
				ignore: [
					-1,
					0,
					1
				]
			}
		],
		'no-param-reassign': `off`,
		'no-plusplus': `off`,
		'no-process-env': `off`,
		'no-process-exit': `off`,
		'no-tabs': [
			`error`,
			{
				allowIndentationTabs: true
			}
		],
		'no-ternary': `off`,
		'no-underscore-dangle': `off`,
		'object-curly-spacing': [
			`error`,
			`always`
		],
		'object-property-newline': [
			`error`,
			{
				allowAllPropertiesOnSameLine: true
			}
		],
		'one-var': [
			`error`,
			`never`
		],
		'quote-props': [
			`error`,
			`as-needed`
		],
		quotes: [
			`error`,
			`single`
		],
		'padded-blocks': [
			`error`,
			`never`
		],
		'prefer-named-capture-group': `off`,
		'require-unicode-regexp': `off`,
		semi: [
			`error`,
			`always`
		],
		'space-before-function-paren': [
			`error`,
			{
				anonymous: `always`,
				named: `never`,
				asyncArrow: `always`
			}
		]
	},
	overrides: [
		{
			files: [
				`gulpfile.js/index.js`
			],
			parserOptions: {
				sourceType: `script`
			},
			rules: {
				strict: [
					`error`,
					`global`
				]
			}
		}
	]
};
