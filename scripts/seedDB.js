const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Jobs collection and inserts the jobs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/joblist"
);

const jobSeed = [
  {
    yardwork: "true",
    carpentry: "false",
    plumbing: "true",
    electrician: "false",
    jobDetails: "Yardwork including mowing grass, raking leaves and shoveling snow. Plumbing skills are beginner level.",
    city: "Chicago",
    state: "Illinois",
    email: "johnjones@gmail.com",
    date: new Date(Date.now())
  },
  {
    yardwork: "true",
    carpentry: "false",
    plumbing: "false",
    electrician: "false",
    jobDetails: "Willing to provide any yardwork service including but not limited to raking leaves, mowing grass, shoveling snow and dog waste removal.",
    city: "Chicago",
    state: "Illinois",
    email: "johnjones@gmail.com",
    date: new Date(Date.now())
  },
  {
    yardwork: "false",
    carpentry: "true",
    plumbing: "true",
    electrician: "true",
    jobDetails: "Various skill sets in plumbing, carpentry as well as electrical. Able to mount TVS and any at home handyman project.",
    city: "Chicago",
    state: "Illinois",
    email: "johnjones@gmail.com",
    date: new Date(Date.now())
  },
  {
    yardwork: "true",
    carpentry: "false",
    plumbing: "true",
    electrician: "false",
    jobDetails: "Yardwork including mowing grass, raking leaves and shoveling snow. Plumbing skills are beginner level.",
    city: "Chicago",
    state: "Illinois",
    email: "johnjones@gmail.com",
    date: new Date(Date.now())
  },
  {
    yardwork: "true",
    carpentry: "false",
    plumbing: "true",
    electrician: "false",
    jobDetails: "Yardwork including mowing grass, raking leaves and shoveling snow. Plumbing skills are beginner level.",
    city: "Chicago",
    state: "Illinois",
    email: "johnjones@gmail.com",
    date: new Date(Date.now())
  },
  // {
  //   yardwork: "",
  //   carpentry: "",
  //   plumbing: "",
  //   electrician: "",
  //   jobDetails: "",
  //   city: "",
  //   state: "",
  //   date: new Date(Date.now())
  // }
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
