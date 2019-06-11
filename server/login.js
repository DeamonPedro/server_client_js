const express = require("express")

logged_accounts = {}

module.exports = express.Router().post("/login",(req,res,next)=>{
    //verifica se todos os parametros (método POST) foram recebidos
    if(req.body.email&&req.body.pass){
        //busca por senha do email do parametro no DB
        sql.query(`SELECT pass FROM users WHERE email = '${req.body.email}';`, function (error, results, fields){
            if(error) return console.log(error)
            //se o DB não retornar nada a conta não existe
            if (results.length==0) return res.status(200).send({
                "error":"The account does not exist"
            })
            if (results[0].pass == req.body.pass){
                var user_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                res.status(200).send({
                    "key": user_key
                })
                logged_accounts[req.body.email] = user_key
                return
            }
        })
    }else{
        res.status(200).send({
            "error":"Incomplete login"
        })
    }
})