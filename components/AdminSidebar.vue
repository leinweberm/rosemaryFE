<template v-if="adminLoggedIn">
	<div class="sideBar softBlackBG">
		<div
			v-for="(group, gkey) in sideBarGroups"
			:key="gkey"
			class="sideBarGroup"
			:class="{ autoHeight: getGroupExpand(gkey) }"
		>
			<template v-for="item in group">
				<div
					v-if="item.type === 'div'"
					:key="item.label"
					class="sideBarButton softBlackGB softWhite"
					style="border: none"
					@click.stop="setGroupExpand(gkey)"
				>
					{{ item.label.toUpperCase() }}
				</div>
				<NuxtLink
					v-else
					:key="item.label"
					:to="localePath('contact')"
					class="sideBarButton greyBG softWhite"
				>
					{{ item.label.toUpperCase() }}
				</NuxtLink>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AdminSideBar',
	data() {
		return {
			adminLoggedIn: true,
			pages: false,
			paintings: false,
			exit: false,
			sideBarGroups: {
				pages: [
					{ label: this.$t('admin.pages'), type: 'div', link_to: null },
					{ label: this.$t('menu.home'), type: 'nuxt-link', link_to: 'home' },
					{ label: this.$t('menu.contact'), type: 'nuxt-link', link_to: 'contact' },
					{ label: this.$t('menu.news'), type: 'nuxt-link', link_to: 'news' },
					{ label: this.$t('menu.gallery'), type: 'nuxt-link', link_to: 'gallery' },
					{ label: this.$t('menu.footer'), type: 'nuxt-link', link_to: 'footer' },
				],
				paintings: [
					{ label: this.$t('admin.paintings'), type: 'div', link_to: null },
					{ label: this.$t('admin.paintingsAdd'), type: 'nuxt-link', link_to: 'paintingsAdd' },
					{ label: this.$t('admin.paintingsEdit'), type: 'nuxt-link', link_to: 'paintingsEdit' },
				],
				exit: [
					{ label: this.$t('admin.exitCMS'), type: 'div', link_to: null},
				]
			}
		};
	},
	created() {

	},
	methods: {
		setGroupExpand(section) {
			if (section === 'exit') {
				this.openExitCmsDialog();
			} else {
				this[section] = !this[section];
			}
		},
		getGroupExpand(section) {
			return this[section];
		},
		openExitCmsDialog() {
			this.$emit('openDialog', {
				title: this.$t('admin.exitCMStitle'),
				info: this.$t('admin.exitCMSinfo'),
				confirmButton: true,
				cancelButton: true,
			});
		},
	},
}
</script>