export const state = () => ({
	admin: false,
});

export const getters = {
	getState(state) {
		return state;
	}
};

export const mutations = {
	updateState: function (state, payload) {
		const keys = Object.keys(payload);
		keys.map((key) => {
			state[key] = payload[key];
		});
	},
};

export const actions = {
	updateStateAction: function ({commit}, payload) {
		commit('updateState', payload);
	},
};