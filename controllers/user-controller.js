const knex = require("knex")(require("../knexfile"));

const getAllUsers = async (_req, res) => {
  try {
    const data = await knex("users");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

const getUserForComment = async (req, res) => {
  try {
    const user = await knex("users")
      .join("comments", "comments.user_id", "=", "users.id")
      .select("users.*")
      .where({ "comments.id": req.params.id });

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .send(
        `Unable to retrieve user for comment with ID ${req.params.userId}: ${error}`
      );
  }
};

module.exports = {
  getAllUsers,
  getUserForComment,
};
