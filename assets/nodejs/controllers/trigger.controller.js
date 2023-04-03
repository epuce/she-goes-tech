const app = require('../app');

exports.trigger = (request, response) => {
    const sql = request.body.sql;

    app.db.query(sql, (error) => {
        const responseData = {};

        if (error) {
            responseData.error = error;
            responseData.data = request.body;
        }

        response.send(JSON.stringify(responseData))
    })
}
