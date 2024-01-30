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
    const data = await knex("products").where({ id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

module.exports = {
  getAllProducts,
  getProductbyId,
};
