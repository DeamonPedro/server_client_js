const net = require("net");
var readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stduot    
})
net.createServer(function (connection){
    module.exports.connection = connection
}).listen(30)

readline.question(">", function (input){
    module.exports.connection.write(input)
    module.exports.fuct()
}) 