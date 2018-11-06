const router = require("express").Router();
<<<<<<< HEAD:routes2/api/index.js
const offerRoutes = require("./../api/offers");

// Offer Help routes
router.use("/jobs", offerRoutes);
=======
// const offerRoutes = require("./offers");
const userRoutes = require("./userRoutes");

// Offer Help routes
// router.use("/", offerRoutes);
router.use("/users", userRoutes);
>>>>>>> f3f33ee17da808d25ba41d6c29dc0f6b3a69657f:routes/api/index.js

module.exports = router;
