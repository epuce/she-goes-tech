var app = require('../app')

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

exports.list = function(request, response) {
    var sql = 'SELECT * FROM `valda.naujok-comments`'
    runSql(sql, response)
}

exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `valda.naujok-comments` WHERE id = '+request.params.id
    runSql(sql, response)
}

exports.delete = function(request,request) {
    var sql = 'DELETE FROM `valda.naujok-comments` WHERE id='+request.params.id
    runSql(sql, response)
}

exports.update = function(request, request) {
    var {first_name, last_name, email} = request.body
    var sql = 'UPDATE `valda.naujok-comments` SET first_name="'+first_name+'", last_name="'+last_name+'", email="'+email+'" WHERE id ='+request.params.id
    runSql(sql, response)
}

exports.save = function(request, request) {
    var {first_name, last_name, email} = request.body; 
    var sql = 'INSERT INTO `valda.naujok-comments` (first_name, last_name, email) VALUES("'+first_name+'","'+last_name+'","'+email+'")'
}