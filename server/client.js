const net = require("net")
var client = net.connect(30)

client.on('data',function (data){
    console.log(data.toString())
})