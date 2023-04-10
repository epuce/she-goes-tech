/*Create a comments table that has 3 columns: id comment user_id
Make ID column as the primary column that auto increments*/

var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response) {
    var sql = `CREATE TABLE IF NOT EXISTS \`lindalejiete-comments\` (
        id INT NOT NULL AUTO_INCREMENT,
        comments VARCHAR(255),
        user_id VARCHAR(255)
    )`

    app.db.query(sql, function(error, data) {
        var responseData = {}

        if (error) {
            responseData.error = error
        } else {
            responseData.data = data
        }

        response.send(JSON.stringify(responseData))
    })
})

module.exports = router;

/*Insert 3 rows into the newly created table
Retrieve the newly created rows
Update an existing row
Delete an existing row*/

var express = require('express')
var router = express.Router()
var app = require('../app')

function runSQL(sql, response) {
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

/* /api/users -> GET */
router.get('', function(_, response) {
    var sql = 'SELECT * FROM `lindalejiete-comments`'

    runSQL(sql, response)
})

/* /api/users/:id -> GET */
router.get('/:id', function(request, response) {
    var sql = 'SELECT * FROM `lindalejiete-comments` WHERE id ='+request.params.id

    runSQL(sql, response)
})

/* /api/users/:id -> DELETE */
router.delete('/:id', function(request, response) {
    var sql = 'DELETE FROM `lindalejiete-comments` WHERE id ='+request.params.id

    runSQL(sql, response)
})

/* /api/users/:id -> PUT */
router.put('/:id', function(request, response) {
    var {id, comments, user_id} = request.body;

    var sql = `UPDATE \`lindalejiete-comments\`
    SET id="`+id+`", comments="`+comments+`", user_id="`+user_id+`"
    WHERE id =`+request.params.id;

    runSQL(sql, response);
})

/* /api/users/ -> POST */
router.post('', function(request, response) {
    var id = request.body.id
    var comments = request.body.comments
    var user_id = request.body.user_id

    var {id, comments, user_id} = request.body;

    var sql = `
        INSERT INTO \`lindalejiete-comments\`
        (id, comments, user_id)
        VALUES("`+id+`","`+comments+`","`+user_id+`")
    `

    app.db.query(sql, function(error, data) {
        var returnData = {}

        if (error) {
            returnData.error = error
        } else {
            returnData.data = data
        }

        response.send(JSON.stringify(returnData))
    })
})

module.exports = router