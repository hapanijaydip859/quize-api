let Category = require('../model/category')

exports.categoryData = async function(req,res,next){
  try {
    let CategoryCreate = await Category.create(req.body)
    res.status(201).json({
      status : "Category Create success ",
      message : "success",
      data : CategoryCreate
    })
  } catch (error) {
    res.status(404).json({
      status : "CategoryCreate success ",
      message : error.message
    })
  }
}

exports.categoryFind = async function(req,res,next){
  try {
    let CategoryFind= await  Category.find()
    res.status(201).json({
      status : "Category Find success ",
      message : "success",
      data : CategoryFind
    })
  } catch (error) {
    res.status(404).json({
      status : "Fail ",
      message : error.message
    })
  }
}

exports.categoryUpdate = async function(req,res,next){
  try {
    let CategoryUpdate= await  Category.findByIdAndUpdate(req.params.id , req.body , {new : true})
    res.status(201).json({
      status : "Category Update success ",
      message : "success",
      data : CategoryUpdate
    })
  } catch (error) {
    res.status(404).json({
      status : "Fail ",
      message : error.message
    })
  }
}

exports.categoryDelete = async function(req,res,next){
  try {
    let CategoryDelete= await  Category.findByIdAndDelete(req.params.id)
    if(!CategoryDelete){
      throw new Error('user not found')
  }
    res.status(201).json({
      status : "Category Delete success ",
      message : "success",
    })
  } catch (error) {
    res.status(404).json({
      status : "Fail ",
      message : error.message
    })
  }
}
