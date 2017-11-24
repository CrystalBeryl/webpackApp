let mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'samples',
    database: 'test'
};
let mysql = require('mysql');
let pool = mysql.createPool(mysqlConfig);

module.exports = pool;