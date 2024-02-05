const userController = require("../controllers/user-controller");
const router = require("express").Router();

router.route("/").get(userController.getAllUsers);

router.route("/register").post(userController.addUser);

router.route("/login").post(userController.loginUser);

router.route("/current").get(userController.currentUser);

router
  .route("/profile/:userId")
  .get(userController.getFavouritesForProduct)
  .delete(userController.deleteUser);

router.route("/:userId/edit").patch(userController.updateUser);

module.exports = router;
