const db = require('../database/dbConfig');

module.exports = {
	findById
};

function findById(id) {
	return db('users')
		.where({ id })
		.first();
}
