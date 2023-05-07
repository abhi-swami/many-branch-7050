import React ,{useState} from 'react'
import "./Navbar.css";

import { FiShoppingCart } from 'react-icons/fi';
import { InputGroup,Image,Input,InputRightAddon,Text,Box,Icon,Menu,MenuButton,MenuList,MenuItem,Button,Avatar,Center,MenuDivider} from "@chakra-ui/react";
import { SearchIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Stack,Radio,RadioGroup,useDisclosure
  } from '@chakra-ui/react'


  function DrawerLeft() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        
        <Text  onClick={onOpen} >
          All
        </Text>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Trending</DrawerHeader>
            <DrawerBody>
              <p>Best Sellers</p>
              <br/>
              <p>New Release</p>
              <br/>
              <p>Movers and Shakers</p>
              <DrawerHeader borderBottomWidth='.5px' width='500px' >Digital Content and Devices</DrawerHeader>
              <br/>
              <p>Amazon mini-Tv FREE entertainment</p>
              <br/>
              <p>Echo and Alexa</p>
              <br/>
              <p>Fire TV</p>
              <br/>
              <p>Kindel E-Readers & eBooks</p>
              <br/>
              <p>Audible Audio Books</p>
              <br/>
              <p>Amazon Prime Video</p>
              <br/>
              <p>Amazon Prime Music</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


export const Navbar = () => {
    const [select,setSelect]=useState('')
  return (
<div>
    <div id='navbar'>
         <div className="logo">
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCExMBzLOY8DJaxU7yHvMnVDUSTh0WCp8iaA&usqp=CAU'/>
         <Link to="/"> 
         
         <p style={{color:"white",fontSize:'30px',fontWeight:'600'}}>maze.in</p> 
         </Link>
         </div>
         
         <div className="input">
         
         <InputGroup mt={'10px'}>
        
        <Input  placeholder= "Search Amazon.in" type="text" onChange={(e)=>setSelect(e.target.value)}/> 
        
        <InputRightAddon color={'black'}  backgroundColor={'orange'} w={'50px'} paddingLeft={'19px'} children={<SearchIcon/>}/>
       </InputGroup>
          
          </div>
         <div className="cart">
         
                
                  <Link to="/cart">
                   Cart 
                  <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'}  color={'white'} mt={'15px'}/>
                 
                  </Link>
                   

         </div>
          
         <div id="login">
         <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  color={'white'}
                  minW={0} border={0} gap={5}>
                    Sign In
                 
                </MenuButton>
                <Avatar
                    size={'sm'} paddingBottom='9px'
                    src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR26CmOEGogTfcVSowq0Nw1tA4y3CRGTEZEiROX7GDsCKX5J4eX'}
                  />
                
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR26CmOEGogTfcVSowq0Nw1tA4y3CRGTEZEiROX7GDsCKX5J4eX'}
                    />
                  </Center>
                  <br />
                  <br />
                  
                  <MenuDivider />
                   <Link to='/login'><MenuItem> User Login </MenuItem></Link>
                  <Link to='/adminlogin'> <MenuItem>Admin Login</MenuItem></Link>
                  <MenuItem><Link to='/'>Logout</Link></MenuItem>
                  
                </MenuList>
                
              </Menu>
             
              {/* <Box border='5px solid red' height='100px' width='100px'>
             nave menu
         </Box> */}
         </div>
         {/* <DarkModeButton/> */}
        
        
    </div>
 
<Box  id='nave' height='40px' width='full' display='flex' justifyContent='space-evenly'>
     <Box id='nave'  height='40px' width='700px' display='flex' justifyContent='space-evenly' color='white' fontSize={'15px'} fontWeight='bold' backgroundColor={'black'}>
            <Box  id='nav' padding='5px'><DrawerLeft/></Box>
            <Box id='nav' padding='5px'>Today's Deals</Box>
            <Box id='nav' padding='5px'>Coupons</Box>
            <Box id='nav' padding='5px'>Amazon MiniTV</Box>
            <Box id='nav' padding='5px'>Sell</Box>
            <Box id='nav' padding='5px'>Gift Cards</Box>
            <Box id='nav' padding='5px'>Gift Ideas</Box>
            <Box id='nav' padding='5px'>Buy Again</Box>
           
     </Box>
     <Box  height='40px' width='400px' marginLeft='162px'>
     <Image src='https://m.media-amazon.com/images/G/31/Events/img23/MayART23/SWM_400x39_LiveNow._CB590561779_.jpg'/>
     </Box>
</Box>

</div>
  )
}
