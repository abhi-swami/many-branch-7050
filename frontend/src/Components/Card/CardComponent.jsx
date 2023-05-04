import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import { postFavouriteProduct } from "../Redux/Favorite/favourite.action";

export default function CardComponent({ cardData }) {
  const navigate = useNavigate();

  const {
    _id,
    category,
    image,
    price,
    rating,
    reviews,
    title,
  } = cardData;
  const toast = useToast();
  const dispatch = useDispatch();
  // const favouriteProduct = useSelector((store) => store.favouriteReducer.data);

  const handleheart = () => {};
  const handleClick = () => {
    navigate(`/product/}`);
  };

  // let x = Math.ceil(((original_price - current_price) / original_price) * 100);
  return (
    <Box gap={9}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        // border={'1px solid black'}
        // minW="90%"
        w="100%"
        gap={10}
        borderWidth="1px"
        shadow="lg"
        position="relative"
        pt={3}
      >
        {rating > 4.5 ? (
          <Text
            position="absolute"
            top={1}
            left={1}
            p={"3px"}
            bg={"rgb(0,160,152)"}
            color={"white"}
            fontSize={"11px"}
            borderRadius={"sm"}
          >
            Best Seller
          </Text>
        ) : null}
        <Text
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
        </Text>

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
            >
              brand
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
              bgColor={"rgb(56,142,60)"}
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
              fontSize={"12px"}
              fontWeight={"medium"}
              color={"rgb(139,135,135)"}
            >
              ({rating})
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
              ₹ {price*50}
            </Text>
            <Text color={"rgb(56,142,60)"} pt={1} fontSize={"14px"}>
              40% off
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

          <Text
            pt={1}
            fontSize={"14px"}
            textAlign={"left"}
            fontWeight={"bold"}
            color={"rgb(56,142,60)"}
          >
            Bank Offer
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
