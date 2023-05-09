import {
  Badge,
  Box,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { patchCartProduct } from "../../../Redux/Cart/cart.action";
import "../../CSS/CartItems.css";
import { patchCartProduct } from "../../Redux/Cart/cart.action.js";

const CartItems = ({
  _id,category,image,price,quantity,rating,reviews,sub_category,title,userID,handleRemove,
}) => {
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const handleQunatity = (num) => {
    setQty(num);
  };
  useEffect(() => {
    const updateQuantity={
      param:{
        quantity:Number(qty)
      }
    }
    dispatch(patchCartProduct(_id, updateQuantity));
  }, [qty]);

  return (
    <Box className="cart__main">
      <Box>
        <img src={image} alt="pic" />
      </Box>
      <Box mt={10}>
        <Text textAlign={"left"} py={2} fontSize={'15px'} fontWeight={500}>
          {title}
        </Text>

        <Box id="price">
          <Text fontSize={"15px"}>
            <b>₹{price.toLocaleString("en-IN")}</b>
          </Text>
          <Text>
            <s>₹{price.toLocaleString("en-IN")}</s>
          </Text>
          <Text>
            {Math.floor((1 -price / price) * 100)}% Off
          </Text>
        </Box>
        <Box className="btn__container">
          <Button variant={"ghost"}_hover={{backgroundColor:"none"}}>Select Quantity</Button>
          <Badge px={2} py={1} bgColor={"white"} fontWeight={"400"}>
            <NumberInput
              focusBorderColor="rgb(41,116,242)"
              defaultValue={1}
              max={10}
              min={1}
              keepWithinRange={true}
              clampValueOnBlur={true}
              maxW="100px"
              mr="2rem"
              value={qty}
              onChange={handleQunatity}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Badge>
        </Box>

        <Box className="btn__container">
          <Button>SAVE FOR LATER</Button>
          <Button onClick={() => handleRemove(_id)}>REMOVE</Button>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default CartItems;
