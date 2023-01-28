<template>
	<div
		class="adminModalContainer"
		:class="{showModal: (switcher && show)}"
	>
		<div class="adminModalBody">
			<button style="width: 100%; height: 100%;" @click="closeModal">ZAVRIT MODAL</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalDialog',
	props: {
		switcher: {
			type: Boolean,
			required: true,
			default: false,
		},
		cbFunction: {
			type: Function,
			required: false,
		}
	},
	data() {
		return {
			show: true,
		};
	},
	watch: {
		switcher(newVal) {
			console.log('switcher:', newVal);
		},
		show(newVal) {
			console.log('show:', newVal);
		}
	},
	created() {
	},
	methods: {
		closeModal() {
			this.show = false;
		},
	},
};
</script>