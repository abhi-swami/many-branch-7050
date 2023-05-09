import React from 'react'
import "./dashboard.css";
import axios from 'axios';
import { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select
  } from '@chakra-ui/react';

const Addproduct = () => {

    const [input,setInput] = useState({
        title:"",
        image:"",
        price:"",
        category:"",
        brand:""
    })

    const {title,image,brand,category,price} = input;

    const handleInputChange = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleAddPro = () => {

        axios.post('url',input)
        .then(res=>console.log(res.data))
        .catch(err => console.log(err))

        setInput({
            title:"",
            image:"",
            price:"",
            category:"",
            brand:""
        })
    }

  return (
    <div>
        <>
       <div className='container'>
      <div className='navigation' >
<ul>
  <li>
    <a href="/">
      <span className='icon'></span>
       <span className='title'>Amaze</span>
    </a>
  </li>
    <li>
    <a href="/admin/addpro">
      <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
       <span className='title'>Add</span>
    </a>
  </li>
    <li>
    <a href="/admin/update">
      <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
       <span className='title'>Update</span>
    </a>
  </li>
    <li>
    <a href="/messages">
      <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
       <span className='title'>Delete</span>
    </a>
  </li>
    <li>
    <a href="/help">
      <span className='icon'><ion-icon name="help-circle-outline"></ion-icon></span>
       <span className='title'>Help</span>
    </a>
  </li>
    <li>
    <a href="/settings">
      <span className='icon'><ion-icon name="settings-outline"></ion-icon></span>
       <span className='title'>Settings</span>
    </a>
  </li>
  <li>
    <a href="/password">
      <span className='icon'><ion-icon name="lock-closed-outline"></ion-icon></span>
       <span className='title'>Password</span>
    </a>
  </li>
  <li>
    <a href="/signout">
      <span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
       <span className='title'>Sign Out</span>
    </a>
  </li>
</ul>
      </div>
    </div>
    <div style={{marginLeft:"300px"}}>
     <div style={{width:"60%",margin:"auto",fontSize:'30px'}}>
     <Flex
     width={'900px'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Hi There</Heading>
          <Heading fontSize={'4xl'}>Add Your New Product</Heading>
        </Stack>
        <Box
        width={'500px'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl >
              <FormLabel>Title</FormLabel>
              <Input type="text" name='title' value={title} onChange={handleInputChange} />
              <FormLabel>Image</FormLabel>
              <Input type="text" name='image' value={image} onChange={handleInputChange} />
              <FormLabel>Price</FormLabel>
              <Input type="text" name='price' value={price} onChange={handleInputChange} />
              <FormLabel>Category</FormLabel>
              <Input type="text" name='category' value={category} onChange={handleInputChange} />
              <FormLabel>Brand</FormLabel>
              <Select placeholder='Select Brand' name='brand' value={brand} onChange={handleInputChange} >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <Stack spacing={10}>
              <Button
              onClick={handleAddPro}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Add Product
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    
     </div>

    </div>

   </>
    </div>
  )
}

export default Addproduct