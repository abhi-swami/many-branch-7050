const { OrderModel } = require("../models/order.model.js");

const postOrder = async (req, res) => {
  let obj = req.body;
  if (obj.length === undefined || obj.length === 1) {
    try {
        const order = new OrderModel(obj);
        await order.save();
        res.status(200).send({ mesg: `Order placed Successfully`, data: order });
      
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  } else {
    try {
      const order=await PlayerModel.insertMany(obj);
      res.status(200).send({ mesg: `All Orders placed successfully`,data:order });
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
  }
  
  
};
const getOrder= async (req, res) => {
  const filter = {};
  for (let i in req.body) {
    if (i === "userID") {
      filter.userID = req.body[i];
    }
  }
  try {
    const data = await OrderModel.find(filter);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
const patchOrder = async (req, res) => {
    const { id } = req.params;
    console.log("param",req.params,"body",req.body)
    let {param} = req.body;
    try {
        const data = await OrderModel.findByIdAndUpdate(id, param, {
            returnDocument: "after",
        });
        console.log("data",data);
        res.status(200).send({ mesg: `Updated the post successfully`, data: data });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
const deleteOrder= async (req, res) => {
    const { id } = req.params;
    try {
      const data = await OrderModel.findByIdAndDelete(id);
      res.status(200).send({ mesg: `Deleted the post successfully`,data:data});
    } catch (error) {
      res.status(400).send({ error: error.message});
    }
  }

module.exports = { postOrder, getOrder, patchOrder,deleteOrder };
