import { useDisclosure, useToast } from "@chakra-ui/react";
import { useState,useContext, useEffect,useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import useRazorpay from 'react-razorpay'
import CartItems from "../../Components/Cart/CartItems.jsx";
import "../../CSS/Cart.css";
import {
  getCartProducts,
  deleteCartProduct,
} from "../../Redux/Cart/cart.action.js";
import Address from "../../Components/Cart/Address.jsx"

const Cart = () => {
  const { data } = useSelector((store) => store.cartReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const Razorpay = useRazorpay()
  const navigate = useNavigate();
  const [userAddress,setUserAddress]=useState()

  // variable data such as price,quantity,discount etc.
  let totalQuantity = data
    .map((el) => el.quantity)
    .reduce((el, sum) => el + sum, 0);

  let price1 = data.map((el) => el.price * el.quantity);
  let TotalOriginalPrice = price1.reduce((res, sum) => res + sum, 0);
  let totalOriginalPrice = TotalOriginalPrice.toLocaleString("en-IN");

  let price2 = data.map((el) => el.price * el.quantity);
  let TotalCurrentlPrice = price2.reduce((res, sum) => res + sum, 0);
  let totalCurrentlPrice = TotalCurrentlPrice.toLocaleString("en-IN");

  //discount price
  let discountPrice = TotalOriginalPrice - TotalCurrentlPrice;
  discountPrice = discountPrice.toLocaleString("en-IN");

  useEffect(() => {
    if (data.length >= 0) {
      dispatch(getCartProducts());
    }
  }, []);
  const handleSubmit=(obj)=>{
    setUserAddress({...obj})
    onClose()
    handlePayment(TotalOriginalPrice)
  }
  const handleRemove = (id) => {
    dispatch(deleteCartProduct(id)).then(() =>
      toast({
        title: "Item Removed!",
        description: "Item has been removed from the cart.",
        status: "success",
        duration: 6000,
        isClosable: true,
      })
    );
  };
  const handlePayment = useCallback(
    async (totalAmount) => {
      console.log(totalAmount)
      const options = {
        key: 'rzp_test_Q6qLBPFz8pzc23',
        amount: Number(totalAmount*100),
        // amount: totalprice * 100,
        currency: 'INR',
        name: 'Amaze',
        description: 'Payment Getway',
        image: 'https://example.com/your_logo',
        
        handler:  (response)=> {
          console.log("res",response)
          navigate("/")
         
        },
        prefill: {
          name: userAddress?.name,
          contact: userAddress?.phone,
        },
        notes: {
          address: 'Amaze Corporation',
        },
        theme: {
          color:"#F79401",
        },
      }      
      const rzpay = new Razorpay(options);
      rzpay.open()
    },
    [Razorpay]
  )

  console.log("data", data);
  return (
    <div className="cart__container__main">
      <div className="cart__container__product">
        <div id="cart__box1">
          <div>
            <p href="/#">Shopping Cart </p>
          </div>
        </div>

      

        <div className="cart__components__container">
          {data.map((item) => (
            <CartItems key={item._id} {...item} handleRemove={handleRemove} />
          ))}
         
        </div>
      </div>
      <div className="cart__container__price">
        <div>PRICE DETAILS</div>
        <div className="cart_price">
          <div>
            <p>Price {totalQuantity} items</p>
            <p>₹ {totalOriginalPrice}</p>
          </div>
          <div>
            <p>Discount</p>
            <p>− ₹ {discountPrice}</p>
          </div>
          <div>
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <div>
            <p>Total Amount</p>
            <p>₹ {totalCurrentlPrice}</p>
          </div>
          <div>
            <p></p>
          </div>
          <div >
            <button onClick={onOpen}>PLACE ORDER</button>
          </div>
        </div>
      </div>
      {isOpen && <Address isOpen={isOpen} onOpen={onOpen} onClose={onClose}  handleSubmit={handleSubmit}/>}
    </div>
  );
};

export default Cart;
