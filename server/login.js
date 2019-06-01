const express = require("express")

module.exports = express.Router().get("/",(req,res,next)=>{
    res.status(200).send({
        status:200
    })
})