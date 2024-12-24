var express = require('express');
var router = express.Router();

let ConUSER = require('../controller/user') 

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/Create' , ConUSER.userData)
router.get('/Find' , ConUSER.userRead)
router.patch('/:id' , ConUSER.userUpdate)
router.delete('/:id' , ConUSER.userDelete)

module.exports = router;
