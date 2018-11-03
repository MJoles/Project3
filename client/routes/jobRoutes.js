const router = require("express").Router();
const jobController = require("../controllers/jobController")


router.route("/jobs")
    .get(jobController.findAll);
router.route("/jobs")
    .post(jobController.create)