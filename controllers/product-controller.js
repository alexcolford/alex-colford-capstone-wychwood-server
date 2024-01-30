const knex = require("knex")(require("../knexfile"));

const getAllProducts = async (_req, res) => {
  try {
    const data = await knex("products");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

module.exports = {
  getAllProducts,
};
