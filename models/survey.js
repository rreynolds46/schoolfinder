var mongoose = require('mongoose');
const { Schema } = mongoose;

const SurveySchema = new Schema({
    type: { type: String, default: "survey"},

    _user: { type: Schema.Types.ObjectId, ref: 'User' },
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
})

module.exports = mongoose.model('Survey',SurveySchema);