const UserModel = require("../Models/UserModel");

class UserController {
  async create(req, res) {
    const usuario = await UserModel.create(req.body);
    return res.status(200).json(usuario);
  }
  async update(req, res) {
    const { id } = req.params;
    await UserModel.findByIdAndUpdate(id);
    return res.status(200).json("informações do usuário atualizadas");
  }
  async read(req, res) {
    const usuario = await UserModel.find();
    return res.status(200).json(usuario);
  }
  async delete(req, res) {
    const { id } = req.params;

    await UserModel.findByIdAndDelete(id);
    return res.status(200).json("usuario deletado");
  }
  async readById(req, res) {
    const { id } = req.params;
    const usuario = await UserModel.findById(id);
    return res.status(200).json(usuario);
  }
}

module.exports = new UserController();
