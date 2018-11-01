const router = require("express").Router();
const offerRoutes = require("./offers");

// Offer Help routes
router.use("/", offerRoutes);

module.exports = router;
