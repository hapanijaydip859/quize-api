var express = require('express');
var router = express.Router();

let ConSCORE = require('../controller/score') 

router.post('/Create', ConSCORE.SCORECreate)
router.get('/Find', ConSCORE.SCOREFind)
router.delete('/:id', ConSCORE.SCOREDelete)




module.exports = router;