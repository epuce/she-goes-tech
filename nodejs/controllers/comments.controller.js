var app = require('../app')
const { use } = require('../routes/user.route')

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
    var sql = 'SELECT * FROM `moharso-comments`'

    runSql(sql, response)
}

// /api/users/ -> :id -> GET
exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `moharso-comments` WHERE id='+request.params.id

    runSql(sql, response)
}

// /api/users/ -> :id -> DELETE
exports.delete = function(request, response) {
    var sql = 'DELETE FROM `moharso-comments` WHERE id='+request.params.id

    runSql(sql, response)
}

// /api/users/ -> :id -> PUT
exports.update = function(request, response) {
    var {comment, user_id} = request.body

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

    var sql = `UPDATE \`moharso-comments\` SET comment="`+comment+`", user_id="`+user_id+`" WHERE id=`+request.params.id

    runSql(sql, response)
}

// /api/users/ -> POST
exports.save = function(request, response) {
    // the same as var {first_name, last_name, email} = request.body;
    //var first_name = request.body.first_name
    //var last_name = request.body.last_name
    //var email = request.body.email

    var {first_name, last_name, email} = request.body;

    var sql = 'INSERT INTO `moharso-comments` (first_name, last_name, email) VALUES("'+first_name+'","'+last_name+'","'+email+'")'

    runSql(sql, response)

    }
    