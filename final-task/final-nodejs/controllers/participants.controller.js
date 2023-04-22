var app = require("../app");

function runSql(sql, response) {
  app.db.query(sql, function (error, data) {
    var returnData = {};

    if (error) {
      returnData.error = error;
    } else {
      returnData.data = data;
    }

    console.log(returnData);
    response.send(JSON.stringify(returnData));
  });
}

exports.list = function (request, response) {
  var sql = "SELECT * FROM `buraityte-participants`";

  runSql(sql, response);
};

exports.findParticipant = function (request, response) {
  var sql =
    "SELECT * FROM `buraityte-participants` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.delete = function (request, response) {
  var sql =
    "DELETE FROM `buraityte-participants` WHERE id=" + request.params.id;
  runSql(sql, response);
};

exports.update = async function (request, response) {
  var { first_name, last_name, email } = request.body;

  await app.db.query(
    "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'buraityte-participants'",
    function (error, data) {
      var columns = data.map((column) => column.COLUMN_NAME);
      var changeValues = [];
      var errors = [];

      Object.keys(request.body).forEach((val) => {
        if (!columns.includes(val)) {
          errors.push(
            "Column: '" +
              val +
              "' does not exist on entity you are trying to modify"
          );
        }
      });

      if (errors.length > 0) {
        response.send(JSON.stringify(errors));
      }

      if (first_name) {
        changeValues.push(`first_name="${first_name}"`);
      }
      if (last_name) {
        changeValues.push(`last_name="${last_name}"`);
      }
      if (email) {
        changeValues.push(`email="${email}"`);
      }

      var sql =
        `UPDATE \`buraityte-participants\` 
    SET ${changeValues.join(",")}    
    WHERE id=` + request.params.id;
      runSql(sql, response);
    }
  );
};

exports.save = function (request, response) {
  var { first_name, last_name, email } = request.body;

  var sql =
    `
        INSERT INTO \`buraityte-participants\`
        (first_name, last_name, email)
        VALUES("` +
    first_name +
    `","` +
    last_name +
    `","` +
    email +
    `")
    `;

  runSql(sql, response);
};
