const socket = require('socket.io-client')('http://127.0.0.1')

const data = {
    privilege:'admin',
    name:'pedro',
    email:'example@gmail.com',
    pass:'profano'
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
        var send = data
        if(input.toString().includes('2')){
            console.log('2')
            send = requests[0]
            send.attendant = data.name
        }
        socket.emit(subs[parseInt(input.toString())-1],socket.id,send, function (res) {
            console.log(res);
        });
});