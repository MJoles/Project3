const router = require("express").Router();
const jobController = require("../controllers/jobController")


router.route("/newjob")
    .post(jobController.create)
    .get(jobController.findAll);


module.exports = router;