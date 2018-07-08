var mongoose = require('mongoose');
const { Schema } = mongoose;

const EssaySchema = new Schema({
    type: { type: String, default: "essay"},
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    questionOne: { type: String },
    questionTwo: { type: String },
    questionThree: { type: String },
    questionFour: { type: String },
    questionFive: { type: String },
    questionSix: { type: String },
    questionSeven: { type: String },
})

module.exports = mongoose.model('Essays', EssaySchema);