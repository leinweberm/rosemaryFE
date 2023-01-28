<template>
	<div class="pageBody softWhiteBG heroBaner" :name="$t('meta.backgroundImage')">
		<title>{{ $t('authorBioTitle') }}</title>
		<div style="position: absolute; top: 80%; text-align: center">
			<h1
				class="softWhite"
				style="font-size: 50px; font-family: Open Sans; font-weight: 800;"
				:name="$t('meta.authorInitials')"
			>
				{{ $t('authorBio') }}
			</h1>
			<h2
				class="softWhite"
				style="font-size: 30px; font-family: Open Sans; font-weight: 500;"
				:name="$t('meta.authorDescription')"
			>
				{{ $t('authorDescription') }}
			</h2>
		</div>
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
	head() {
		return {
			title: this.$t('authorBioTitle'),
			htmlAttrs: {
				lang: this.$i18n.locale,
			}
		};
	},
	created() {
	},
	methods: {
	},
};
</script>
