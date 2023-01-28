<template>
	<div class="navBody softBlackBG">
		<div class="navInnerBody">

			<div class="navWrapper">
				<NuxtLink
					:to="localePath('index')"
					class="navLink softWhite boldText"
					style="fontSize: 24px"
				>
					{{ $t('menu.authorName') }}
				</NuxtLink>
			</div>

			<div class="navWrapper">
				<NuxtLink
					:to="localePath('contact')"
					class="navLink softWhite lightText"
				>
					{{ $t('menu.contact') }}
				</NuxtLink>
				<NuxtLink
					:to="localePath('news')"
					class="navLink softWhite lightText"
				>
					{{ $t('menu.news') }}
				</NuxtLink>
				<NuxtLink
					:to="localePath('gallery')"
					class="navLink softWhite lightText"
				>
					{{ $t('menu.gallery') }}
				</NuxtLink>

				<div class="langSwitchBody softWhite" @click.stop="showLanguages = !showLanguages">
					{{ $i18n.locale.toUpperCase() }}
					<div
						v-if="showLanguages"
						class="langOptions"
						style="var(--softWhite)"
					>
						<template v-for="(lang) in languages">
							<NuxtLink
								v-if="lang !== $i18n.locale"
								:key="lang"
								class="langOptionsItem softBlackBG softWhite"
								:to="switchLocalePath(lang)"
							>
								{{ lang.toUpperCase() }}
							</NuxtLink>
						</template>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: 'TheNavbar',
	data() {
		return {
			activeLang: null,
			languages: ['cs', 'en'],
			showLanguages: false,
		};
	},
	watch: {
		activeLang(newVal) {
			this.$i18n.locale = newVal;
		}
	},
	created() {
		this.activeLang = this.$i18n.locale;
	},
	methods: {
	},
};
</script>