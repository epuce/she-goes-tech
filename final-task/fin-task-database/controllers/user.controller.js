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
    var sql = 'SELECT * FROM `kristiana.tatarcuka-final-task-users`'

    runSql(sql, response)
}

exports.findUser = function(request, response) {
    var sql = 'SELECT * FROM `kristiana.tatarcuka-final-task-users` WHERE id='+request.params.id

    runSql(sql, response)
}

exports.delete = function(request, response) {
    var sql = 'DELETE FROM `kristiana.tatarcuka-final-task-users` WHERE id='+request.params.id;
    runSql(sql, response);
}

exports.update = async function(request, response) {
    var {first_name, last_name, email, sample_option, sample_product} = request.body;

   
    await app.db.query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'kristiana.tatarcuka-final-task-users'", function(error, data) {
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
        if (sample_option) {
            changeValues.push(`sample_option="${sample_option}"`)
        }
        if (sample_product) {
            changeValues.push(`sample_product="${sample_product}"`)
        }
    
        var sql = `UPDATE \`kristiana.tatarcuka-final-task-users\` 
        SET ${changeValues.join(',')}
        WHERE id=`+request.params.id;
    
        runSql(sql, response)
    })
}

exports.save = function(request, response) {
    var {first_name, last_name, email, sample_option, sample_product} = request.body;

    var sql = `
        INSERT INTO \`kristiana.tatarcuka-final-task-users\`
        (first_name, last_name, email, sample_option, sample_product)
        VALUES("`+first_name+`","`+last_name+`","`+email+`","`+sample_option+`","`+sample_product+`")
    `

    runSql(sql, response)
}