var express = require('express')
var router = express.Router()
var commentsController = require('../controllers/comments.controller')


router.get('', commentsController.list)
router.get('/:id', commentsController.findUser)
router.delete('/:id', commentsController.delete)
router.put('/:id', commentsController.update)
router.post('', commentsController.save)

module.exports = router
