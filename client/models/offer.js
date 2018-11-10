const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
 // fee: { type: Number, required: true },
 // location: { type: String, required: true },
  yardwork: { type: Boolean },
  carpentry: { type: Boolean },
  plumbing: { type: Boolean },
  electrician: { type: Boolean },
  jobDetails: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  state: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
