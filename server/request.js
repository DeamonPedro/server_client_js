const express = require("express")

module.exports = express.Router().post("/request",(req,res,next)=>{
    //verifica a existência de todos parametros (método POST)
    if(req.body.prod&&req.body.quant&&req.body.email&&req.body.key){
        sql.query(`SELECT * FROM users WHERE email = '${req.body.email}';`,function (error, results, fields){
            if(error) return res.status(200).send({
                "error":"Error while reguesting"
            })
            if(results.length==0) return res.status(200).send({
                "error":"Unregisted account"
            })
            if(logged_accounts[req.body.email]==req.body.key){
                return res.status(200).send({
                    "status":"Confirmed request"
                })
            }else{
                return res.status(200).send({
                    "error":"Invalid key"
                })
            }
        })
    }else{
        res.status(200).send({
            "error":"Invalid request"
        })
    }
})