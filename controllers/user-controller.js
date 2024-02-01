const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/authorize");

const getAllUsers = async (_req, res) => {
  try {
    const data = await knex("users");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

const AddUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  try {
    await knex("users").insert(newUser);

    res.status(201).send("Registered Successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed Registration");
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
  AddUser,
};
