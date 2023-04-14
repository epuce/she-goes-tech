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
    var sql = 'SELECT * FROM `VaidaLinkuviene-users`'
    runSql(sql, response)
}

exports.findUser = (request, response) =>{
    var sql = 'SELECT * FROM `VaidaLinkuviene-users` WHERE id='+request.params.id
    runSql(sql, response)
}

exports.delete = (request, response) =>{
    var sql = 'DELETE FROM `VaidaLinkuviene-users` WHERE id=' +request.params.id;
        runSql(sql, response)
}

exports.update = (request, response) => {
    var{first_name, last_name, email} = request.body;

    var changeValues='';
    if(first_name){
        changeValues += `first_name="`+first_name+`"`
    }
    if(last_name){
        changeValues += `last_name="`+last_name+`"`
    }
    if(email){
        changeValues += `email="`+email+`"`
    }

    var sql = `UPDATE \`VaidaLinkuviene-users\` 
    SET first_name="`+first_name+`", last_name="`+last_name+`", email="`+email+`" WHERE id=`+request.params.id;
    runSql(sql, response)
}

exports.save= (request, response) => {
    var first_name = request.body.first_name;
    var last_name = request.body.last_name;
    var email = request.body.email;
    // var {first_name, last_name, email} = request.body ;

    var sql = `INSERT INTO \`VaidaLinkuviene-users\` (first_name, last_name, email)   VALUES(" `+first_name+`", "`+last_name+`", "`+email+`")`

   runSql(sql, response)
}