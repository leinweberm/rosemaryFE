<template>
	<div class="footerBody softBlackBG">
		<div class="footerInnerBody">
			<div class="footerSlot softWhite">
				<p style="margin-bottom: 10px;" class="mediumText">
					{{ $t('footer.latestNews') }}
				</p>
			</div>

			<div class="footerSlot softWhite">
				<p style="margin-bottom: 10px;" class="mediumText">
					{{ $t('footer.socials') }}
				</p>
				<template v-for="social in socials">
					<p :key="social" class="lightText">{{ social }}</p>
				</template>
			</div>

			<div class="footerSlot softWhite">
				<p style="margin-bottom: 10px;" class="mediumText">
					{{ $t('footer.contactInfo') }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheFooter',
	data() {
		return {
			socials: null,
			contacts: null,
			news: null
		};
	},
	created() {
		this.socials = [
			'Instagram',
			'Facebook',
			'LinkedIn',
			'Behance',
		];
		this.contacts = [
			{ label: 'address', value: '', breakAfter: false },
			{ label: 'street', value: 'Gustava Klimenta 706/8', breakAfter: false },
			{ label: 'city', value: 'Havířov', breakAfter: false },
			{ label: 'postCode', value: '736 01', breakAfter: true },
			{ label: 'phone', value: '+420 666 999', breakAfter: false },
			{ label: 'email', value: 'info@rosemary.com', breakAfter: false },
		];
		this.news = [
			{ label: 'Muj obraz 1', value: '150cm x 90cm, Oil on canvas' },
			{ label: 'Muj obraz 2', value: '50cm x 30cm, Oil on canvas' },
			{ label: 'Muj obraz 3', value: '90cm x 60cm, Oil on canvas' },
			{ label: 'Muj obraz 4', value: '29cm x 21cm, Oil on canvas' },
			{ label: 'Muj obraz 5', value: '120cm x 80cm, Oil on canvas' },
		]
	},
};
</script>