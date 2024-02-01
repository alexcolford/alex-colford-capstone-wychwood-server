const userController = require("../controllers/user-controller");
const router = require("express").Router();

router.route("/").get(userController.getAllUsers);

router.route("/register").post(userController.AddUser);

module.exports = router;
