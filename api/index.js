import { auth } from './authentification';
require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/test', function (req, res) {
	res.send('Test successful!!!')
});

app.post('/login', (req, res) => {
	const { user, password } = req.body;
	const jwtToken = auth(user, password);
	res.json({message: 'Login Successful!', token: jwtToken });
});

export default {
	path: '/api',
	handler: app
};