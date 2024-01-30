const knex = require("knex")(require("../knexfile"));

const getAllComments = async (_req, res) => {
  try {
    const data = await knex("comments");
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

module.exports = {
  getAllComments,
  getAllCommentsForProduct,
};
