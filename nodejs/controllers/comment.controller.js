var app = require('../app')

function runSql(sql, response){
    app.db.query(sql, (error, data)=>{
        var returnData ={}
        if(error){
            returnData.error = error;
        }else{
            returnData.data = data
        }
        response.send(JSON.stringify(returnData))
    })
}

exports.list = (request, response) =>{
    var sql = 'SELECT * FROM `VaidaLinkuviene-comments`'

    if(request.query.user_id){
        sql = sql + `WHERE user_id="${request.query.user_id}"`
    }
    runSql(sql, response)
}

exports.findComment = (request, response) =>{
    var sql = 'SELECT * FROM `VaidaLinkuviene-comments` WHERE id='+request.params.id
    runSql(sql, response)
}

exports.delete = (request, response) =>{
    var sql = 'DELETE FROM `VaidaLinkuviene-comments` WHERE id=' +request.params.id;
        runSql(sql, response)
}

exports.update = (request, response) => {
    var{comment, user_id} = request.body;

    var changeValues='';

    if(comment){
        changeValues += `comment="` +comment+ `"`
    }
    if(user_id){
        changeValues += `user_id="`+user_id+`"`
    }

    if(changeValues.length === 0){
        response.send(JSON.stringify({
            error: "You have to provide at least one valid value"
     } ))
    }

    var sql = `UPDATE \`VaidaLinkuviene-comments\` 
    SET `+changeValues+` 
    WHERE id=`+request.params.id;
    runSql(sql, response)
}

exports.save= (request, response) => {
    var{comment, user_id} = request.body;

    var sql = `INSERT INTO \`VaidaLinkuviene-comments\` (comment, user_id) VALUES("${comment}", ${user_id})`

   runSql(sql, response)
}