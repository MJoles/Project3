const router = require("express").Router();
const helpController = require("../../controllers/helpController");

// Matches with "/api/offers"
router.route("/needhelp")
  .get(helpController.findAll)
  .post(helpController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
