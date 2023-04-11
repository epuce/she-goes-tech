var express = require('express')
var router = express.Router()
var commentsController = require('../controllers/comments.controller')

// /api/users -> GET
router.get('', commentsController.list)

// /api/users/:id -> GET
router.get('/:id', commentsController.findUser)
// /api/users/:id -> DELETE
router.delete('/:id', commentsController.delete)
// /api/users/:id -> PUT
router.put('/:id', commentsController.update)
// /api/users/ -> POST
router.post('', commentsController.save)


module.exports = router