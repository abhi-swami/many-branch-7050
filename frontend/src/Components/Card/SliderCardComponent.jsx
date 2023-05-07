import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
  HStack,
  Stack,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";



export default function SliderCardComponent({ cardData }) {
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
  price = price.toLocaleString();




  const handleClick = () => {
    navigate(`/product/${_id}`);
  };

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
    <Box gap={9} m={5}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        // border={'1px solid black'}
        // minW="90%"
        w="100%"
        gap={10}
        position="relative"
        pt={3}
      >
        <Image
          src={image}
          alt={`picture of ${title}`}
          height={"150px"}
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
              color={"rgb(20,124,143)"}
              _hover={{ color: "rgb(201,86,37)" }}
              cursor={"pointer"}
              lineHeight="tight"
              onClick={handleClick}
            >
              {title}
            </Box>
          </Flex>
          <HStack p={"1px"} pr={1} color={"black"}>
            <HStack gap={0} spacing={"0"}>
              <Text fontSize={"14px"} mr={2}>{rating}</Text>
              {fillStar.map((el) => (
                <Text as={"span"} key={Math.random()}>
                  {el}
                </Text>
              ))}
              {emptyStar.map((el) => (
                <Text as={"span"} mt={1} key={Math.random()}>
                  {el}
                </Text>
              ))}
            </HStack>
          </HStack>
          <Stack>
          <Text
              fontSize={"14px"}
              fontWeight={"medium"}
              color={"rgb(201,86,37)"}
            >
             {reviewsString} Rating's
            </Text>
          </Stack>

          <HStack
            justifyContent="left"
            alignContent="flex-end"
            color={"gray.600"}
            fontSize="16px"
            fontWeight={"medium"}
          >
            <Text fontWeight={"semibold"} color={"black"} fontSize={"lg"}>
              ₹ {price}
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
