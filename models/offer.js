const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  jobType: { type: String, required: true },
  jobDesription: { type: String, required: true },
 // fee: { type: Number, required: true },
 // location: { type: String, required: true },
  "jobs": {
  "yardwork": true,
  "carpentry": true,
  "plumbing": true,
  "electrician": true
},
  date: { type: Date, default: Date.now }
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
