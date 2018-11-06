const router = require("express").Router();
<<<<<<< HEAD
=======
<<<<<<< HEAD:routes2/api/index.js
const offerRoutes = require("./../api/offers");

// Offer Help routes
router.use("/jobs", offerRoutes);
=======
>>>>>>> 76d93d0961b146815f637961def7ab19e0f23390
// const offerRoutes = require("./offers");
const userRoutes = require("./userRoutes");

// Offer Help routes
// router.use("/", offerRoutes);
router.use("/users", userRoutes);
<<<<<<< HEAD
=======
>>>>>>> f3f33ee17da808d25ba41d6c29dc0f6b3a69657f:routes/api/index.js
>>>>>>> 76d93d0961b146815f637961def7ab19e0f23390

module.exports = router;
