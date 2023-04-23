var express = require('express');
var router = express.Router();
var app = require('../app');
var categoryController = require('../controllers/category.controller')

// /api/comment -> GET
router.get('', categoryController.list);
//  /api/comment -> /:id -> GET
router.get('/:id', categoryController.findCategory);
// /api/comment -> /:id -> DELETE
router.delete('/:id', categoryController.delete);
// /api/comment -> /:id -> PUT
router.put('/:id', categoryController.update);
// /api/comment -> POST
router.post('', categoryController.save);

module.exports = router