const router = require("express").Router();
const jobController = require("../../client/controllers/jobController");

// Matches with "/api/offers"
router.route("/submit")
  .get(helpController.findAll)
  // .post(helpController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
