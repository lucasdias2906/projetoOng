const express = require("express")
const cors = require("cors")
const routes = require("./routes")

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3334);

/**
 * tipos de parametros
 *
 *  query:  parametros nomeados enviados na rota apos ?  (filtros,paginação)
 *  routes params sao parametros utilizados pra identificar recursos
 *  body corpo da requisicao
 */