const mysql = require('mysql');

/* retorna conexão com DB, estrutura arquivo config_db.json:
{
    "host"     :"0.0.0.0",
    "port"     :3306,
    "user"     :"username",
    "password" :"password",
    "database" :"db name"
}
*/
module.exports =  mysql.createConnection(require('./config_db.json'))