const productController = require("../controllers/product-controller");
const router = require("express").Router();

router.route("/").get(productController.getAllProducts);

module.exports = router;
