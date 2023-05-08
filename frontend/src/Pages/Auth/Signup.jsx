import React, { useState } from "react";
import { Box, Text, Input, Button, Img} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import REACTLOGO from "./amaze.png"
import ToastStatusExample from "../../Components/Toast/Toast";


export const Signup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status,setStatus]=useState(false)
  const navigate=useNavigate()

  const handleSubmit = () => {
    const payload={name,mobile,email,password};
    // console.log(payload)

    fetch("http://localhost:4500/signup",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setStatus(data.message)
      
      setName("")
      setMobile("")
      setEmail("")
      setPassword("")
      // navigate("/login")
    })
    .catch((err)=>console.log(err))
  };

  return (
    <>
      {/* <DarkModeButton /> */}
      <Box mb={"20px"}>
        {/* <Img margin={"auto"} borderRadius={"50%"} mt={"10px"} width={"12%"} src={REACTLOGO} /> */}
        <Box
          textAlign={"center"}
          margin={"auto"}
          mt={"40px"}
          pb={"25px"}
          width={"350px"}
          borderRadius="10px"
          // height={"390px"}
          boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"}
          border={"1px solid rgb(255,255,255)"}
        >
          <Text
          fontWeight={500}
            textAlign={"start"}
            fontSize="30px"
            m={"10px 25px "}
            paddingTop="5px"
          >
            Create Account
          </Text>
          <Text fontWeight={500} ml={"25px"} textAlign="left">Your name</Text>
          <Input
          
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            mt="5px"
            borderRadius="4px"
            pl={"8px"}
            placeholder="First and last name"
            border={"1px solid grey"}
            height={"32px"}
            width={"85%"}
          ></Input>
          <Text fontWeight={500} ml={"25px"} mt={"10px"} textAlign="left">Mobile number</Text>
          <Input
            type="number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            borderRadius="4px"
            mt={"5px"}
            pl={"8px"}
            placeholder="Mobile number"
            border={"1px solid grey"}
            height={"32px"}
            width={"85%"}
          ></Input>
          <Text fontWeight={500} ml={"25px"} mt={"10px"} textAlign="left">Email</Text>
          <Input
          
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            borderRadius="4px"
            mt={"5px"}
            pl={"8px"}
            placeholder="Email"
            border={"1px solid grey"}
            height={"32px"}
            width={"85%"}
          ></Input>
          <Text fontWeight={500} ml={"25px"} mt={"10px"} textAlign="left">Password</Text>
          <Input
          
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            borderRadius="4px"
            mt={"5px"}
            pl={"8px"}
            placeholder="At least 6 characters"
            border={"1px solid grey"}
            height={"32px"}
            width={"85%"}
          ></Input>
            <Text
              margin={"auto"}
              // color="gray"
              fontSize="13px"
              width={"85%"}
              mt={"20px"}
              mb="15px"
              textAlign={"left"}
              fontWeight={500}
            >
              By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
            </Text>
          <Button
            _hover={{ bg: "yellow.400" }}
            onClick={handleSubmit}
            mt="10px"
            color="black"
            border={"0px"}
            borderRadius="10px"
            height={"32px"}
            background={"rgb(255,216,20)"}
            width="85%"
          >
            Continue
          </Button>
          <Box>
            <Text
              margin={"auto"}
              fontWeight={500}
              fontSize="13px"
              width={"83.5%"}
              mt={"15px"}
              mb="10px"
              textAlign={"left"}
              // paddingTop="20px"
            >
              
            Already have an account?
            <Link to="/login">
             <Button color={"blue"} fontSize={"13px"} variant={"link"} >Sign in</Button>
            </Link>
            </Text>
            <Text
              margin={"auto"}
              color="gray"
              fontSize="13px"
              width={"83.5%"}
              mt={"15px"}
              mb="10px"
              textAlign={"left"}
              // paddingTop="20px"
            >
              By creating an account or logging in, you agree to Amazon's Conditions of Use and Privacy Policy.
            </Text>
            {status&&<h3>{status}</h3>}
          </Box>

        </Box>
        
      </Box>
    </>
  );
};

export default Signup;