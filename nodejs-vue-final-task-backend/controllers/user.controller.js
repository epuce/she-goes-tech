var app = require('../app')

function runSql(sql, response){
    app.db.query(sql, function(error, data){
        var returnData = {}

        if(error) {
            returnData.error = error
        } else {
            returnData.data = data
        }

        response.send(JSON.stringify(returnData))
    })
}

exports.list = function(request, response){
    var sql = 'SELECT * FROM `IevaZR-users-final-task`'
    
    runSql(sql, response)
}

exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `IevaZR-users-final-task` WHERE id='+request.params.id

    runSql(sql, response)
}

exports.delete = function(request, response){
    var sql = 'DELETE FROM `IevaZR-users-final-task` WHERE id='+request.params.id
    
    runSql(sql, response)
}

exports.save = function(request, response){

    var username = request.body.username
    var email = request.body.email
    var special_offers = request.body.special_offers
    var offer_cycle = request.body.offer_cycle

    var sql = 'INSERT INTO `IevaZR-users-final-task` (username, email, special_offers, offer_cycle) VALUES("'+username+'", "'+email+'", "'+special_offers+'", "'+offer_cycle+'")'

    app.db.query(sql, function(error, data){
        var returnData = {}

        if(error) {
            returnData.error = error
        } else {
            returnData.data = data
        }

        response.send(JSON.stringify(returnData))
    })
}