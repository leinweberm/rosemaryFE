<template>
	<div class="navBody softBlackBG">
		<div class="navInnerBody">
			<div class="navWrapper">
				<NuxtLink
					to="/"
					class="navLink softWhite boldText"
					style="fontSize: 24px"
				>
					{{ $t('menu.authorName') }}
				</NuxtLink>
			</div>
			<div class="navWrapper">
				<NuxtLink
					to="/contact"
					class="navLink softWhite lightText"
					:click="setActivePage('contact')"
				>
					{{ $t('menu.contact') }}
				</NuxtLink>
				<NuxtLink
					to="/news"
					class="navLink softWhite lightText"
					:click="setActivePage('news')"
				>
					{{ $t('menu.news') }}
				</NuxtLink>
				<NuxtLink
					to="/gallery"
					class="navLink softWhite lightText"
					:click="setActivePage('gallery')"
				>
					{{ $t('menu.gallery') }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheNavbar',
	data() {
		return {
			activePage: null
		};
	},
	created() {
	},
	methods: {
		setActivePage(value) {
			this.activePage = value;
		}
	},
};
</script>