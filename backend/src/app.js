const express = require("express")
const cors = require("cors")
const { errors} = require("celebrate")
const routes = require("./routes")

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())


module.exports = app;

/**
 * tipos de parametros
 *
 *  query:  parametros nomeados enviados na rota apos ?  (filtros,paginação)
 *  routes params sao parametros utilizados pra identificar recursos
 *  body corpo da requisicao
 */