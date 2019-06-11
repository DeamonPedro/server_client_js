const express = require("express")

//dicionario de contas esperando validação
no_confirmed_accounts={}

module.exports = express.Router().post("/sign_up",(req,res,next)=>{
    //verifica se todos os parametros (método POST) foram recebidos
    if(req.body.name&&req.body.email&&req.body.pass&&req.body.lat&&req.body.lng){
        //verifica o email atual já solicitou validação
        for(var key in no_confirmed_accounts){
            if(no_confirmed_accounts[key].email == req.body.email) return res.status(200).send({
                "error":"This email is already awaiting validation"
            })
        }
        //verifica se o email já foi registrado
        sql.query(`SELECT * FROM users WHERE email = '${req.body.email}';`,function (error, results, fields){
            if(error) return res.status(200).send({
                "error":"Error while validating"
            })
            if(results.length>0) return res.status(200).send({
                "error":"E-mail already registered"
            })
            //cria string aleatoria para link de validação de conta
            var random_code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            //adiciona a um dicionario de contas esperando validação
            no_confirmed_accounts[random_code+""] = {
                name : req.body.name,
                email : req.body.email,
                pass : req.body.pass,
                lat : req.body.lat,
                lng : req.body.lng
            }
            res.status(200).send({
                "status":"Waiting Validation",
                "code":random_code+""
            })
        })
    }else{
        res.status(200).send({
            "error":"Invalid datas"
        })
    }
})