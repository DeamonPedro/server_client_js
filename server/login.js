logged_users = []
logged_admins = []

module.exports = (user_id, data, res) => {
    //verifica se todos os parametros foram recebidos
    if (data && data.email && data.pass) {
        //busca por senha do email do parametro no DB
        sql.query(`SELECT pass FROM ${data.privilege}s WHERE email = '${data.email}';`, function (error, results, fields) {
            if (error) return res({
                error: "Error while validating"
            })
            //se o DB não retornar nada a conta não existe
            if (results.length == 0) return res({
                error: 'The account does not exist'
            })
            if (results[0].pass == data.pass) {
                if (data.privilege == 'user') {
                    logged_users.push(user_id)
                } else if (data.privilege == 'admin') {
                    logged_admins.push(user_id)
                    for (request of requests) {
                        io.in(user_id).emit('request', request)
                    }
                }
                return res({
                    status: 'Logged'
                })
            } else {
                res({
                    error: 'Wrong password'
                })
            }
        })
    } else {
        return res({
            error: 'Incomplete login'
        })
    }
}