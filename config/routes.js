const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/Users');
const { authenticate } = require('../auth/authenticate');

module.exports = server => {
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
	try {
		let user = req.body;

		user.password = bcrypt.hashSync(user.password, 10);

		const newUser = await Users.add(user);
		const token = generateToken(newUser);
		return res.status(201).json(token);
	} catch (err) {
		res.status(500).json({
			message: 'Sorry, but there was an error while creating that user'
		});
	}
}

async function login(req, res) {
	try {
		let { username, password } = req.body;

		const user = await Users.findBy({ username }).first();

		if (user && bcrypt.compareSync(password, user.password)) {
			const token = generateToken(user);
			return res.status(200).json(token);
		}

		return res
			.status(401)
			.json({ message: 'Sorry, incorrect username or password' });
	} catch (err) {
		res.status(500).json({
			message: 'Sorry, but there was an error while trying to log in '
		});
	}
}

function getJokes(req, res) {
	const requestOptions = {
		headers: { accept: 'application/json' }
	};

	axios
		.get('https://icanhazdadjoke.com/search', requestOptions)
		.then(response => {
			res.status(200).json(response.data.results);
		})
		.catch(err => {
			res.status(500).json({
				message: 'Error Fetching Jokes',
				error: err
			});
		});
}
