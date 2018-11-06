const router = require("express").Router();
const jobRoutes = require("./jobRoutes");
const userRoutes = require("./userRoutes");
const path = require("path");

router.use(jobRoutes);
router.use(userRoutes);

module.exports = router;
