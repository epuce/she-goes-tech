var express = require("express");
var router = express.Router();
var app = require('../app')
// var participantsController = require("../controllers/participants.controller");

// /api/participants -> GET
router.get('',function(_, response) {
    response.send("Will send user list")
})
// router.get("", participantsController.list);
// /api/participants -> /:id -> GET
router.get('/:id',function(request, response) {
    response.send("Will send user with id:" + request.params.id) 
})
// router.get("/:id", participantsController.findParticipant);
// /api/participants -> /:id -> DELETE
router.delete('/:id',function(request, response) {
    response.send("Will delete user with id:" + request.params.id) 
})
// router.delete("/:id", participantsController.delete);
// /api/participants -> /:id -> PUT // UPDATES INFO
router.put('/:id',function(request, response) {
    response.send("Will update user with id:" + request.params.id + ". With data." + JSON.stringify(request.body)) 
})
// router.put("/:id", participantsController.update);
// /api/participants -> POST
router.post('/',function(request, response) {
    var {first_name, last_name, email} = request.body

    var sql = 'INSERT INTO `buraityte-participants` (first_name, last_name, email) VALUES("'+first_name+'","'+last_name+'","'+email+'")'

    app.db.query(sql, function (error, data) {
        var returnData = {};
    
        if (error) {
          returnData.error = error;
        } else {
          returnData.data = data;
        }
         response.send(JSON.stringify(returnData)) 

      });

})
// router.post("", participantsController.save);

module.exports = router;
