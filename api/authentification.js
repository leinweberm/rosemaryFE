import jwt from 'jsonwebtoken';

export const auth = (user, pwd, envUser, envPwd, key) => {
	if (user === process.env.JWT_USER && pwd === process.env.JWT_PWD) {
		const token = jwt.sign(
			{ userId: '123', username: user },
			process.env.SECRET_JWT_KEY,
			{ expiresIn: '1h' }
		);
		return token;
	}
};