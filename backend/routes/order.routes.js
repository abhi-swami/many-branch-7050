
const { Router } = require("express");

const { postOrder, getOrder, patchOrder,deleteOrder } = require("../controller/order.controller");

const order = Router();

order.post("/add", postOrder);
order.get("/", getOrder);
order.patch("/:id", patchOrder);
order.delete("/:id", deleteOrder);

module.exports = { order };
