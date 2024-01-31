const knex = require("knex")(require("../knexfile"));

const getAllProducts = async (_req, res) => {
  try {
    const data = await knex("products");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

const getProductbyId = async (req, res) => {
  try {
    const data = await knex("products").where({ id: req.params.productId });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

const getAllCommentsForProduct = async (req, res) => {
  try {
    const comments = await knex("products")
      .join("comments", "comments.product_id", "=", "products.id")
      .select("comments.*")
      .where({ "products.id": req.params.productId });

    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .send(
        `Unable to retrieve comments for product with ID ${req.params.productId}: ${error}`
      );
  }
};

const getUserForComment = async (req, res) => {
  try {
    const user = await knex("users")
      .join("comments", "comments.user_id", "=", "users.id")
      .select("users.*")
      .where({ "comments.id": commentId });

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .send(
        `Unable to retrieve user for comment with ID ${req.params.userId}: ${error}`
      );
  }
};

const AddComment = async (req, res) => {
  try {
    const { productId } = req.params;
    const commentData = {
      ...req.body,
      product_id: productId,
    };

    const comment = await knex("comments").insert(commentData);

    const newCommentId = comment[0];
    const addedComment = await knex("comments").where({
      id: newCommentId,
    });

    res.status(201).json(addedComment);
  } catch (error) {
    res
      .status(500)
      .send(
        `Unable to add new comment for product with ID ${req.params.productId}: ${error}`
      );
  }
};

module.exports = {
  getAllProducts,
  getProductbyId,
  getAllCommentsForProduct,
  AddComment,
  getUserForComment,
};
