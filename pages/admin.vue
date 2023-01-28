<template>
	<div class="pageBody">
		<AdminSidebar @openDialog="openExitCmsDialog" />
		<Modal
			:switcher="showExitCmsDialog"
		>
		</Modal>
	</div>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue';
import Modal from '../components/Modal.vue';
export default {
	name: 'AdminPage',
	components: { AdminSidebar, Modal },
	layout: 'admin',
	data() {
		return {
			showExitCmsDialog: false,
		};
	},
	created() {
		this.$nuxt.$on('openExitCmsDialog', this.openExitCmsDialog, this);
	},
	methods: {
		openExitCmsDialog(content) {
			console.log('emit event');
			this.showExitCmsDialog = true;
			console.log('content', JSON.stringify(content));
		},
	},
};
</script>