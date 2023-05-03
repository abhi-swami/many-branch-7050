const { Router } = require("express");
const productRouter = Router();
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

productRouter.get("/", getAllProducts);

productRouter.post("/add", addProduct);

productRouter.patch("/update/:id", updateProduct);

productRouter.delete("/delete/:id", deleteProduct);

module.exports = { productRouter };
