const userController = require("../controllers/user-controller");
const router = require("express").Router();

router.route("/").get(userController.getAllUsers);

router.route("/register").post(userController.AddUser);

router.route("/login").post(userController.LoginUser);

router.route("/current").get(userController.CurrentUser);

module.exports = router;
