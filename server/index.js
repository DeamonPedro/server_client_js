const http = require("http")
const express = require("express")
const bodyParser = require('body-parser')
//rota de login
const login = require("./login")
//rota de "registrar-se"
const sign_up = require("./sign_up")
//rota para validação de conta
const confirm_account = require("./confirm_account")
//rota de pedidos
const request = require("./request")
//conexão com o DB
sql = require("./db")

const app = express()

//porta do servidor
const port = 80
app.set("port",port)

//acetar retorno en json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//define as rotas
app.use(login)
app.use(sign_up)
app.use(confirm_account)
app.use(request)

const server = http.createServer(app)
server.listen(port)
console.log("[+] Server Running...")
module.exports = app