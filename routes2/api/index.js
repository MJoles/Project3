const router = require("express").Router();
const offerRoutes = require("./../api/offers");

// Offer Help routes
router.use("/jobs", offerRoutes);

module.exports = router;
