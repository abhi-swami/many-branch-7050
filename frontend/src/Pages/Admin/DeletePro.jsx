import React from 'react'
import "./dashboard.css"
import styled from "styled-components"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from '@chakra-ui/react'
import { Button,Stack } from '@chakra-ui/react'

const DeletePro = () => {

    const [page,setPage] = useState(1)
    const [afterDelete,setAfterDelete] = useState(false)
    const [product,setProduct] = useState([])

     useEffect(()=>{
        axios.get(`http://localhost:4500/products/?page=${page}`)
        .then(res => setProduct(res.data.products))
        .catch(err => console.log(err))
     },[afterDelete,page])

     const handleDelete = (id) => {
        axios.delete(`http://localhost:4500/products/delete/${id}`)
        setAfterDelete(!afterDelete)
     }

  return (
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
 <a href="/admin/delete">
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
  <div style={{margin:"auto",fontSize:'30px'}}>
  <DIV>
      {product.map((el)=>
      <div style={{border:'1px solid blue',borderRadius:'8px',margin:'10px',padding:'10px'}} key={el.id}>
       <img width={'100%'} src={el.image} alt={el.title} />
      <div style={{width:'70%',margin:'auto'}}>
      <h3 style={{margin:'auto'}}>{el.title.substring(0, 12)}</h3>
       <h3>{el.category}</h3>
       <h2 style={{fontSize:'20px'}}>{el.price}</h2>
       <button onClick={()=>handleDelete(el._id)}>
          <Link to={`/dashboard/edit/${el.id}`}>Delete</Link>
       </button>
      </div>
     
      </div>
      )}
    </DIV>
    <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}>
  
                  {/* increase or decrease button addad here */}
                <Stack 
                display={'flex'}
                direction={'row'}>
                <Button
                  flex={1}
                  fontSize={'2xl'}
                  padding={'10px'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  paddingLeft={'25px'}
                  paddingRight={'25px'}
                  onClick={()=>setPage(page-1)}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  PREVIOUS
                </Button>
                <Button>
                  {page}
                </Button>
                <Button
                  flex={1}
                  fontSize={'2xl'}
                  padding={'10px'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  paddingLeft={'15px'}
                  paddingRight={'15px'}
                  onClick={()=>setPage(page+1)}

                //   isDisabled={item.qty===1}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  NEXT
                </Button>
                </Stack>
               
              </Stack>
   </div>
   </div>
 
</>
  )
}

const DIV=styled.div`
margin-left:310px;
padding:15px;
   display:grid;
  justify-content:center;
  align-items:center;
  grid-template-columns: repeat(3,auto);
  gap:5px;

div{
width:300px;
}
img{
  width:80%;
  margin:auto;
}
button{
  padding:5px;
  color:blue
  margin-bottom:5px;
}
`


export default DeletePro;