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

exports.list = function(request, response) {
    var sql = 'SELECT * FROM `edmunds.puce-comments`'

    if (request.query.user_id) {
        sql = sql + ` WHERE user_id="${request.query.user_id}"`
    }

    runSql(sql, response)
}

exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `edmunds.puce-comments` WHERE id='+request.params.id

    runSql(sql, response)
}

exports.delete = function(request, response) {
    var sql = 'DELETE FROM `edmunds.puce-comments` WHERE id='+request.params.id;
    runSql(sql, response);
}

exports.update = function(request, response) {
    var {comment, user_id} = request.body;

    var changeValues = '';

    if (comment) {
        changeValues += `comment="`+comment+`"`
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

exports.save = function(request, response) {
    var {comment, user_id} = request.body;

    var sql = `
        INSERT INTO \`edmunds.puce-comments\`
        (comment, user_id)
        VALUES("${comment}",${user_id})
    `

    runSql(sql, response)
}