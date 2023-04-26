var express = require('express')
var router = express.Router()
var userController = require('../controllers/user.controller')


router.get('', userController.list)    

router.get('/:id', userController.list.findUser) 
 
router.delete('/:id', userController.list.delete) 
   

router.put('/:id', function(request, response) {
    response.send("Will update user with id: " + request.params.id + ". With data:" + JSON.stringify(request.body))
})
// /api/users -> POST
router.post('',) {
    