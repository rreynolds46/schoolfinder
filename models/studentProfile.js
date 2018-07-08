var mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentProfileSchema = new Schema({
    type: { type: String, default: "profile"},

    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    highSchool: String,
    hometown: String,
    gpa: Number,
    biography: String,
    extracurricular: String,
    awards: String
})

module.exports = mongoose.model('StudentProfile', StudentProfileSchema);