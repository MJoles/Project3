const router = require("express").Router();
const jobController = require("../controllers/jobController")


router.route("/jobs")
    .post(jobController.create)
    .get(jobController.findAll);

router.route("/findCarpenters")
    .get(jobController.findCarpentry)

router.route("/getElectricians")
    .get(jobController.findElectrician)

router.route("/getPlumbers")
    .get(jobController.findPlumbing)
    
router.route("/getYardworkers")
<<<<<<< HEAD
    .get(jobController.findYardwork);
=======
    .get(jobController.findYardwork)
>>>>>>> mandy

router.route("/view")
    .get(jobController.findAll);
    
module.exports = router;