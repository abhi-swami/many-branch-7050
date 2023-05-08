const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    sub_category: { type: String },
    type: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    brand: { type: String },
  },
  { versionKey: false }
);

const OrderModel = model("product", orderSchema);

module.exports = { OrderModel };
