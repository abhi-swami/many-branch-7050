import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { ImageSlider, ProductSlider, } from './Carousels'


const Home = () => {
  return (
    <div>
       <Box >
          {/* <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/MayART23/PEA_PC_Hero_30Days_2x_V6._CB589500916_.jpg'/> */}
          <ImageSlider/>
              
           {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

       <Box  height={'450px'}   display="flex"  justifyContent="space-evenly" backgroundColor={'gray.100'} >

{/* **********************************---1----- */}
              <Box   height={'400px'} width={'600px'} 
                     backgroundColor={'white'} padding={'15px'}  >

                        <Box >

                        <Image src='https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2f5609e13bbf3ce9222570c42bb7cd6bf0836b50505645a476d927b6ae106d04._RI_V_TTW_QL40_AC_SL1584_.jpg'/>
                       </Box> 
                 </Box>

                 {/* ********************************2************************ */}

                  <Box   height={'400px'} width={'290px'} 
                     backgroundColor={'white'} padding={'20px'}  >

                     <Heading fontSize={{ base: 'l', md: 'xl', lg: '2xl' }} marginBottom={'10px'} color='black'>
                     Up to 60% off | Styles for men
                     </Heading>
                        <Box marginBottom={'10px'} >

                        <Box  display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg"/> Clothing</Box>
                        <Box fontSize={'12px'}><Image  height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg"/>Footwear</Box>
                        </Box>

                        <Box display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg"/>Watches</Box>
                        <Box fontSize={'12px'}><Image height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg"/>Bags and Luggage</Box>
                        </Box>

                       </Box> 

                       See all offers
                 </Box>

                  {/* ********************************4************************ */}

                  <Box   height={'400px'} width={'290px'} 
                     backgroundColor={'white'} padding={'20px'}  >

                     <Heading fontSize={{ base: 'l', md: 'xl', lg: '2xl' }} marginBottom={'10px'} color='black'>
                     Home appliances | Up to 55% off
                     </Heading>
                        <Box marginBottom={'10px'} >

                        <Box  display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"/> Air Conditioners</Box>
                        <Box fontSize={'12px'}><Image  height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"/>Refrigerator</Box>
                        </Box>

                        <Box display={'flex'} justifyContent="space-evenly" gap={"10px"} >
                        <Box fontSize={'12px'}><Image height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg"/>Microvawes</Box>
                        <Box fontSize={'12px'}><Image height={'110px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg"/>Washing Machines</Box>
                        </Box>

                       </Box> 

                       See more
                 </Box>
                    
          </Box>

                            {/* **********************--PRODUCTS--*********************** */}

           <Box   height={'300px'} marginBottom={"20px"} width={'full'} display="flex" 
     justifyContent="space-evenly" backgroundColor={'white'}  >
           <ProductSlider/>
           
           </Box>




















       </Box>
    </div>
  )
}

export default Home