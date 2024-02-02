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

const addComment = async (req, res) => {
  try {
    const commentData = {
      product_id: req.params.productId,
      user_id: req.body.user_id,
      title: req.body.title,
      comment: req.body.comment,
    };

    const result = await knex("comments").insert(commentData);

    const newCommentId = result[0];
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

const deleteComment = async (req, res) => {
  try {
    const rowsDeleted = await knex("comments")
      .where({ id: req.body.id })
      .delete();

    if (rowsDeleted === 0) {
      return res
        .status(404)
        .json({ message: `Comment with ID ${req.body.id} not found` });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: `Unable to delete comment: ${error}` });
  }
};

const addFavourite = async (req, res) => {
  try {
    const { productId } = req.params;
    const { userId } = req.user.id;

    const userExists = await knex("users").where({ id: userId }).first();
    const productExists = await knex("products")
      .where({ id: productId })
      .first();

    if (!userExists || !productExists) {
      return res.status(404).json({ message: "User or product not found." });
    }

    const favouriteData = {
      user_id: userId,
      product_id: productId,
    };

    const favourite = await knex("favorites").insert(favouriteData);

    const newFavouriteId = favourite[0];
    const addedFavourite = await knex("favourites").where({
      id: newFavouriteId,
    });

    res.status(201).json(addedFavourite);
  } catch (error) {
    res.status(500).send(`Unable to add product to favorites: ${error}`);
  }
};

module.exports = {
  getAllProducts,
  getProductbyId,
  getAllCommentsForProduct,
  addComment,
  deleteComment,
  getUserForComment,
  addFavourite,
};
