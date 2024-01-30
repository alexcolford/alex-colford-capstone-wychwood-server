const commentController = require("../controllers/comment-controller");
const router = require("express").Router();

router.route("/").get(commentController.getAllComments);

router
  .route("/products/:productId/comments")
  .get(commentController.getAllCommentsForProduct);

module.exports = router;
