const { ProductModel } = require("../models/product.model");

const getAllProducts = async (req, res) => {
  // const q = req.query;
  // console.log(q);
  // try {
  //   const products = await ProductModel.find(q);
  //   res.status(200).send(products);
  // } catch (error) {
  //   res.status(400).send(error);
  // }

  try {
    //  query
    const {
      category,
      sub_category,
      title,
      minPrice,
      maxPrice,
      rating,
      sortByPrice,
      brand,
      type,
      sortByRating,
    } = req.query;
    const query = {};

    if (category) query.category = category || {};
    if (sub_category) query.sub_category = sub_category || {};
    if (brand) query.brand = brand;
    if (type) query.type = type;
    if (title) query.title = new RegExp(title, "i") || {}; // case-insensitive search

    //filter by price
    if (minPrice && maxPrice) {
      query.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    } else if (minPrice) {
      query.price = { $gte: Number(minPrice) };
    } else if (maxPrice) {
      query.price = { $lte: Number(maxPrice) };
    }

    if (rating) query.rating = Number(rating);

    //  sorting by price
    const sort = {};
    if (sortByPrice === "asc") {
      sort.price = 1;
    } else if (sortByPrice === "desc") {
      sort.price = -1;
    }

    // sorting by rating

    if (sortByRating === "asc") {
      sort.rating = 1;
    } else if (sortByRating === "desc") {
      sort.rating = -1;
    }

    const products = await ProductModel.find(query).sort(sort);

    if (products.length === 0) {
      res.status(404).send({ message: "Product not available" });
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const note = new ProductModel(req.body);
    await note.save();
    res
      .status(200)
      .send({ message: `New Product (${req.body.title}) has been added` });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send("Products has been Updated");
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send("Products has been Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };
