const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length !== 0) {
      res.send({ msg: `user already registered` });
    } else {
      bcrypt.hash(password, 1, (err, hash) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          const user = new UserModel({ ...req.body, password: hash });
          user.save();
          res.status(200).send({ msg: `user registered successfully` });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const arr = await UserModel.find({ email });
    if (arr.length === 0) {
      res.status(400).send({
        msg: `Unable find user with given email, please login first`,
      });
    } else {
      let ary = arr.map((el) => (el.password ? el.password : null));
      let userid = arr.map((el) => (el._id ? el._id : null));
      bcrypt.compare(password, ary[0], (err, result) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else if (result) {
          res.status(200).send({
            msg: `User logged in successfully`,
            token: jwt.sign({ userId: userid[0] }, "swami", {
              expiresIn: "1h",
            }),
          });
        } else {
          res.status(400).send({
            error: `Invalid password, please enter a correct password`,
          });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { signup, login };
