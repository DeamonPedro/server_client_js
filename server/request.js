requests = []

module.exports = (user_id,data,res)=>{
    //verifica a existência de todos parametros e se o usuario está logado
    if(data&&data.prod&&data.quant&&logged_users.includes(user_id)){
        var request_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        var request = {
            id          :request_id,
            lat         :data.lat,
            lng         :data.lng,
            client      :data.name,
            client_id   :user_id,
            prod        :data.prod,
            quant       :data.quant,
            attendant   :'null'
        }
        requests.push(request)
        for (id of logged_admins){
            io.in(id).emit('request', request);
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