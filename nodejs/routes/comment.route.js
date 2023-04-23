var express = require('express');
var router = express.Router();
var app = require('../app');
var commentController = require('../controllers/comment.controller')

// /api/comment -> GET
router.get('', commentController.list);
//  /api/comment -> /:id -> GET
router.get('/:id', commentController.findComment);
// /api/comment -> /:id -> DELETE
router.delete('/:id', commentController.delete);
// /api/comment -> /:id -> PUT
router.put('/:id', commentController.update);
// /api/comment -> POST
router.post('', commentController.save);

module.exports = router