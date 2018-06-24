var mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	id: String,
	username: String,
	password: String,
	email: String,
	grouping: String
})

module.exports = mongoose.model('Users',UserSchema);