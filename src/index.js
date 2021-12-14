const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const recruitController = require("./controllers/recruit.controller");

const app = express();

app.use(express.json());

// app.use("/users", userController) // /register /login
app.post("/register", register);
app.post("/login", login); // till not in use

app.use("/products", productController);
app.use("/recruits", recruitController);

module.exports = app;
