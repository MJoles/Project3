const router = require("express").Router();
const jobController = require("../../client/controllers/jobController");

// Matches with "/api/offers"
<<<<<<< HEAD:routes2/api/offers.js
router.route("/")
  .get(jobController.findAll)
  .post(jobController.create);
=======
router.route("/submit")
  .get(helpController.findAll)
  // .post(helpController.create);
>>>>>>> f3f33ee17da808d25ba41d6c29dc0f6b3a69657f:routes/api/offers.js

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
