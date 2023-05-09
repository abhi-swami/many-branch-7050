const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    title: { type: String, required: false },
    image: { type: String, required: false },
    price: { type: Number, required: false },
    category: { type: String, required: false },
    sub_category: { type: String },
    type: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    brand: { type: String },
    userID: String,
    quantity: Number,
  },
  { versionKey: false }
);

const OrderModel = model("order", orderSchema);
// const OrderModel = model("product", orderSchema);

module.exports = { OrderModel };
