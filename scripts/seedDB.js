const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Jobs collection and inserts the jobs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/joblist"
);

const jobSeed = [
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  },
  {
    jobType: "",
    jobDescription: "",
    fee: "",
    location: "",
    date: new Date(Date.now())
  }
];

db.Offer
  .remove({})
  .then(() => db.Offer.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
