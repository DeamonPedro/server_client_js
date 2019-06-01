const http = require("http")
const express = require("express")
const debug = require("debug")
const login = require("./login")

const port = 1010

const app = express()
app.set("port",port)
const server = http.createServer(app)

app.use("/",login)
server.listen(port)
console.log("[+] Server Running...")
module.exports = app