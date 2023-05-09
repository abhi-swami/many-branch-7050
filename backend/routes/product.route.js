const { Router } = require("express");
const productRouter = Router();
const {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getsubcategory
} = require("../controller/product.controller");

productRouter.get("/", getAllProducts);
productRouter.get("/subcategory", getsubcategory);
productRouter.get("/:id", getSingleProduct);

productRouter.post("/add", addProduct);

productRouter.patch("/update/:id", updateProduct);

productRouter.delete("/delete/:id", deleteProduct);

module.exports = { productRouter };
