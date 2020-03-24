const connection = require("../database/connection")


module.exports = { 
    async index(req,res){

        const {page = 1} = req.query

        const [count] = await connection("incidents").count() // mostrar o total de casos

        res.header("X-Total-Count", count["count(*)"])

        const incidents = await connection("incidents")
        .join("ongs", "ongs.id","=","incidents.ong_id")
        .limit(5) // limite de 5 incidentes por pagina
        .offset((page - 1 )*5)
        .select([
            "incidents.*",
            "ongs.name",
            "ongs.whatsapp",
            "ongs.city",
            "ongs.uf"
        ]);

        return res.json(incidents)
    },


    async create (req,res){
        const {title, description, values} = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection("incidents").insert({ // rertorna o id q foi gerado atraves desse cadastro
            title,
            description,
            values,
            ong_id,
        })
        
        return res.json({id})
    }, 

    async delete (req,res){
        const {id} = req.params;
        const ong_id = req.headers.authorization; // o incident q quer ser deletado ele vai ver se realmente o incidente criado foi realmente feito pela ONG antes de ser deletado
        
        const incident = await connection('incidents')
        .where("id",id)
        .select("ong_id")
        .first(); // ele vai retorna apenas um resultado ai usamos esse metodo first
        
        console.log("ATENCAO",incident)
        if(incident.ong_id != ong_id){
            return res.status(401).json({error:"Operação não Permitida"})
        }
        
        await connection("incidents").where("id", id).delete();

        return res.status(204).send();
    
    }
}