const router = require("express").Router();
const jobRoutes = require("./jobRoutes");

// Book routes
router.use("/newjob", jobRoutes);

module.exports = router;
