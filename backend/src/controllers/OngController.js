const crypto = require("crypto")
const connection = require("../database/connection")

module.exports = {
    async index(req,res){
        const ongs = await connection("ongs").select("*") // aguarda a prox query
   
        return res.json(ongs);
    },
    
    async create(req,res){
        const {name,email,whatsapp,city,uf} = req.body;

    const id =  crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({ // quando ele chegar aqui ele vai aguardar(await) pra entao ele continuar
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })
    return res.json({id})
    }
}