const express = require("express");
const { getUserCart, addToCart, deleteFromCart } = require("../controllers/cart.controller");

const cartRouter = express.Router();

cartRouter.get("/:id", getUserCart);

cartRouter.post("/:id", addToCart);

cartRouter.delete("/:id/:productId", deleteFromCart);

module.exports = cartRouter;