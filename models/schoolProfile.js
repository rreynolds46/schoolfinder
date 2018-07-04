var mongoose = require('mongoose');
const { Schema } = mongoose;

const SchoolProfileSchema = new Schema({
    schoolName: String,
    location: String,
    size: Number,
    tuition: String
})

module.exports = mongoose.model('SchoolProfile', SchoolProfileSchema);