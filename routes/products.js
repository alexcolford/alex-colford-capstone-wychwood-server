const productController = require("../controllers/product-controller");
const router = require("express").Router();

router.route("/").get(productController.getAllProducts);

router.route("/:productId").get(productController.getProductbyId);

router
  .route("/:productId/comments")
  .get(productController.getAllCommentsForProduct)
  .get(productController.getUserForComment)
  .post(productController.AddComment);

module.exports = router;
