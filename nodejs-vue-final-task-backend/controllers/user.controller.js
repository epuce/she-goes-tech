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

exports.update = async function(request, response) {
    var {username, email, special_offers, offer_cycle} = request.body;

   
    await app.db.query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'IevaZR-users-final-task'", function(error, data) {
        var columns = data.map((column) => column.COLUMN_NAME)
        var changeValues = [];
        var errors = [];

        Object.keys(request.body).forEach((val) => {
            if (!columns.includes(val)) {
                errors.push("Column: '" +  val + "' does not exist on entity you are trying to modify")
            }
        })

        if (errors.length > 0) {
            response.send(JSON.stringify(errors))
        }
    
        if (username) {
            changeValues.push(`username="${username}"`)
        }
        if (email) {
            changeValues.push(`email="${email}"`)
        }
        if (special_offers) {
            changeValues.push(`special_offers="${special_offers}"`)
        }
        if (offer_cycle) {
            changeValues.push(`offer_cycle="${offer_cycle}"`)
        }
    
        var sql = `UPDATE \`IevaZR-users-final-task\` 
        SET ${changeValues.join(',')}
        WHERE id=`+request.params.id;
    
        runSql(sql, response)
    })
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