const favouriteController = require("../controllers/favourite-controller");
const router = require("express").Router();

router.route("/").get(favouriteController.getAllFavourites);

module.exports = router;
