import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { ImageSlider, ProductSlider, } from './Carousels'


const Home = () => {
  return (
    <div>
       <Box>
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

           <Box   height={'300px'} marginBottom={"20px"} width={'full'} display="flex" border={'2px solid red'}
     justifyContent="space-evenly" backgroundColor={'white'}  >
           {/* <ProductSlider/> */}
           
           </Box>

      {/* ****************************************************--IMAGE--************************************* */}
      <Box backgroundColor={'gray.50'}  display={'flex'} justifyContent={'space-evenly'}  height={'330px'} width={'full'}  padding={'20px'}>
        <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Apr_23/MayART/GW_editorial_2300x646._CB590911576_.jpg'/>
      </Box>
         

      {/* ***************************************************set-4****************************************** */}
<Box  marginTop={'20px'} height={'400px'} backgroundColor={'gray.100'} width={'full'}  display="flex" 
           alignItems="center" justifyContent="space-evenly" >

                               {/* ----------- */}

         <Box  height={'400px'} 
            display="flex" 
           alignItems="center" justifyContent="space-evenly" >

                  <Box   height={'395px'} width={'290px'} backgroundColor={'white'} padding={'15px'} marginBottom={'10px'}  marginTop={'10px'}>
                     <Heading fontSize={{ base: 'l', md: '1xl', lg: '2xl' }} color='black'marginBottom={'10px'} >
                     Up to 60% off | Start your fitness journey
                     </Heading>
                     <Image height={'280px'}  src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_758x608_New_compressed._SY608_CB448277514_.jpg"/>
                      See more
                  </Box>
        </Box>

                  {/* ------------------ */}
                  <Box   height={'395px'} width={'290px'} 
                     backgroundColor={'white'} padding={'10px'}  >

                     <Heading fontSize={{ base: 'l', md: 'xl', lg: '2xl' }} marginBottom={'10px'} color='black'>
                     Up to 70% off | Home, kitchen & more
                     </Heading>
                        <Box >

                        <Box  display={'flex'} justifyContent="space-evenly" gap={"10px"} marginTop="17px" >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_372X232_1._SY232_CB590728937_.jpg"/> Kitchen appliances</Box>
                        <Box fontSize={'12px'}><Image  height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_372X232_4._SY232_CB590728937_.jpg"/>Home Decor</Box>
                        </Box>

                        <Box display={'flex'} justifyContent="space-evenly" gap={"10px"} marginBottom={'10px'} >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_372X232_3._SY232_CB590728937_.jpg"/>Furnitures ans mattresses</Box>
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_372X232_2._SY232_CB590728937_.jpg"/>Home improvement</Box>
                        </Box>
      
                       </Box> 
                       See all offers
                 </Box>

                  {/* ------------------ */}
                  <Box   height={'395px'} width={'290px'} 
                     backgroundColor={'white'} padding={'10px'}  >

                     <Heading fontSize={{ base: 'l', md: 'xl', lg: '2xl' }} marginBottom={'10px'} color='black'>
                     Under ₹599 | Amazon Brands & more
                     </Heading>
                        <Box >

                        <Box  display={'flex'} justifyContent="space-evenly" gap={"10px"} marginTop="17px" >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/May_art_GW/QC/Desktop/PC_QC_2x._SY232_CB590950497_.png"/> Men's Clothing</Box>
                        <Box fontSize={'12px'}><Image  height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/May_art_GW/QC/Desktop/PC_QC_3_2x._SY232_CB590950497_.png"/>Women's clothing</Box>
                        </Box>

                        <Box display={'flex'} justifyContent="space-evenly" gap={"10px"} marginBottom={'10px'} >
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/May_art_GW/QC/Desktop/PC_QC_4_2x._SY232_CB590950497_.png"/>Kids clothing</Box>
                        <Box fontSize={'12px'}><Image height={'90px'} src="https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/3PA-23/MayART/CL4._SY232_CB589318336_.jpg"/>Health and personal care</Box>
                        </Box>

                       </Box> 
                       See all offers
                 </Box>

                  {/* ------------------ */}

            <Box  height={'400px'} 
                      display="flex" 
                         alignItems="center" justifyContent="space-evenly" >

                  <Box   height={'395px'} width={'290px'} backgroundColor={'white'} padding={'15px'} marginBottom={'10px'}  marginTop={'10px'}>
                     <Heading fontSize={{ base: 'l', md: '1xl', lg: '2xl' }} color='black'marginBottom={'10px'} >
                     Up to 70% off | Refurbished Products
                     </Heading>
                     <Image height={'280px'}  src="https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/MayART23/GWMayART23/PC_CategoryCard_.02._SY608_CB589464891_.jpg"/>
                      See all
                  </Box>

             </Box>     

           {/* ------------------ */}                       
 </Box>  

                     {/* *******************--END---************* */}
 <Box  height={'60px'} color={'white'} fontWeight={'bold'} fontFamily={'cursive'} display={'flex'} alignItems={'center'}
 width={'full'} marginTop={'10px'} backgroundColor={'gray.700'} justifyContent={'space-evenly'}>
                     Welcome to amaze
  </Box>  
















       </Box>
    </div>
  )
}

export default Home