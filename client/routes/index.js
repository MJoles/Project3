const router = require("express").Router();
const jobRoutes = require("./jobRoutes");

// Book routes
router.use("/jobs", jobRoutes);

module.exports = router;
