export default {
	data() {
		return {
			locale: null,
		};
	},
	computed: {

	},
	created() {
		console.log('locale', this.locale);
	},
	methods: {
		setLocale(value) {
			this.locale = value;
			this.$i18n.locale = value;
		},
	},
}