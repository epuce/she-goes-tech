const app = require('../app');

exports.add = (request, response) => {
    const data = request.body;
    const sql = 'INSERT INTO users (username, email) VALUES("'+ data.username +'", "'+ data.email + '")';

    app.db.query(sql, (error) => {
        const responseData = {};

        if (error) {
            responseData.error = error;
        }

        response.send(JSON.stringify(responseData))
    })
}

exports.list = (request, response) => {
    const sql = `SELECT * FROM users`;
    app.db.query(sql, (error, result) => {
        response.send(JSON.stringify(result))
    })
}
