var express = require('express');
var router = express.Router();

let ConQUIZ = require('../controller/quiz') 

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.post('/Create' , ConQUIZ.QUIZCreate)
router.get('/Find' , ConQUIZ.QUIZFind)
router.patch('/:id' , ConQUIZ.QUIZUpdate)
router.delete('/:id' , ConQUIZ.QUIZDelete)

module.exports = router;
