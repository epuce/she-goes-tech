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
    var sql = 'SELECT * FROM `VaidaLinkuviene-meals`'
    runSql(sql, response)
}

exports.findMeal = (request, response) =>{
    var sql = 'SELECT * FROM `VaidaLinkuviene-meals` WHERE id='+request.params.id
    runSql(sql, response)
}

exports.delete = (request, response) =>{
    var sql = 'DELETE FROM `VaidaLinkuviene-meals` WHERE id=' +request.params.id;
        runSql(sql, response)
}

exports.update = (request, response) => {
    var{name, description, price, allergens, 
        // category_id
    } = request.body;

    var changeValues='';

    if(name){
        changeValues += `name="` +name+ `"`
    }
    if(description){
        changeValues += `description="`+description+`"`
    }
    if(price){
        changeValues += `price="`+price+`"`
    }
    if(allergens){
        changeValues += `allergens="`+allergens+`"`
    }
    // if(category_id){
    //     changeValues += `category_id="`+category_id+`"`
    // }

    if(changeValues.length === 0){
        response.send(JSON.stringify({
            error: "You have to provide at least one valid value"
     } ))
    }

    var sql = `UPDATE \`VaidaLinkuviene-meals\` 
    SET `+changeValues+` 
    WHERE id=`+request.params.id;
    runSql(sql, response)
}

exports.save= (request, response) => {
    var {name, description, price, allergens, 
        // category_id
    } = request.body;

    var sql = `INSERT INTO \`VaidaLinkuviene-meals\` (name, description, price, allergens) VALUES("`+name+`", "`+description+`", `+price+`, "`+allergens+`")`

   runSql(sql, response)
}