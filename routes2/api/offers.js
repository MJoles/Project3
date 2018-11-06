const router = require("express").Router();
const jobController = require("../../client/controllers/jobController");

// Matches with "/api/offers"
router.route("/")
  .get(jobController.findAll)
  .post(jobController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
