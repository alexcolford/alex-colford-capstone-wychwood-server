const userController = require("../controllers/user-controller");
const router = require("express").Router();

router.route("/").get(userController.getAllUsers);

module.exports = router;
