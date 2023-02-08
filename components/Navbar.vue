<template>
	<div class="navBody softBlackBG">
		<div class="navInnerBody">
			<div class="navWrapper">
				<NuxtLink
					:to="localePath('index')"
					class="navLink softWhite boldText"
					style="font-size: 26px !important; color: white"
				>
					{{ $t("menu.authorName") }}
				</NuxtLink>
			</div>

			<div
				name="desktop-menu"
				class="navWrapper softBlackBG"
				:class="[{ showMobileMenu: showMenu }, { zeroHeight: !showMenu }]"
			>
				<NuxtLink
					:to="localePath('news')"
					class="navLink mediumText"
					:class="{ navLinkActive: activePage === 'news' }"
				>
					{{ $t("menu.news") }}
				</NuxtLink>
				<NuxtLink
					:to="localePath('gallery')"
					class="navLink mediumText"
					:class="{ navLinkActive: activePage === 'gallery' }"
				>
					{{ $t("menu.gallery") }}
				</NuxtLink>
				<NuxtLink
					:to="localePath('contact')"
					class="navLink mediumText"
					:class="{ navLinkActive: activePage === 'contact' }"
				>
					{{ $t("menu.contact") }}
				</NuxtLink>
				<div
					class="langSwitchBody softWhite"
					@click.stop="showLanguages = !showLanguages"
				>
					{{ $i18n.locale.toUpperCase() }}
					<div v-if="showLanguages" class="langOptions" style="var(--softWhite)">
						<template v-for="lang in languages">
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
			<div
				name="mobile-menu-button"
				class="mobileMenu"
				:class="{ mobileMenuClosed: showMenu }"
				@click.stop="showMenu = !showMenu"
			>
				<div
					class="mobileMenuLine softWhiteBG"
					:class="{ mobileMenuLineCollapsed: showMenu }"
				></div>
				<div
					class="mobileMenuLine softWhiteBG"
					:class="{ mobileMenuLineCollapsed: showMenu }"
				></div>
				<div
					class="mobileMenuLine softWhiteBG"
					:class="{ mobileMenuLineCollapsed: showMenu }"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TheNavbar",
	data() {
		return {
			activeLang: null,
			languages: ["cs", "en"],
			showLanguages: false,
			showMenu: false,
		};
	},
	computed: {
		activePage() {
			if (this.$route.name.includes("news")) {
				return "news";
			} else if (this.$route.name.includes("gallery")) {
				return "gallery";
			} else if (this.$route.name.includes("contact")) {
				return "contact";
			}
			return "index";
		},
	},
	created() {},
	methods: {},
};
</script>
