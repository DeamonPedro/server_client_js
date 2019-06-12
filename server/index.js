const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
//conexão com o DB
sql = require('./db')

const login = require('./login')
const sign_up = require('./sign_up')
const request = require('./request')
const accept_request = require('./accept_request')
//rota para validação de conta
const confirm_account = require('./confirm_account')

const app = express()

//porta do servidor
const port = 80
app.set('port', port)

//acetar retorno en json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(confirm_account)
const server = http.createServer(app)
io = require('socket.io')(server)
console.log('[+] Server Running...')

sockets = []

io.on('connection', socket => {
    sockets.push(socket)
    socket.on('login', login)
    socket.on('sign_up', sign_up)
    socket.on('request', request)
    socket.on('accept_request', accept_request)
})

server.listen(port)
module.exports = app