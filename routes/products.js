const productController = require("../controllers/product-controller");
const router = require("express").Router();

router.route("/").get(productController.getAllProducts);

router.route("/:productId").get(productController.getProductbyId);

router
  .route("/:productId/comments")
  .get(productController.getAllCommentsForProduct)
  .post(productController.addComment)
  .delete(productController.deleteComment);

module.exports = router;
