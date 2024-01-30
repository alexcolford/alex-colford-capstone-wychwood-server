const productController = require("../controllers/product-controller");
const router = require("express").Router();

router.route("/").get(productController.getAllProducts);

router.route("/:productId").get(productController.getProductbyId);

module.exports = router;
