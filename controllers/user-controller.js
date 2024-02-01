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

const LoginUser = async (req, res) => {
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

  res.json({ token: token });
};

const CurrentUser = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  console.log("Token", req.headers.authorization);

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

module.exports = {
  getAllUsers,
  AddUser,
  LoginUser,
  CurrentUser,
};
