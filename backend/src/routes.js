const express = require("express")

const OngController = require("./controllers/OngController")
const incidentController = require("./controllers/IncidentsController")
const ProfileController = require("./controllers/profileController")
const SessionController = require("./controllers/sessionController")

const routes = express.Router()

routes.post("/sessions",SessionController.create)

routes.get("/ongs",OngController.index )
routes.post("/ongs", OngController.create)

routes.get("/profile",ProfileController.index )

routes.get("/incidents",incidentController.index )
routes.post("/incidents", incidentController.create)
routes.delete("/incidents/:id",incidentController.delete)

module.exports = routes