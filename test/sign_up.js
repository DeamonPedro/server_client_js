//dicionario de contas esperando validação
no_confirmed_accounts = {}

module.exports = (user_id,data,res)=>{
    //verifica se todos os parametros foram recebidos
    if(data.name&&data.email&&data.pass&&data.lat&&data.lng){
        //verifica o email atual já solicitou validação
        for(var key in no_confirmed_accounts){
            if(no_confirmed_accounts[key].email == data.email) return res({
                error:"This email is already awaiting validation"
            })
        }
        //verifica se o email já foi registrado
        sql.query(`SELECT * FROM users WHERE email = '${data.email}';`,function (error, results, fields){
            if(error) return res({
                error:"Error while validating"
            })
            if(results.length>0) return res({
                error:"E-mail already registered"
            })
            //cria string aleatoria para link de validação de conta
            var random_code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            //adiciona a um dicionario de contas esperando validação
            no_confirmed_accounts[random_code+""] = {
                name : data.name,
                email : data.email,
                pass : data.pass,
                lat : data.lat,
                lng : data.lng
            }
            res({
                status:"Waiting Validation",
                code:random_code+""
            })
        })
    }else{
        return res({
            "error":"Invalid datas"
        })
    }
}