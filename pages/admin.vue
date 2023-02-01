<template>
	<div
		v-if="$auth.loggedIn"
		name="cms"
		class="pageBody softWhiteBG"
	>
		<AdminSideBar @openDialog="openExitCmsDialog" />
		<Modal
			:switcher="showExitCmsDialog"
		>
		</Modal>
	</div>
	<div
		v-else
		name="login-form"
		class="pageBody softWhiteBG"
	>
		<div
			name="form-body"
			class="adminLoginForm softWhiteBG"
		>
			<div
				class="adminLoginItem cfc"
			>
				<h1>{{ $t('login').toUpperCase() }}</h1>
			</div>
			<div
				class="adminLoginItem cfc"
			>
				<label for="user">{{ $t('username').toLowerCase() + ':' }}</label>
				<input
					id="usr"
					v-model="loginForm.username"
					name="usr"
					type="text"
					class="size-1"
				/>

				<label for="pwd">{{ $t('password').toLowerCase() + ':' }}</label>
				<input
					id="pwd"
					v-model="loginForm.password"
					name="pwd"
					type="password"
					class="size-1"
				/>
			</div>
			<div
				class="adminLoginItem cfr"
			>
				<button
					:disabled="!validForm"
					@click="login"
				>
					{{ $t('confirm') }}
				</button>
				<NuxtLink
					class="button buttonInverseBorder"
					style="margin-left: 20px;"
					:to="localePath('index')"
				>
					{{ $t('cancel') }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import AdminSideBar from '../components/AdminSidebar.vue';
import Modal from '../components/Modal.vue';

export default {
	name: 'AdminPage',
	components: { AdminSideBar, Modal },
	layout: 'admin',
	data() {
		return {
			adminModel: null,
			showExitCmsDialog: false,
			loginForm: {
				user: null,
				password: null,
			},
		};
	},
	computed: {
		validForm() {
			const check = (
				(this.loginForm.username && this.loginForm.username.trim().length > 0) &&
				(this.loginForm.password && this.loginForm.password.trim().length > 0)
			);
			return check;

		},
	},
	created() {
		console.log('loged-in?', this.$auth.loggedIn);
		this.$nuxt.$on('openExitCmsDialog', this.openExitCmsDialog, this);
	},
	methods: {
		openExitCmsDialog(content) {
			console.log('emit event');
			this.showExitCmsDialog = true;
			console.log('content', JSON.stringify(content));
		},
		async login() {
			await this.$auth.loginWith('local', {
				data: { ...this.loginForm }
			});
			this.$router.push(`/${this.$i18n.locale}/admin`);
		},
	},
};
</script>