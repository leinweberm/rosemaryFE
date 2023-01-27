<template>
	<div class="pageBody">
		{{ $t('menu.authorName') }}
		{{ $t('menu.news') }}
		{{ $t('menu.news') }}
		{{ $t('menu.news') }}
		{{ $t('menu.news') }}
		{{ $t('menu.news') }}
		<nuxt-link :to="switchLocalePath('cs')">{{ $t('languages.cs') }}</nuxt-link>
		<nuxt-link :to="switchLocalePath('en')">{{ $t('languages.en') }}</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	layout: 'default',
	data() {
		return {
		};
	},
	created() {
	},
	methods: {
	},
};
</script>
