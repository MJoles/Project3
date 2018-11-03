const router = require("express").Router();
// const offerRoutes = require("./offers");
const userRoutes = require("./userRoutes");

// Offer Help routes
// router.use("/", offerRoutes);
router.use("/users", userRoutes);

module.exports = router;
