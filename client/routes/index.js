const router = require("express").Router();
const jobRoutes = require("./jobRoutes");
const path = require("path");


// Book routes
router.use("/jobs", jobRoutes);

module.exports = router;
