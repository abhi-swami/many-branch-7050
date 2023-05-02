const { default: mongoose } = require("mongoose");
require("dotenv").config();


const server = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(`server is running at port ${process.env.PORT_NUMBER}`);
  } catch (error) {
    console.log(error.message);
  }
};


module.exports=server;