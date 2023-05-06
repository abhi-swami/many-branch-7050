import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { IoMdShareAlt } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import Styles from "../../CSS/SingleProductPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Redux/Search/search.action";
import ManualCarousels from "../../Carouseles/OfferCarousels";
import { offers, statistics } from "../../Utils/SingleProduct";
import StatsCarousels from "../../Carouseles/StatsCarousels";

const SingleProduct = () => {
  const { productId } = useParams();
  const {
    id,
    brand,
    category,
    image,
    rating,
    price,
    reviews,
    sub_category,
    title,
  } = useSelector((store) => store?.searchReducer?.singleProduct);
  const [data, setData] = useState([]);
  const [star, setStar] = useState([]);
  const [singleData, setSingleData] = useState([]);
  // const { cardProucts } = useContext(CartContext);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCart = () => {
    // if (user) {
    //   const payload = { ...data, quantity: 1 };
    //   dispatch(PostCartProduct(payload))
    //     .then(() => cardProucts())
    //     .then(() => navigate("/cart"))
    //     .catch((err) =>
    //       toast({
    //         position: `top`,
    //         title: `Oppps unable to add product`,
    //         description: err,
    //         status: "error",
    //         duration: 2000,
    //         isClosable: true,
    //       }).then(() => navigate("/cart"))
    //     );
    // } else {
    //   onOpen();
    // }
  };

  const handleBuy = () => {
    toast({
      title: "Redirect to checkout",
      description: "Okey. Redirecting...",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  useEffect(() => {
    if (productId) {
      dispatch(getSingleProduct(productId));
    }
  }, [productId, dispatch]);
  const { specs, share_url } = singleData;
  console.log(star);
  let tf;
  let te;
  let reviewsString;
  if (rating) {
    tf = Math.floor(+rating);
    te = 5 - tf;
  }
  if (reviews) {
    reviewsString = reviews.toLocaleString("en-IN");
  }
  const fillStar = new Array(tf).fill(<AiFillStar color={"rgb(255,164,28)"} />);
  const emptyStar = new Array(te).fill(
    <AiOutlineStar color={"rgb(255,164,28)"} />
  );

  return (
    <>
      <Box w={"100%"}>
        <Flex py={2} pl={2} pr={2} gap="2px" className={Styles.main_flex}>
          <Box
            w="50%"
            boxShadow={"md"}
            height={"auto"}
            position={"-webkit-sticky"}
            ml={2}
            mt={6}
            border={"1px solid black"}
          >
            <Box pos={"sticky"} top={10}>
              <Box width={"100%"} margin={"auto"} border={"1px solid red"}>
                <Image src={image} m="auto" objectFit={"fill"} />
              </Box>

              <Flex
                gap={"2%"}
                mt={5}
                className={Styles.Button_flex}
                justifyContent={"center"}
              ></Flex>
            </Box>
          </Box>
          <Box w="30%" pl={5} pt="10px" border={"1px solid black"} mt={6}>
            <Box>
              <Text fontSize={"24px"} fontWeight="500">
                {title}
              </Text>
              <HStack p={"1px"} pr={1} my={2} color={"black"}>
                <Flex
                  px={1}
                  color={"black"}
                  gap={0}
                  borderRadius={2}
                  border={"0px solid black"}
                >
                  <Text fontSize={"15px"}>{rating}</Text>
                  {fillStar.map((el) => (
                    <Text as={"span"} mt={1} key={Math.random()}>
                      {el}
                    </Text>
                  ))}
                  {emptyStar.map((el) => (
                    <Text as={"span"} mt={1} key={Math.random()}>
                      {el}
                    </Text>
                  ))}
                </Flex>
                <Text
                  fontSize={"15px"}
                  fontWeight={"medium"}
                  color={"rgb(0,113,144)"}
                >
                  {reviewsString} Ratings
                </Text>
              </HStack>
              <hr />
              <hr />

              <HStack fontSize="18px" fontWeight={"normal"}>
                <Text color={"rgb(210,42,81)"} pt={1} fontSize={"24px"}>
                  - 58 %
                </Text>
                <Text fontWeight={"light"} color={"black"} fontSize={"24px"}>
                  ₹ {price}
                </Text>
              </HStack>
              <HStack
                justifyContent="left"
                alignContent="flex-end"
                color={"gray.600"}
                fontSize="18px"
                fontWeight={"normal"}
              >
                <Text as={"span"} pt={1} fontSize={"14px"}>
                  MRP
                </Text>
                <Text
                  as={"span"}
                  pt={1}
                  fontSize={"14px"}
                  textDecor={"line-through"}
                >
                  ₹ {price + 10}
                </Text>
              </HStack>
              <HStack fontSize="15px">
                <Text pt={1} fontSize={"14px"} color={"rgb(204,12,57)"}>
                  Summer Sale Deal
                </Text>
              </HStack>
              <hr />
              <hr />
              {/* offer section */}
              <Stack my={2}>
                <HStack>
                  <CiDiscount1 color={"rgb(255,164,28)"} fontSize={"24px"} />
                  <Text ml={2} fontWeight={"semibold"}>
                    Offers
                  </Text>
                </HStack>
                <ManualCarousels allData={offers} />
              </Stack>
              <hr />
              <hr />

              {/* stats section */}
              <StatsCarousels allData={statistics} />
            </Box>
          </Box>
          <Box w="20%" p={3} pt="10px" mt={4}>
            <Box border={"1px solid black"}>
              <Text fontWeight={"medium"} color={"black"} fontSize={"24px"}>
                ₹ {price}
              </Text>
              <Text
                fontSize={"15px"}
                fontWeight={"semibold"}
                color={"rgb(0,113,144)"}
              >
                Free delivery
              </Text>
              <Text
                mt={6}
                fontSize={"18px"}
                fontWeight={"semibold"}
                color={"green.600"}
              >
                In stock
              </Text>
              <VStack
                gap={"2%"}
                mt={5}
                className={Styles.Button_flex}
                justifyContent={"center"}
              >
                <Button
                  onClick={handleCart}
                  bg={"rgb(255,159,0)"}
                  borderRadius={"full"}
                  color="white"
                  _hover={{ bgColor: "none" }}
                >
                  <Text as={"span"} ml={4} fontSize={"12px"}>
                    ADD TO CART
                  </Text>
                </Button>
                <Button
                  onClick={handleBuy}
                  bg={"rgb(251,100,27)"}
                  borderRadius={"full"}
                  px={7}
                  color="white"
                  _hover={{ bgColor: "none" }}
                >
                  <Text as={"span"} ml={4} fontSize={"12px"}>
                    BUY NOW
                  </Text>
                </Button>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProduct;
