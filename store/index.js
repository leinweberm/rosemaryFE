export const state = () => ({
	language: '',
	admin: false,
	guest: true,
});

export const getters = {
	getLanguage(state) {
		return state.language;
	}
};

export const mutations = {
	updateState(value) {
		this.state = {...this.state, ...value};
	}
};

export const actions = {
	fetchCounter({ state }) {
		const res = { data: 10 };
		state.counter = res.data;
		return res.data;
	}
};