import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { IoMdShareAlt } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import Styles from "../../CSS/SingleProductPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Redux/Search/search.action";

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
          <Box w="25%" pl={5} pt="10px" border={"1px solid black"} mt={6}>
            <Box>
              <Text fontSize={"24px"} fontWeight="500">
                {title}
              </Text>
              <HStack p={"1px"} pr={1} my={2} color={"black"}>
                <Flex
                  // bgColor={"rgb(56,142,60)"}
                  px={1}
                  color={"black"}
                  gap={0}
                  borderRadius={2}
                  border={"0px solid black"}
                >
                  <Text fontSize={"15px"}>{rating}</Text>
                  {fillStar.map((el) => (
                    <Text as={"span"} mt={1}>
                      {el}
                    </Text>
                  ))}
                  {emptyStar.map((el) => (
                    <Text as={"span"} mt={1}>
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
              <hr/>
            
              <HStack fontSize="18px" fontWeight={"medium"}>
                <Text color={"rgb(56,142,60)"} pt={1} fontSize={"15px"}>
                  Extra ₹ x off
                </Text>
              </HStack>
              <HStack
                justifyContent="left"
                alignContent="flex-end"
                color={"gray.600"}
                fontSize="18px"
                fontWeight={"medium"}
              >
                <Text fontWeight={"bold"} color={"black"}>
                  ₹ {price}
                </Text>
                <Text textDecor={"line-through"} pt={1} fontSize={"14px"}>
                  ₹ {price + 10}
                </Text>
                <Text color={"rgb(56,142,60)"} pt={1} fontSize={"15px"}>
                  x% off
                </Text>
              </HStack>
              <HStack
                color={"gray.600"}
                fontSize="15px"
                fontWeight={"medium"}
                mt={5}
              >
                <Text fontWeight={"bold"} color={"black"}>
                  Available offers
                </Text>
              </HStack>
              <Flex my={2}>
                <Image
                  src={
                    "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  }
                  w={"20px"}
                  mt={1}
                />
                <Text ml={2}> Pay Later</Text>
              </Flex>
              <Flex my={2}>
                <Image
                  src={
                    "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  }
                  w={"20px"}
                  mt={1}
                />
                <Text ml={2}>
                  <Text as={"span"} fontWeight="semibold">
                    Bank Offer
                  </Text>{" "}
                  10% instant discount on PNB Credit Card, up to ₹1500, on
                  orders of ₹5,000 and above{" "}
                  <Text
                    as={"span"}
                    fontWeight="semibold"
                    fontSize={"12px"}
                    color={"blue"}
                  >
                    T&C
                  </Text>
                </Text>
              </Flex>
              <Flex my={2}>
                <Image
                  src={
                    "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  }
                  w={"20px"}
                  mt={1}
                />
                <Text ml={2}>
                  <Text as={"span"} fontWeight="semibold">
                    Bank Offer
                  </Text>{" "}
                  10% off on Yes Bank Credit Card, up to ₹1,500. On orders of
                  ₹10,000 and above{" "}
                  <Text
                    as={"span"}
                    fontWeight="semibold"
                    fontSize={"12px"}
                    color={"blue"}
                  >
                    T&C
                  </Text>
                </Text>
              </Flex>
              <Flex my={2}>
                <Image
                  src={
                    "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  }
                  w={"20px"}
                  mt={1}
                />
                <Text ml={2}>
                  <Text as={"span"} fontWeight="semibold">
                    Bank Offer
                  </Text>{" "}
                  Get additional ₹1500 off on Debit and Credit cards{" "}
                  <Text
                    as={"span"}
                    fontWeight="semibold"
                    fontSize={"12px"}
                    color={"blue"}
                  >
                    T&C
                  </Text>
                </Text>
              </Flex>
              <Box boxShadow={"lg"} pl={2}>
                <Heading textAlign={"left"} my={2} fontSize={"18px"}>
                  Specifications
                </Heading>
                {specs?.map((el) =>
                  el.title && el.details.length > 0 ? (
                    <Flex key={Math.random()} textAlign={"justify"}>
                      <Box border={"0px solid pink"} w={"60%"} boxShadow={"sm"}>
                        <Heading my={1} fontSize={"16px"}>
                          {el.title}
                        </Heading>

                        <Flex
                          border={"0px solid green"}
                          w={"90%"}
                          textAlign={"left"}
                          flexDirection={"column"}
                        >
                          {el.details.map((x) => (
                            <HStack
                              borderBottom={"0.5px solid lightgray"}
                              mt={3}
                              key={Math.random()}
                            >
                              <Box w={"40%"}>
                                <Text color={"rgb(135,135,151)"}>
                                  {x.property}
                                </Text>
                              </Box>
                              <Box w={"60%"} textAlign={"justify"}>
                                <Text color={"rgb(135,135,151)"}>
                                  {x.value}
                                </Text>
                              </Box>
                            </HStack>
                          ))}
                        </Flex>
                      </Box>
                    </Flex>
                  ) : null
                )}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProduct;
