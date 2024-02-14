const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://kdsilva:Estoque1414@estoque.zynubit.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("mongodb conectado!");
}

module.exports = startDB;
