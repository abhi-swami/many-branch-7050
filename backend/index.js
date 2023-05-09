const express = require("express");
const server = require("./config/db.js");
const { auth } = require("./middleware/auth.middleware.js");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { productRouter } = require("./routes/product.route.js");
const { userRouter } = require("./routes/user.route.js");
const { cart } = require("./routes/cart.routes.js");
const { order } = require("./routes/order.routes.js");

app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.use("/products", productRouter);
app.use(auth);
app.use("/cart", cart);
app.use("/order", order);

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running at Port ${process.env.PORT_NUMBER}`);
  server();
});
