const mongoose = require('mongoose');
let Schema = mongoose.Schema

let Question = new Schema({
  question : {
    type : String,
    require : true 
  },
  option1 : {
    type : String,
    require : true
  },
  option2 : {
    type : String,
    require : true
  },
  option3 : {
    type : String,
    require : true
  },
  option4 : {
    type : String,
    require : true
  },
  answer : {
    type : String,
    require : true 
  }
})
let  QUES = mongoose.model('question', Question)
module.exports = QUES