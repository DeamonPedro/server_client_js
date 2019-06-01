const http = require("http")
const express = require("express")
const debug = require("debug")

const port = 1010

function onerror(error){
    console.log(error)
}

const app = express()
app.set("port",port)
app.set("error",onerror)

const server = http.createServer(app)
const router = express.Router();

const route = router.get("/",(req,res,next)=>{
    res.status(200).send({
        status:"200",
        name: "pedro"
    })
})

app.use("/",route)
server.listen(port)
console.log("[+] Server Rdunning...")