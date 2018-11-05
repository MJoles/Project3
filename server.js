const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
//const routes = require("./routes");

const User = require("./client/src/models/register");

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
//app.use(routes);
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use()
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/joblist");

// Define middleware here
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//--//////// Ends mongo exercise (Removed the server)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> App running on port ${PORT}!`);
});
