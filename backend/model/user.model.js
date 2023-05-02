const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {type:String,isrequired:true},
    password: {type:String,isrequired:true},
    location: {type:String,isrequired:true},
    age: {type:Number,isrequired:true},
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
