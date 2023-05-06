
const { Router } = require("express");

const { postCartProduct, getCartProduct, patchCartProduct, deleteCartProduct } = require("../controller/cart.controller.js");

const cart = Router();

cart.post("/add", postCartProduct);

cart.get("/", getCartProduct);

cart.patch("/:id", patchCartProduct);
cart.delete("/:id", deleteCartProduct);

module.exports = { cart };
