const { Router } = require("express");
const UserController = require("./Controllers/UserController");

const rotas = Router();

//User
rotas.post("/user", UserController.create);
rotas.put("/user/:id", UserController.update);
rotas.get("/user", UserController.read);
rotas.get("/user/:id", UserController.readById);
rotas.delete("/user/:id", UserController.delete);

module.exports = rotas;
