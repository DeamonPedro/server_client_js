const mysql = require('mysql');

//retorna conexão com DB
module.exports =  mysql.createConnection({
  host     : '0.0.0.0',
  port     : 3306,
  user     : 'Pedro',
  password : '_app_pass_',
  database : 'app'
})