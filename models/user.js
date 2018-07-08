var mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
	id: String,
	username: String,
	password: String,
	email: String,
	grouping: String,
	essays: {     
		questionOne: { type: String },
		questionTwo: { type: String },
		questionThree: { type: String },
		questionFour: { type: String },
		questionFive: { type: String },
		questionSix: { type: String },
		questionSeven: { type: String }
		},
	tests: { 
		APresearch: Number,
		APseminar: Number,
		APmusic: Number,
		AParthistory: Number,
		APstudioart2d: Number,
		APstudioart3d: Number,
		APstudioartdrawing: Number,
		APenglishlanguage: Number,
		APenglishlit: Number,
		APcomparativegov: Number,
		APeuro: Number,
		APgeography: Number,
		APmacro: Number,
		APmicro: Number,
		APpsych: Number,
		APusgov: Number,
		APushistory: Number,
		APworldhistory: Number,
		APcalcAB: Number,
		APcalcBC: Number,
		APcompsciA: Number,
		APcompsciP: Number,
		APstat: Number,
		APbio: Number,
		APchem: Number,
		APenvironment: Number,
		APphysicsElect: Number,
		APphysicsMech: Number,
		APphysics1: Number,
		APphysics2: Number,
		APchinese: Number,
		APfrench: Number,
		APgerman: Number,
		APitalian: Number,
		APjapanese: Number,
		APlatin: Number,
		APspanishlang: Number,
		APspanishlit: Number,
		SAT: Number,
		SATmath: Number,
		SATenglish: Number,
		ACT: Number
	},
	studentprofile: { 
		name: String,
		highSchool: String,
		hometown: String,
		gpa: Number,
		biography: String,
		extracurricular: String,
		awards: String
	 },
	surveys: { 
		campusSetting: Number,
		schoolSize: Number,
		reputation: Number,
		diversity: Number,
		classSize: Number,
		homework: Number,
		courseRequirements: Number,
		studyAbroad: Number,
		campusHousing: Number,
		greekLife: Number,
		sports: Number,
		arts: Number
	}
}, { minimize: false });

module.exports = mongoose.model('Users',UserSchema);