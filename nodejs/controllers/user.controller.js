var app = require('../app')

function runSQL(sql, response) {
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

exports.list = function(request, response) {
    var sql = 'SELECT * FROM `lindalejiete-users`'

    runSQL(sql, response)
}

exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `lindalejiete-users` WHERE id ='+request.params.id

    runSQL(sql, response)
}

exports.delete = function(request, response) {
    var sql = 'DELETE FROM `lindalejiete-users` WHERE id ='+request.params.id

    runSQL(sql, response)
}

exports.update = function(request, response) {
    var {first_name, last_name, email} = request.body;

    var sql = `UPDATE \`lindalejiete-users\`
    SET first_name="`+first_name+`", last_name="`+last_name+`", email="`+email+`"
    WHERE id =`+request.params.id;

    runSQL(sql, response);
}

exports.save = function(request, response) {
    var {first_name, last_name, email, cycle} = request.body;

    var sql = `
        INSERT INTO \`lindalejiete-users\`
        (first_name, last_name, email, cycle)
        VALUES("`+first_name+`","`+last_name+`","`+email+`","`+cycle+`")
    `

    runSQL(sql, response)
}
