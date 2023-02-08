const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
	system_name: {
		type: String,
		required: true,
		lowercase: true,
		immutable: true,
		validate: {
			validator: (value) => value % 2 === 0,
			message: (props) => `${props.value} already exist`,
		}
	},
	title: {
		type: Object,
		required: true,
		default: { en: '', cs: '' },
		uppercase: true,
	},
	info: {
		type: Object,
		required: true,
		default: { en: '', cs: '' },
	},
	description: {
		type: Object,
		required: false,
		default: { en: '', cs: '' },
	},
	sold: {
		type: Boolean,
		default: false,
	},
	created: {
		type: Date,
		default: Date.now,
		immutable: true,
	},
	updated: {
		type: Date,
		default: Date.now,
	},
	deleted: {
		type: Date,
		default: null,
	},
	images: {
		type: Array,
		required: true,
		default: [],
	}
});

module.exports = mongoose.model('painting', paintingSchema);