var mysql = require('mysql');
var connMySQL = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fseletro'
    });
}

module.exports = ()=>{
    return connMySQL;
}