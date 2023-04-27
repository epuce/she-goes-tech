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

// /api/subscribers GET
exports.list = function(request, response) {
    var sql = 'SELECT * FROM `moharso-subscribers`'

    runSql(sql, response)
}

// /api/subscribers/ -> :id -> GET
exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `moharso-subscribers` WHERE id='+request.params.id

    runSql(sql, response)
}

// /api/subscribers/ -> :id -> DELETE
exports.delete = function(request, response) {
    var sql = 'DELETE FROM `moharso-subscribers` WHERE id='+request.params.id

    runSql(sql, response)
}

// /api/subscribers/ -> :id -> PUT
exports.update = function(request, response) {
    var {username, email, subscribe, cycle} = request.body

    var sql = `UPDATE \`moharso-subscribers\` SET username="`+username+`", email="`+email+`", subscribe="`+subscribe+`", cycle="`+cycle+`" WHERE id=`+request.params.id

    runSql(sql, response)
}

// /api/subscribers -> POST
exports.save = function(request, response) {
    var {username, email, subscribe, cycle} = request.body;

    var sql = 'INSERT INTO `moharso-subscribers` (username, email, subscribe, cycle) VALUES("'+username+'","'+email+'", "'+subscribe+'", "'+cycle+'")'

    runSql(sql, response)
}
    