var express = require('express')
var router = express.Router()
var app = require('../app')
var subscribersController = require('../controllers/subscribers.controller')

// /api/subscribers/ -> GET
router.get('', subscribersController.list)
// /api/subscribers/ -> :id -> GET
router.get('/:id', subscribersController.findUser)
// /api/subscribers/ -> :id -> DELETE
router.delete('/:id', subscribersController.delete)
// /api/subscribers/ -> :id -> PUT
router.put('/:id', subscribersController.update)
// /api/subscribers/ -> POST
router.post('', subscribersController.save)

module.exports = router