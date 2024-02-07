const mongoose = require("mongoose");

async function startDB() {
  await mongoose.conect(
    "mongodb+srv://kdsilva:<estoque1414>@estoque.zynubit.mongodb.net/?retryWrites=true&w=majority"
  );
}

module.exports = startDB;
