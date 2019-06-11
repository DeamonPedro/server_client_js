const socket = require('socket.io-client')('http://127.0.0.1')

const data = {
    privilege:'user',
    name:'pedro25',
    email:'example25@gmail.com',
    pass:'profano25',
    lat:-33.000000,
    lng:33.000000,
    prod:'aqua',
    quant:11
}
socket.on('confirmation',(data) => {
    console.log('entregador :',data)
})

subs = ['login','sign_up','request']

var stdin = process.openStdin();
console.log(subs)
stdin.addListener('data', function(input) {
        console.log(subs)
        socket.emit(subs[parseInt(input.toString())-1],socket.id,data, function (res) {
            console.log(res);
        });
});