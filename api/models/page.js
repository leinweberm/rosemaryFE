const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
	id: {
		type: String,
	},
	system_name: {
		type: String,
		required: true,
	},
	title: {
		type: Object,
		required: true,
		default: { en: '', cs: '' },
	},
	sections: {
		type: Array,
		required: false,
		default: [
			{ title: '', content: '', image: '' },
		],
	},
	created: {
		type: Date,
		default: Date.now,
	},
	deleted: {
		type: Date,
		default: null,
	}
});

module.exports = mongoose.model('page', pageSchema);