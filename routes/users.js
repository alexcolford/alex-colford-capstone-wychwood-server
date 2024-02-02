const userController = require("../controllers/user-controller");
const router = require("express").Router();

router.route("/").get(userController.getAllUsers);

router.route("/register").post(userController.addUser);

router.route("/login").post(userController.loginUser);

router.route("/current").get(userController.currentUser);

router
  .route("/profile/:userId")
  .get(userController.getAllFavourites)
  .get(userController.getFavouritesForProduct)
  .post(userController.addFavourite);

module.exports = router;
