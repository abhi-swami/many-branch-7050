

import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import SliderCardComponent from "../Components/Card/SliderCardComponent";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Image,
  Text,
  Container,VStack,
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';
import { useState } from 'react';



const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


export function ImageSlider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] =useState ();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const card = [
    {
      title: 'Design Projects 1',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
      'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/MayART23/PEA_PC_Hero_30Days_2x_V6._CB589500916_.jpg',
    },
    {
      title: 'Design Projects 2',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/MAYART/KSD/PC_Hero_3000x1200_KSD_REC_1_MAY._CB589451548_.jpg',
    },
    {
      title: 'Design Projects 3',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/MayART/Teaser/Hero/AF-Rec-PC-3000._CB590992012_.jpg',
    },
  ];

  return (
    <Box
    //  mt={'40px'}
      position={'relative'}
      height={'800px'}
      width={'full'}
      overflow={'hidden'} backgroundColor={'gray.100'}>
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
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {card.map((card, index) => (
          <Box
            key={index}
            height={'750px'}
            
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>

            

          
           <Box marginTop={'350px'} height={'450px'} 
            display="flex" 
           alignItems="center" justifyContent="space-evenly" >

                  <Box   height={'400px'} width={'290px'} backgroundColor={'white'} padding={'15px'} marginBottom={'10px'}  marginTop={'10px'}>
                     <Heading fontSize={{ base: 'l', md: '1xl', lg: '2xl' }} color='black'marginBottom={'10px'} >
                      Great Summer sale
                     </Heading>
                     <Image height={'300px'}  src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/MayArt23/KSD_PC-CC_2X._SY608_CB591352121_.jpg"/>
                      See all
                  </Box>

                   
{/* ********************************************************************** */}
                  

                 <Box   height={'400px'} width={'290px'} 
                     backgroundColor={'white'} padding={'15px'}  >

                     <Heading fontSize={{ base: 'l', md: 'xl', lg: '2xl' }} marginBottom={'10px'} color='black'>
                     Limited period offer | Book travel tickets
                     </Heading>
                        <Box >

                        <Box  display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Flight_1_372x232._SY232_CB618818079_.jpg"/> Get up to 10% off* on flight tickets</Box>
                        <Box fontSize={'12px'}><Image  height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Travel/Train_1_372x232-Reduced_one._SY232_CB591782866_.jpg"/>Zero gateway fees on trains</Box>
                        </Box>

                        <Box display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Bus_1_372x232._SY232_CB618818079_.jpg"/>Guaranteed rewards on bus tickets</Box>
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Accessory_186x116._SY232_CB618818544_.jpg"/>Products for your travel needs</Box>
                        </Box>

                       </Box> 
                 </Box>

     {/* *********************************************************************************** */}


                   {/* <Box border={'1px solid black'}  height={'600px'} width={'290px'}  display="flex" 
                     alignItems="center" justifyContent="space-evenly" >
                      
                   </Box> */}
                    <Box   height={'400px'} width={'290px'} 
                     backgroundColor={'white'} padding={'15px'}  >

                     <Heading fontSize={{ base: 'l', md: 'xl', lg: '2xl' }} color='black'>
                     Latest and upcoming launches
                     </Heading>
                        <Box >

                        <Box  display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_372X232_1._SY232_CB591041374_.jpg"/> OnePlus Nord CE 3 Lite 5G | ₹19,999 OnePlus Nord CE 3 Lite 5G | ₹19,999</Box>
                        <Box fontSize={'12px'}><Image  height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_372X232_2._SY232_CB591041374_.jpg"/>Samsung M14 5G | ₹14,990</Box>
                        </Box>

                        <Box display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_372X232_3._SY232_CB591041374_.jpg"/>Realme narzo N55 | ₹10,999 Realme narzo N55 | ₹10,999</Box>
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_372X232_4._SY232_CB591041374_.jpg"/>Explore all new launches</Box>
                        </Box>

                       </Box> 
                 </Box>


                  {/* ****************************************************************** */}
                <Box height={'400px'} width={'290px'} 
                       >

                    
                  <Box >

                      <Box  display={'flex'} justifyContent="space-evenly" gap={"10px"}  backgroundColor={'white'}>
                      <Heading fontSize={{ base: 's', md: 'm', lg: 'xl' }} marginBottom={'10px'} color='black' padding={'10px'}>
                      Become an Amazon seller today
                     </Heading>
                        <Box fontSize={'12px'}  ><Image padding={'10px'} height={'103px'} width={'200px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/ATFimagery_nov22_230x230._CB620157277_.jpg"/></Box>
                      </Box>

                      <Box display={'flex'} justifyContent="space-evenly" gap={"10px"} marginTop={'45px'} height={'250px'} >
                        <Box fontSize={'12px'}><Image height={'255px'} src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"/></Box>
                        {/* <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Accessory_186x116._SY232_CB618818544_.jpg"/>Products for your travel needs</Box> */}
                      </Box>

                  </Box> 
                </Box>


            </Box>

        </Box>
          

        ))}

      </Slider>
    </Box>


  );
}


