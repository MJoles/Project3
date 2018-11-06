const path = require("path");
import axios from "axios"
const router = require("express").Router();
const apiRoutes = require("./api");
import User from "../models/register"

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// Route to post our form submission to mongoDB via mongoose

router.post("/users", function(req, res) {
  // Create a new user using req.body

  const user = new User(req.body);

  User.create(user)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});






module.exports = router;
