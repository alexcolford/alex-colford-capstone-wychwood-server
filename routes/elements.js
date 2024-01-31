const elementController = require("../controllers/element-controller");
const router = require("express").Router();

router.route("/").get(elementController.getAllElements);

module.exports = router;
