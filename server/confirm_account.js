const express = require("express")

module.exports = express.Router().get("/confirm_account",(req,res,next)=>{
    //verifica se o parametro id (método GET) é nulo e se ela está ligada a uma conta em espera de validação
    if(req.query.code&&no_confirmed_accounts[req.query.code]){
        var user = no_confirmed_accounts[req.query.code]
        //insere dados no DB
        sql.query("INSERT INTO users(name,email,pass,lat,lng) VALUES ('"+user.name+"','"+user.email+"','"+user.pass+"','"+user.lat+"','"+user.lng+"')",function (error, results, fields){
            if(error) return res.status(200).send({
                "error":"Error while registering"
            })
            res.status(200).send("<p>Ativada<p>")
            //tira email e link de validação de funcionamento
            delete no_confirmed_accounts[req.query.code]
        })
    }else{
        res.status(404).send({
            "error":"Not Found"
        })
    }
})