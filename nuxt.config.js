export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'rosemaryWeb',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/style/global.css',
		'~/assets/style/page.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/i18n',
	],

	styleResources: {
		scss: [
			'~/assets/style/global.scss',
		],
	},

	i18n: {
		locales: [
			{
				code: 'cs',
				iso: 'cs-CS',
				file: 'cs.js'
			},
			{
				code: 'en',
				iso: 'en-US',
				file: 'en.js'
			}
		],
		langDir: 'lang/',
		lazy: false,
		defaultLocale: 'cs',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			fallbackLocale: 'en',
			alwaysRedirect: false,
			redirectOn: 'root',

		},
		baseUrl: 'http://localhost:3000/',
		vueI18n: {
			legacy: false,
			locale: 'cs',
		}
	},

	serverMiddleware: [
		{ path: '/', handler: '~/server-middleware/routes.js'}
	],

	target: 'server',

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};