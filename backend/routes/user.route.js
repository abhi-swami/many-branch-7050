const { Router } = require("express");
const userRouter = Router();
const { signup, login } = require("../controller/user.controller");

userRouter.get("/", (req, res) => {
  res.status(200).send({ msg: `Home Page` });
});

userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = { userRouter };
