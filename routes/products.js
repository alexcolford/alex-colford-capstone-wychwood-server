const productController = require("../controllers/product-controller");
const router = require("express").Router();

router.route("/").get(productController.getAllProducts);

router.route("/:id").get(productController.getProductbyId);

module.exports = router;
