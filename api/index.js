import { auth } from './authentification';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Painting = require('./models/painting');
const Page = require('./models/page');

const app = express();
mongoose.connect(
	process.env.DATABASE_URL,
	() => { console.log('MongoDB succesfuly connected'); },
	(error) => { console.error('MongoDB not connected', error); }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/test', function (req, res) {
	res.send('Test successful!!!')
});

app.post('/login', (req, res) => {
	const { user, password } = req.body;
	const jwtToken = auth(user, password);
	res.status(201).json({message: 'Login Successful!', token: jwtToken });
});

app.post('/add-painting', (req, res) => {
	Painting.create(req.params);
});

app.post('/edit-page', (req, res) => {
	Page.updateOne();
});

export default {
	path: '/api',
	handler: app
};