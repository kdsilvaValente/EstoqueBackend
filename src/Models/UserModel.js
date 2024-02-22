const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    password: String,
    type: String,
    office: String,
  },
  { versionKey: false } //retira o __v
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
