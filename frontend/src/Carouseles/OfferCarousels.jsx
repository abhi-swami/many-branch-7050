import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";


const settings = {
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function OfferCarousels({ allData }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const left1 = useBreakpointValue({ base: "0px", md: "-10%" });
  const left2 = useBreakpointValue({ base: "0px", md: "0%" });

  return (
    <Flex position={"relative"} m={"auto"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        backgroundColor={"transparent"}
        borderRadius="none"
        position="absolute"
        top={top}
        left={left1}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <IoIosArrowBack />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        borderRadius="none"
        position="absolute"
        top={top}
        right={left2}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <IoIosArrowForward />
      </IconButton>
      <Box w={"100%"} m={"auto"} border={"0px solid red"}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {allData.map((elem) => (
            <Flex key={elem.id}  w={"100%"} >
               <Box
    style={{ cursor: "pointer" }}
    _hover={{ boxShadow: "xl", rounded: "md" }}
    p={1}
    m={1}
    border={"1px solid black"} borderRadius={"lg"} 
  >
    <Text textAlign="left" fontWeight={"medium"} fontSize={"13px"}>
      {elem.name}
    </Text>

    <Text
      textAlign={"left"}
      py="1"
      fontSize={"12px"}
      lineHeight={"shorter"}
      fontWeight={"semibold"}
      height={"35px"}
      overflow={"clip"}
    >
      {elem.desc}
    </Text>

    <Text
      textAlign="left"
      py="1"
      px="2"
      fontWeight={"medium"}
      fontSize={"13px"}
      color={"rgb(40,135,152)"}
      _hover={{ color: "rgb(204,12,57)" }}
    >
      {elem.offer}
    </Text>
  </Box>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
