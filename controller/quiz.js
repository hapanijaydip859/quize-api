let  QUIZ = require('../model/quiz')


exports.QUIZCreate = async function(req,res,next){
  try {
    let QuizCreate =  await QUIZ.create(req.body)
    res.status(201).json({
      status : "Question Create success ",
      message : "success",
      data : QuizCreate
    })
  } catch (error) {
    res.status(404).json({
      status : "fail ",
      message : error.message
    })
  }
}
exports.QUIZFind = async function(req,res,next){
    try {
      let QuizFind =  await QUIZ.find().populate('questions')
      res.status(201).json({
        status : "Question Find success ",
        message : "success",
        data : QuizFind
      })
    } catch (error) {
      res.status(404).json({
        status : "fail ",
        message : error.message
      })
    }
  }

  exports.QUIZUpdate = async function(req,res,next){
    try {
      console.log(req.params.id , req.body , {new : true});
      
      let QuizUpdate =  await QUIZ.findByIdAndUpdate(req.params.id , req.body , {new : true})
      res.status(201).json({
        status : "Question Update success ",
        message : "success",
        data : QuizUpdate
      })
    } catch (error) {
      res.status(404).json({
        status : "fail ",
        message : error.message
      })
    }
  }

  exports.QUIZDelete = async function(req,res,next){
    try {    
      let QuizDelete =  await QUIZ.findByIdAndDelete(req.params.id)
      if(!QuizDelete){throw new Error('user not found')}
      res.status(201).json({
        status : "Question Delete success ",
        message : "success"
      })
    } catch (error) {
      res.status(404).json({
        status : "fail ",
        message : error.message
      })
    }
  }



