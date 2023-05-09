import "./dashboard.css"
import styled from "styled-components"
import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


export const Dashboard = () => {

  const [userData, setUserData] = useState({
    labels: [ "electonics","books","shirts","footwere","sports"],
    datasets: [
      {
        label: "Users Gained",
        data: [55,94,88,55,67],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#8db2fd",
          "#1f4b3a",
          "#f3ba2f",
          "#d44b6e",
        ],
        borderColor: "blue",
        borderWidth: 3,
      },
    ],
  });  


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
     <div style={{width:"60%",margin:"auto",fontSize:'30px'}}>
     <Box > 
         <Box  >
            <Bar  data ={userData}/>     
         </Box>
         <Box >
         <Pie data={userData} />    
         </Box>
         <Box >
           <Line data={userData} /> 
         </Box>      
      </Box>


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
  border: 1px solid gray;
width:300px;
}
img{
  width:80%;
  margin:auto;
}
button{
  padding:5px;
  margin-bottom:5px;
  border: 1px solid gray;

}
`
