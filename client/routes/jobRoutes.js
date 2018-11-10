const router = require("express").Router();
const jobController = require("../controllers/jobController")


router.route("/jobs")
    .post(jobController.create)
    .get(jobController.findAll);

router.route("/findCarpenters")
    .get(jobController.findCarpentry)

router.route("/findElectricians")
    .get(jobController.findElectrician)

router.route("/findPlumbers")
    .get(jobController.findPlumbing)
    
router.route("/findYardworkers")
    .get(jobController.findYardwork);

router.route("/view")
    .get(jobController.findAll);
    
module.exports = router;