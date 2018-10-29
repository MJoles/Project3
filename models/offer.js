const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  jobType: { type: String, required: true },
  jobDesription: { type: String, required: true },
  fee: { type: String, required: true },
  location: { type: String, required: true },
  //date: { type: Date, default: Date.now }
});

const Register = mongoose.model("Offer", offerSchema);

module.exports = Offer;
