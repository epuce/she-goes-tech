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
    var sql = 'SELECT * FROM `valda.naujok-users`'

    runSql(sql, response)
}

exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `valda.naujok-users` WHERE id='+request.params.id

    runSql(sql, response)
}

exports.delete = function(request, response) {
    var sql = 'DELETE FROM `valda.naujok-users` WHERE id='+request.params.id;
    runSql(sql, response);
}

exports.update = async function(request, response) {
    var {first_name, last_name, email} = request.body;

   
    await app.db.query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'valda.naujok-users'", function(error, data) {
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
    
        if (first_name) {
            changeValues.push(`first_name="${first_name}"`)
        }
        if (last_name) {
            changeValues.push(`last_name="${last_name}"`)
        }
        if (email) {
            changeValues.push(`email="${email}"`)
        }
    
        var sql = `UPDATE \`valda.naujok-users\` 
        SET ${changeValues.join(',')}
        WHERE id=`+request.params.id;
    
        runSql(sql, response)
    })
}

exports.save = function(request, response) {
    var {first_name, last_name, email} = request.body;

    var sql = `
        INSERT INTO \`valda.naujok-users\`
        (first_name, last_name, email)
        VALUES("`+first_name+`","`+last_name+`","`+email+`")
    `

    runSql(sql, response)
}