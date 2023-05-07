


import React,{useEffect} from "react";
import {
  Box,
  IconButton,
  VStack,
  useBreakpointValue,Text, Heading
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from 'axios'

import Slider from "react-slick";
import ProductCart from "./ProductCard";
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

  export default function ProductCarousels() {
   
    const [slider, setSlider] = React.useState(null);
     const [product,setProduct]=React.useState([])
   
    const top = useBreakpointValue({ base: "50%", md: "50%" });
    const left1 = useBreakpointValue({ base: "0px", md: "0%" });
    const left2 = useBreakpointValue({ base: "0px", md: "0%" });

let arr=[{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'mobile',
  brand:'mi'
},{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'phone',
  brand:'mi'
},{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'samsung',
  brand:'mi'
},
{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'samsung',
  brand:'mi'
},{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'samsung',
  brand:'mi'
},
{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'mobile',
  brand:'mi'
},{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'phone',
  brand:'mi'
},{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'samsung',
  brand:'mi'
},
{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'samsung',
  brand:'mi'
},{
  image:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
  name:'samsung',
  brand:'mi'
}]

    // const getData=(()=>{
    //     axios.get(`${process.env.REACT_APP_URL}/products`)
    //       .then((res)=>{
    //         console.log('res',res.data)
    //       })
        
    // })
       
    // useEffect(()=>{
    //      getData()

         
    // },[])
  
    return (
      <Box border={'.5px solid gray'} backgroundColor={'white'} height={'360px'} width={'98%'} marginLeft={'12px'} marginBottom={'15px'} borderRadius={'5px'}>
      {/* <h2> Multiple items </h2> */}
      <Slider {...settings}>

        {arr?.map((ele)=>
         <Box  height={'350px'} padding={'10px'} >
          {/* <img  height='50px'src={ele.image}/>
         <h3>{ele.name}</h3>
         <h3>{ele.brand}</h3> */}
         <ProductCart {...ele}/>
       </Box>
        )}
       
    
      </Slider>
    </Box>
    );
  }