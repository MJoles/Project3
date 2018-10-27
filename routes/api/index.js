const router = require("express").Router();
const offerRoutes = require("./offers");

// Book routes
router.use("/", offerRoutes);

module.exports = router;
