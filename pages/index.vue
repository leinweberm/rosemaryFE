<template>
	<div class="pageBody">
		{{ $t('menu.authorName') }}
		<nuxt-link :to="switchLocalePath('cs')">
			{{ 'CZECH' }}
		</nuxt-link>
		<nuxt-link :to="switchLocalePath('en')">
			{{ 'ENGLISH' }}
		</nuxt-link>
		<button @click="setLocale('cs')">CZECH</button>
		<button @click="setLocale('en')">ENGLISH</button>
	</div>
</template>

<script>
import page from "~/mixins/page.js"
export default {

	name: 'IndexPage',
	mixins: [
		page,
	],
	layout: 'default',
	data() {
		return {
			locale: null,
		};
	},
	created() {
		console.log('locale', this.$i18n.locale);
	},
	methods: {
	},
};
</script>
