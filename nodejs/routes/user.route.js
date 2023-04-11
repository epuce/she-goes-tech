var express = require('express')
var router = express.Router()
var app = require ('../app')
var userController = require('../controllers/user.controller')

function runSql(sql, response) {
    app.db.query(sql, function(error,data) {
        var returnData = {}

        if (error) {
            returnData.error = error
        } else {
            returnData.data = data
        }

        response.send(JSON.stringify(returnData))
    })
}

// /api/users -> GET
router.get('', userController.list)

// /api/users -> /:id  -> GET
router.get('/:id', userController.findUser) 

// /api/users -> /:id -> DELETE
router.delete('/:id', userController.delete) 

// /api/users -> /:id -> PUT
router.put('/:id', userController.update) 

// /api/users/ -> POST
router.post('', userController.save) 
    // var first_name = request.body.first_name
    // var last_name = request.body.last_name
    // var email = request.body.email
    
    
    // app.db.query(sql, function(error,data) {
    //     var returnData = {}

    //     if (error) {
    //         returnData.error = error
    //     } else {
    //         returnData.data = data
    //     }
    //  response.send(JSON.stringify(returnData))
    // })


module.exports = router