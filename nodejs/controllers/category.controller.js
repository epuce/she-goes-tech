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
    var sql = 'SELECT * FROM `VaidaLinkuviene-categories`'
    runSql(sql, response)
}

exports.findCategory = (request, response) =>{
    var sql = 'SELECT * FROM `VaidaLinkuviene-categories` WHERE id='+request.params.id
    runSql(sql, response)
}

exports.delete = (request, response) =>{
    var sql = 'DELETE FROM `VaidaLinkuviene-categories` WHERE id=' +request.params.id;
        runSql(sql, response)
}

exports.update = (request, response) => {
    var{category} = request.body;

    var changeValues='';
    if(category){
        changeValues += `category="` +category+ `"`
    }

    if(changeValues.length === 0 ){
        response.send(JSON.stringify({
            error: "You have to provide one valid value"
     } ))
    }

    var sql = `UPDATE \`VaidaLinkuviene-categories\` 
    SET `+changeValues+` 
    WHERE id=`+request.params.id;
    runSql(sql, response)
}

// TODO: change to have the correct logic
exports.save= (request, response) => {
    var{category} = request.body;

    var sql = `INSERT INTO \`VaidaLinkuviene-categories\` (category)   VALUES(" `+category+`")`

   runSql(sql, response)
}