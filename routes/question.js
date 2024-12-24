var express = require('express');
var router = express.Router();
let ControQuestion = require('../controller/question')
router.post('/Create' , ControQuestion.QuestionData)
router.get('/Find' , ControQuestion.Questionfind)
router.patch('/:id' , ControQuestion.QuestionUpdate)
router.delete('/:id' , ControQuestion.QuestionDelete)



module.exports = router;