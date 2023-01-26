<template>
	<div class="pageBody">
		{{ $t('menu.news') }}
	</div>
</template>

<script>
import page from "~/mixins/page.js"
export default {
	name: 'NewsPage',
	mixins: [
		page,
	],
	layout: 'default',
	data() {

	},
	created() {
		console.log('locale', this.locale);
		console.log('i18n locale', this.$i18n.locale);
	},
};
</script>
