const mongoose = require('mongoose');
let Schema = mongoose.Schema

let quiz = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    questions:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question',  // References the Question model
        required: true,
    },
    points:
    {
        type: Number,
        required: true,
        default: 1,  // Default points per question
    }
},
    {
        timestamps: true
    })
let QUIZ = mongoose.model('quiz', quiz)
module.exports = QUIZ