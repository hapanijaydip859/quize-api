let RoutUser = require('../model/user')

exports.userData = async function(req,res,next) {
    try {
        let UserCreate = await RoutUser.create(req.body)
        res.status(201).json({
            status : "success",
            message : "user create success",
            data : UserCreate
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}
exports.userRead = async function(req,res,next) {
    try {
        let UserRead = await RoutUser.find()
        res.status(201).json({
            status : "success",
            message : "user find success",
            data : UserRead
        })
    } catch (error) {
        res.status(404).json({
            status : "user not find",
            message : error.message
        })
    }
}
exports.userUpdate = async function(req,res,next) {
    try {
        let Userupdate = await RoutUser.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        res.status(201).json({
            status : "success",
            message : "user update success",
            data : Userupdate
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}
exports.userDelete = async function(req,res,next) {
    try {
        let UserDelete = await RoutUser.findByIdAndDelete(req.params.id)
        if(!UserDelete){
            throw new Error('user not found')
        }
        res.status(201).json({
            status : "success",
            message : "user delete success"
        })
    
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}
