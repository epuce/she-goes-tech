var app = require('../app')

function runSql(sql, response) {
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

exports.list = function(request, response) {
    var sql = 'SELECT id, first_name AS name, CONCAT(first_name, " ",last_name) AS full_name FROM `godakond-users`'
     runSql(sql, response)
}

exports.findUser =  function(request, response){
        var sql = 'SELECT * FROM `godakond-users` WHERE id='+request.params.id
        runSql(sql, response)
    }

    exports.delete =  function(request, response){
        var sql = 'DELETE FROM `godakond-users` WHERE id='+request.params.id
        runSql(sql, response)
        
    }

    exports.update = function(request, response){
        var {first_name, last_name, email} = request.body;
        var changeValues = '';

        if(first_name) {
            changeValues += `first_name="`+first_name+`"`
        }

        if(last_name) {
            changeValues += `last_name="`+last_name+`"`
        }

        if(email) {
            changeValues += `email="`+email+`"`
        }

        var sql = `UPDATE \`godakond-users\` 
        SET `+changeValues+`
        WHERE id=`+request.params.id
    
        runSql(sql, response)
    }

    exports.save = function(request, response){
        var {first_name, last_name, email} = request.body
        var sql =  `
        INSERT INTO \`godakond-users\` 
        (first_name, last_name, email)
         VALUES("`+first_name+`","`+last_name+`","`+email+`")`
    
        runSql(sql, response)
        }