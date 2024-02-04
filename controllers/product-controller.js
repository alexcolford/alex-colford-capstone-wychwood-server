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
    console.log(
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
    console.log(
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

    res.status(201).json(result);
  } catch (error) {
    console.log(
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
    console.log("Unable to add comment:", error);
  }
};

const addFavourite = async (req, res) => {
  try {
    const alreadyFavourited = await knex("favourites")
      .where({ user_id: req.body.user_id, product_id: req.params.productId })
      .first();

    if (alreadyFavourited) {
      res.status(404).json({ error: "Product is already favourited" });
    } else {
      await knex("favourites").insert({
        user_id: req.body.user_id,
        product_id: req.params.productId,
        is_favourited: true,
      });
    }
    res.status(200).json({ message: "Product added to favourites" });
  } catch (error) {
    console.log("Error adding product to favorites:", error);
  }
};

const deleteFavourite = async (req, res) => {
  try {
    const alreadyFavourited = await knex("favourites")
      .where({ user_id: req.body.user_id, product_id: req.params.productId })
      .first();

    if (alreadyFavourited) {
      await knex("favourites")
        .where({ user_id: req.body.user_id, product_id: req.params.productId })
        .delete();

      res.status(200).json({ message: "Product removed from favourites" });
    } else {
      res.status(404).json({ error: "Product is not favourited" });
    }
  } catch (error) {
    console.error("Error removing product from favorites:", error);
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
  deleteFavourite,
};
