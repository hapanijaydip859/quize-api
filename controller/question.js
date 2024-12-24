let Question = require('../model/question')

exports.QuestionData = async function(req,res,next){
    try {
      let QuestionCreate =  await Question.create(req.body)
      res.status(201).json({
        status : "Question Create success ",
        message : "success",
        data : QuestionCreate
      })
    } catch (error) {
      res.status(404).json({
        status : "fail ",
        message : error.message
      })
    }
  }

  exports.Questionfind = async function(req,res,next){
    try {
      let QuestionFind = await Question.find()
      res.status(201).json({
        status : "Question Find success ",
        message : "success",
        data : QuestionFind
      })
    } catch (error) {
      res.status(404).json({
        status : "fail ",
        message : error.message
      })
    }
  }

  exports.QuestionUpdate = async function(req,res,next){
    try {
      let QuestionUpdate = await Question.findByIdAndUpdate(req.params.id , req.body , {new : true})
      res.status(201).json({
        status : "Question Update success ",
        message : "success",
        data : QuestionUpdate
      })
    } catch (error) {
      res.status(404).json({
        status : "fail ",
        message : error.message
      })
    }
  }

  exports.QuestionDelete = async function(req,res,next){
    try {
      let QuestionDelete = await Question.findByIdAndDelete(req.params.id)
      if(!QuestionDelete){ throw new Error('user not found')}
      res.status(201).json({
        status : "Question Delete success ",
        message : "success",
 
      })
    } catch (error) {
      res.status(404).json({
        status : "fail ",
        message : error.message
      })
    }
  }