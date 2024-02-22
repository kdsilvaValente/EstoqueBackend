const { Router } = require("express");
const UserController = require("./Controllers/UserController");
const UserValidator = require("./Validators/UserValidator");

const rotas = Router();

//User
rotas.post("/user", UserValidator.create, UserController.create);
rotas.put("/user/:id", UserValidator.update, UserController.update);
rotas.get("/user", UserController.read);
rotas.get("/user/:id", UserValidator.read, UserController.readById);
rotas.delete("/user/:id", UserValidator.destroy, UserController.delete);

module.exports = rotas;
