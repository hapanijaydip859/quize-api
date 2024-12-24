let SCORE = require('../model/score')

exports.SCORECreate = async function (req, res, next) {
    try {
        let ScoreCreate = await SCORE.create(req.body)
        res.status(201).json({
            status: "success",
            message: "user create success",
            data: ScoreCreate
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.SCOREFind = async function (req, res, next) {
    try {
        let ScoreFind = await SCORE.find().populate('userId quizId')
        res.status(201).json({
            status: "success",
            message: "user find success",
            data: ScoreFind
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.SCOREDelete = async function (req, res, next) {
    try {
        let ScoreDelete = await SCORE.findByIdAndDelete(req.params.id)
        if(!ScoreDelete){throw new Error('user not found')}
        res.status(201).json({
            status: "success",
            message: "user Delete success",
         
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}