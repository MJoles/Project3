const router = require("express").Router();
const jobController = require("../controllers/jobController")


router.route("/jobs")
    .post(jobController.create)
    .get(jobController.findAll);


router.route("/view")
    .get(jobController.findAll);
    
module.exports = router;