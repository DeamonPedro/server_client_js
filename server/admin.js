const socket = require('socket.io-client')('http://127.0.0.1')

const data = {
    privilege:'admin',
    name:'pedro',
    email:'example@gmail.com',
    pass:'profano',
}

subs = ['login','accept_request']

requests = []

socket.on('request',data => {
    console.log('pedido:',data)
    requests.push(data);
})

var stdin = process.openStdin();
console.log(subs)
stdin.addListener('data', function(input) {
        console.log(subs)
        socket.emit(subs[parseInt(input.toString())-1],socket.id,data, function (res) {
            console.log(res);
        });
});