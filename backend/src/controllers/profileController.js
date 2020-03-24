const connection = require("../database/connection")

module.exports={
    async index(req,res){
        const ong_id = req.headers.authorization

        const incidents = await connection("incidents")
        .where("ong_id",ong_id) // buscando os dados
        .select("*")

        return res.json(incidents)
    }
}

// LISTAR OS CASOS PELAS ONGS