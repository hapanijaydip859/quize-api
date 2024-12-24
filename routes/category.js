var express = require('express');
var router = express.Router();
let ContCategory = require('../controller/category')

router.post('/Create',ContCategory.categoryData)
router.get('/Find',ContCategory.categoryFind)
router.patch('/:id',ContCategory.categoryUpdate)
router.delete('/:id',ContCategory.categoryDelete)




module.exports = router;

