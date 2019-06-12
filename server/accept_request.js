module.exports = (user_id, data, res) => {
    if (data && data.id && data.attendant && data.client_id) {
        for (count in requests) {
            if (requests[count].id == data.id) {
                requests[count].attendant = data.attendant
            }
        }
        io.to(data.client_id).emit('confirmation', data.attendant)
        res({
            status: 'ok'
        })
    } else {
        res({
            error: 'Invalid datas'
        })
    }
}