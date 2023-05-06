import React from "react";
import {
  Box,
  IconButton,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";
import SliderCardComponent from "../Components/Card/SliderCardComponent";

const settings = {
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
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

export default function SubCategoryCarousels({ allData }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const left1 = useBreakpointValue({ base: "0px", md: "0%" });
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
      <Box m={"auto"} border={"0px solid red"}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {allData.map((elem) => (
            <VStack key={elem._id} >
              <SliderCardComponent cardData={elem}/>
            </VStack>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
