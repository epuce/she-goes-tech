var app = require('../app')

function runSql(sql, response) {
    app.db.query(sql, function(error, data) {
        var returnData = {}

        if (error) {
            returnData.error = error
        } else {
            returnData.data = data
        }
        response.send(JSON.stringify(returnData))
    })
}

// /api.users/ -> GET
exports.list = function(request, response) {
    var sql = 'SELECT id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name FROM `moharso-users`'

    runSql(sql, response)
}

// /api/users/ -> :id -> GET
exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `moharso-users` WHERE id='+request.params.id

    runSql(sql, response)
}

// /api/users/ -> :id -> DELETE
exports.delete = function(request, response) {
    var sql = 'DELETE FROM `moharso-users` WHERE id='+request.params.id

    runSql(sql, response)
}

// /api/users/ -> :id -> PUT
exports.update = function(request, response) {
    var {first_name, last_name, email} = request.body

    var sql = `UPDATE \`moharso-users\` SET first_name="`+first_name+`", last_name="`+last_name+`", email="`+email+`" WHERE id=`+request.params.id

    runSql(sql, response)
}

// /api/users/ -> POST
exports.save = function(request, response) {
    // the same as var {first_name, last_name, email} = request.body;
    //var first_name = request.body.first_name
    //var last_name = request.body.last_name
    //var email = request.body.email

    var {first_name, last_name, email} = request.body;

    var sql = 'INSERT INTO `moharso-users` (first_name, last_name, email) VALUES("'+first_name+'","'+last_name+'","'+email+'")'

    runSql(sql, response)

    }
    