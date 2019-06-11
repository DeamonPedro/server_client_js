requests = []

module.exports = (user_id,data,res)=>{
    //verifica a existência de todos parametros e se o usuario está logado
    if(data.prod&&data.quant&&logged_users.includes(user_id)){
        requests.push(data)
        for (id of logged_admins){
            io.in(id).emit('request', data);
        }
        return res({
            status:'Confirmed request'
        })
    }else{
        return res({
            error:'Invalid request'
        })
    }
}