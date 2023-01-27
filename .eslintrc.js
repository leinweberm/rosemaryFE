module.exports = {
	root: true,
	env: {
		browser: true,
		'jest/globals': true,
		node: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
	},
	extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
	plugins: ['jest'],
	// add your custom rules here!
	rules: {
		'array-callback-return': 'off',
		'no-console': 'off',
		'no-const-assign': 'error',
		'dot-notation': 'error',
		'default-case': 'error',
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true,
			},
		],
		'arrow-parens': ['error', 'always'],
		indent: ['error', 'tab'],
		'max-len': ['error', { code: 140 }],
	},
};
