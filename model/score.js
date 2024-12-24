const mongoose= require('mongoose')
let Schema = mongoose.Schema

let Score = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user', // Assuming you have a User model
        required: true
      },
      quizId: {
        type: Schema.Types.ObjectId,
        ref: 'quiz', // Assuming you have a Quiz model
        required: true
      },
      score: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
})

let SCORE = mongoose.model('score',Score)
module.exports = SCORE
