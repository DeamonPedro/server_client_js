const mysql = require('mysql');

//retorna conexão com DB
module.exports =  mysql.createConnection(require('./config_db.json'))