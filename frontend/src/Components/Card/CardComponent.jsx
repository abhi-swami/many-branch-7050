import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
  HStack,

} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { AiOutlineStar } from "react-icons/ai";

// import { postFavouriteProduct } from "../Redux/Favorite/favourite.action";

export default function CardComponent({ cardData }) {
  const navigate = useNavigate();
  let {
    _id,
    brand,

    image,
    rating,
    price,
    reviews,

    title,
  } = cardData;
  const reviewsString = reviews.toLocaleString("en-IN");
  price = price.toLocaleString();
  
  // const favouriteProduct = useSelector((store) => store.favouriteReducer.data);

  const handleClick = () => {
    navigate(`/product/${_id}`);
  };
  return (
    <Box gap={9}>
      <Box
        bg={useColorModeValue("gray.100", "gray.800")}
   
        w="100%"
        gap={10}
        borderWidth="1px"
        shadow="lg"
        position="relative"
        pt={3}
      >
        {reviews > 5000 ? (
          <Text
            position="absolute"
            top={0}
            left={0}
            p={"3px"}
            bg={"rgb(0,47,54)"}
            color={"white"}
            fontSize={"12px"}
            borderRadius={"sm"}
          >
            Best
            <Text as={"span"} color={"rgb(255,164,28)"}> Seller</Text>
          </Text>
        ) : null}
        {/* <Text
          position="absolute"
          top={1}
          left={280}
          p={"3px"}
          bg={"white"}
          color={"rgb(200,200,200)"}
          _hover={{ color: "rgb(40,116,240)", cursor: "pointer" }}
          fontSize={"15px"}
          borderRadius={"sm"}
          onClick={handleheart}
        >
          <BsSuitHeartFill />
        </Text> */}

        <Image
          src={image}
          alt={`picture of ${title}`}
          height={"200px"}
          margin={"auto"}
        />

        <Box p={2} onClick={handleClick}>
          <Flex justifyContent={"space-between"}>
            <Text
              fontFamily={"montserrat,sans-serif"}
              fontSize={"14px"}
              fontWeight={600}
              color={"gray.600"}
              textTransform={"capitalize"}
            >
              {brand}
            </Text>
          </Flex>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="sm"
              fontWeight="semibold"
              as="h5"
              color={"gray.700"}
              _hover={{ color: "rgb(40,116,240)" }}
              cursor={"pointer"}
              lineHeight="tight"
              isTruncated
              onClick={handleClick}
            >
              {title}
            </Box>
          </Flex>
          <HStack p={"1px"} pr={1} color={"black"}>
            <Flex
              bgColor={"rgb(255,164,28)"}
              px={1}
              color={"white"}
              gap={2}
              borderRadius={2}
            >
              <Text fontSize={"14px"}>{rating}</Text>
              <Text fontSize={"14px"} mt={"4px"}>
                <AiOutlineStar />
              </Text>
            </Flex>
            <Text
              fontSize={"14px"}
              fontWeight={"medium"}
              color={"rgb(0,113,133)"}
            >
              {reviewsString}
            </Text>
          </HStack>

          <HStack
            justifyContent="left"
            alignContent="flex-end"
            color={"gray.600"}
            fontSize="16px"
            fontWeight={"medium"}
          >
            <Text fontWeight={"bold"} color={"black"}>
              ₹ {price}
            </Text>
            <Text textDecor={"line-through"} pt={1} fontSize={"12px"}>
              ₹ {price * 10}
            </Text>
            <Text color={"rgb(56,142,60)"} pt={1} fontSize={"14px"}>
              x% off
            </Text>
          </HStack>
          <Text
            pt={1}
            fontSize={"11px"}
            textAlign={"left"}
            fontWeight={"medium"}
          >
            Free delivery
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
