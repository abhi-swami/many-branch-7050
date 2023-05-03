const { ProductModel } = require("../models/product.model");

const getAllProducts = async (req, res) => {
  const { title, sort, page = 1 } = req.query;
  const limit = 10;
  const skip = (page - 1) * limit;
  try {
    const filter = {};
    if (title !== undefined) {
      filter.title = { $regex: new RegExp(title, "i") };
    }
    const sortOptions = {};
    if (sort === "low") {
      sortOptions.price = 1;
    } else if (sort === "high") {
      sortOptions.price = -1;
    }
    const count = await ProductModel.countDocuments(filter);
    const products = await ProductModel.find(filter)
      .sort(sortOptions)
      .limit(limit)
      .skip(skip)
      .exec();
    res.send({
      products,
      currentPage: parseInt(page),
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const addProduct = async (req, res) => {
  
};

const updateProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };
