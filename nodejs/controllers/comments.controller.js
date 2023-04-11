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
    var sql = 'SELECT id, comments, user_id FROM `lindalejiete-comments`'

    runSQL(sql, response)
}

exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `lindalejiete-comments` WHERE id ='+request.params.id

    runSQL(sql, response)
}

exports.delete = function(request, response) {
    var sql = 'DELETE FROM `lindalejiete-comments` WHERE id ='+request.params.id

    runSQL(sql, response)
}

exports.update = function(request, response) {
    var {comments, user_id} = request.body;

    /* var sql = `UPDATE \`lindalejiete-comments\`
    SET comments="`+comments+`", user_id="`+user_id+`"
    WHERE id =`+request.params.id; */

    var changeValues = '';

    if (comments) {
        changeValues += `comments="`+comments+`"`
    }

    if (user_id) {
        changeValues += `user_id="`+user_id+`"`
    }

    if (changeValues.length === 0) {
        response.send(JSON.stringify({
            error: "You have to provide at least one valid value"
        }))
    }

    var sql = `UPDATE \`edmunds.puce-comments\` 
    SET `+changeValues+`
    WHERE id=`+request.params.id;

    runSql(sql, response)
}


//TODO: change to have the correct logic
exports.save = function(request, response) {
    var id = request.body.id
    var comments = request.body.comments
    var user_id = request.body.user_id

    var {id, comments, user_id} = request.body;

    var sql = `
        INSERT INTO \`lindalejiete-comments\`
        (id, comments, user_id)
        VALUES("`+id+`","`+comments+`","`+user_id+`")
    `

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