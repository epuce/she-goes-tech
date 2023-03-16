const express = require("express");
const app = express();
const port = 3000;

const mysql = require('mysql')
const config = {
  host: '104.248.125.41',
  user: 'root',
  password: 'root_password',
  database: 'she-goes-tech'
}

var query = function (query, params = {}) {
  return new Promise(function (resolve, reject) {
    var connection = mysql.createConnection(config)
    connection.connect()

    connection.query(query, (error, result, fields) => {
      connection.end();
      resolve(result);
    })
  })
}

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.get('/list', (req, res) => {
  query('SELECT * FROM users').then((result) => {
    res.json({ result })
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});