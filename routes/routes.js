// new express with default
// google querries
// install npm -save install
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

//https://www.npmjs.com/package/mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'appache'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

connection.end();