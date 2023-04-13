var app = require('../app')

function runSql(sql, response) {
    app.db.query(sql, function (error, data) {
      var returnData = {};
  
      if (error) {
        returnData.error = error;
      } else {
        returnData.data = data;
      }
      response.send(JSON.stringify(returnData));
    });
  }

exports.list = function(request, response){
    var sql = 'SELECT id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name FROM `KristePe-users`';
    runSql(sql, response);
}

exports.findUser = function(request, response){
  var sql = 'SELECT * FROM `KristePe-users` WHERE id= ' +request.params.id;
  runSql(sql, response);
}


exports.delete = function (request, response){
  var sql = "DELETE FROM `KristePe-users` WHERE id= " + request.params.id;
  runSql(sql, response);
}

exports.update = function (request, response) {
  var { first_name, last_name, email } = request.body;

  var sql = 'UPDATE `KristePe-users` SET first_name="'+first_name+'", last_name="'+last_name+'", email="'+email+'" WHERE id= '+request.params.id;

  runSql(sql, response);

//   response.send("Will update user with id: " + request.params.id + ". With data:" + JSON.stringify(request.body))
}


exports.save = function (request, response) {
  //   var first_name = request.body.first_name;
  //   var last_name = request.body.last_name;
  //   var email = request.body.email;
  
    var { first_name, last_name, email } = request.body;
  
    var sql ='INSERT INTO `KristePe-users`(first_name, last_name, email)VALUES("' +first_name +'","' +last_name +'","' +email +'")';
  
  
  //   response.send(JSON.stringify(returnData))
  
    runSql(sql, response);
  }