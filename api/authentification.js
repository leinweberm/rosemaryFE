import jwt from 'jsonwebtoken';

export const auth = (user, pwd, envUser, envPwd, key) => {
	console.log(`
		user: ${user}, \n
		pwd: ${pwd}, \n
		envUser: ${process.env.JWT_USER}, \n
		envPwd: ${process.env.JWT_PWD}, \n
		key: ${key}
	`);
	if (user === process.env.JWT_USER && pwd === process.env.JWT_PWD) {
		const token = jwt.sign(
			{ userId: '123', username: user },
			process.env.SECRET_JWT_KEY,
			{ expiresIn: '1h' }
		);
		console.log('token', token);

		return token;
	}
};