const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//SignUP

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    //check user is already created account or not
    if (user.length !== 0) {
      res.send({ message: `User already registered` });
    } else {
      //First hashing then save
      bcrypt.hash(password, 1, async (err, hash) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          const user = new UserModel({ ...req.body, password: hash });
          await user.save();
          res.status(200).send({ message: `New User Has Been Registered` });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//Login
//Login
//Login
//Login
//Login

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        message: "Invalid email, please Signup first",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ userID: user._id }, "amaze", { expiresIn: "12 hr" });
    res.status(200).send({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { signup, login };
