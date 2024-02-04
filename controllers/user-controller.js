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

const addUser = async (req, res) => {
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  const user = await knex("users").where({ email: email }).first();

  if (!user) {
    return res.status(400).send("Invalid email");
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  res.json({ token: token, id: user.id });
};

const currentUser = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Please provide a valid token");
  }

  const authToken = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_KEY);
    console.log("Decoded", decoded);

    const user = await knex("users").where({ id: decoded.id }).first();

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    delete user.password;

    res.json(user);
  } catch (error) {
    console.log("Invalid auth token: ", error);
  }
};

const getFavouritesForProduct = async (req, res) => {
  try {
    const favourites = await knex("products")
      .join("favourites", "favourites.product_id", "=", "products.id")
      .select("favourites.*")
      .where({ "products.id": req.params.productId });

    res.status(200).json(favourites);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const rowsDeleted = await knex("users")
      .where({ id: req.params.userId })
      .delete();

    if (rowsDeleted === 0) {
      return res
        .status(404)
        .json({ message: `User with ID ${req.params.userId} not found` });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: `Unable to delete user: ${error}` });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  loginUser,
  currentUser,
  deleteUser,
  getFavouritesForProduct,
};
