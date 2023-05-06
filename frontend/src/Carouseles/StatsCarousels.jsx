import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Img,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";

const settings = {
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
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

export default function StatsCarousels({ allData }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const left1 = useBreakpointValue({ base: "0px", md: "-10%" });
  const left2 = useBreakpointValue({ base: "0px", md: "0%" });

  return (
    <Box position={"relative"} m={"auto"}>
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
        backgroundColor={"transparent"}
        position="absolute"
        top={top}
        right={left2}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <IoIosArrowForward />
      </IconButton>
      <Box m={"auto"} border={"0px solid red"}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {allData.map((elem) => (
            <VStack key={elem.id}>
              <Box
                style={{ cursor: "pointer" }}
                borderRadius={"lg"}
                mt={2}
              >
                <Img
                  src={elem.img}
                  alt={"img"}
                  h={"40px"}
                  w={"40px"}
                  m={"auto"}
                />

                <Text
                  py="1"
                  fontWeight={"semibold"}
                  fontSize={"12px"}
                  color={"rgb(40,135,152)"}
              
                  lineHeight={"shorter"}
                  textAlign={"center"}
                >
                  {elem.stat}
                </Text>
              </Box>
            </VStack>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
