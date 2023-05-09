const { CartModel } = require("../models/cart.model");

const postCartProduct = async (req, res) => {
  let obj = req.body;
  const {
    category,
    image,
    rating,
    price,
    reviews,
    sub_category,
    title,
    userID,
  }=obj
  try {
    const isProductExist= await CartModel.find({category,
      image,
      rating,
      price,
      reviews,
      sub_category,
      title,
      userID,})
    if(isProductExist.length>0){
      newData=isProductExist[0];
      const arr=isProductExist.map((el)=>el.quantity?el.quantity+1:el)
      newData.quantity=arr[0]
      const data = await CartModel.findByIdAndUpdate(newData._id, newData, {
        returnDocument: "after",
      });
      res.status(200).send({ mesg: `Product Added To cart`,data});
    }else{
      const userPost = new CartModel(obj);
      await userPost.save();
      res.status(200).send({ mesg: `Product Added To cart`, data: userPost });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
const getCartProduct = async (req, res) => {
  const filter = {};
  for (let i in req.body) {
    if (i === "userID") {
      filter.userID = req.body[i];
    }
  }
  try {
    const data = await CartModel.find(filter);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
const patchCartProduct = async (req, res) => {
    const { id } = req.params;
    console.log("param",req.params,"body",req.body)
    let {param} = req.body;
    try {
        const data = await CartModel.findByIdAndUpdate(id, param, {
            returnDocument: "after",
        });
        console.log("data",data);
        res.status(200).send({ mesg: `Updated the post successfully`, data: data });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
const deleteCartProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await CartModel.findByIdAndDelete(id);
      res.status(200).send({ mesg: `Deleted the post successfully`,data:data});
    } catch (error) {
      res.status(400).send({ error: error.message});
    }
  }
const emptyTheCart = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await CartModel.deleteMany({userID:id});
      res.status(200).send({ mesg: `Deleted the post successfully`});
    } catch (error) {
      res.status(400).send({ error: error.message});
    }
  }
module.exports = { postCartProduct, getCartProduct, patchCartProduct,deleteCartProduct,emptyTheCart };
