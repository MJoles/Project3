const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  //date: { type: Date, default: Date.now }
});

const Register = mongoose.model("Register", loginSchema);

module.exports = Register;
