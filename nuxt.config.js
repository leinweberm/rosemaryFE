export default {
	head: {
		title: 'Rosemary maluje',
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

	css: [
		'~/assets/style/global.css',
		'~/assets/style/page.css',
		'~/assets/style/modal.css',
		'~/assets/style/admin.css',
	],

	plugins: [
	],

	components: true,

	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources',
	],

	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/axios',
		'@nuxtjs/auth',
	],

	styleResources: {
		scss: [
			'~/assets/style/global.scss',
		],
	},

	axios: {
		baseURL: 'http://localhost:3000/api',
	},

	i18n: {
		strategy: 'prefix',
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

	serverMiddleware: {
		'/api': '~/api'
	},

	target: 'server',

	auth: {
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
				},
				endpoints: {
					login: { url: '/login', method: 'post', propertyName: 'token' },
					logout: { url: '/logout', method: 'post' },
					user: false,
				}
			}
		}
	},

	build: {
		use: '@nuxtjs/vercel-builder',
		distDir: 'dist'
	},
};
