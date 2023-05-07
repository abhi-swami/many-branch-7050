
import React, { useState } from "react";
import { Box, Text, Input, Button,Img } from "@chakra-ui/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import REACTLOGO from "./amaze.png"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.authReducer);


  const handleSubmit = () => {
    // dispatch(login(email, password));
  };
  if (isAuth) {
  //  return <Navigate to={"/"}  />;
  }
  console.log(isAuth);
  // eve.holt@reqres.in
  // cityslicka
  return (
    <>
      {/* <DarkModeButton /> */}
      <Box mb={"20px"}>
      {/* <Img margin={"auto"} borderRadius={"50%"} mt={"10px"} width={"70px"} src={REACTLOGO} /> */}
        <Box
          textAlign={"center"}
          margin={"auto"}
          mt={"100px"}
          pb={"25px"}
          width={"340px"}
          borderRadius="10px"
          // height={"390px"}
          boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"}
          border={"1px solid rgb(255,255,255)"}
        >
          <Text
            textAlign={"start"}
            fontSize="30px"
            m={"10px 25px "}
            paddingTop="5px"
          >
            Sign in
          </Text>
          
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            mt="5px"
            borderRadius="10px"
            pl={"8px"}
            placeholder="Email"
            border={"1px solid grey"}
            height={"32px"}
            width={"85%"}
          ></Input>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            borderRadius="10px"
            mt={"10px"}
            pl={"8px"}
            placeholder="Password"
            border={"1px solid grey"}
            height={"32px"}
            width={"85%"}
          ></Input>
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
              color="gray"
              fontSize="13px"
              width={"83.5%"}
              mt={"15px"}
              mb="10px"
              textAlign={"left"}
              // paddingTop="20px"
            >
              By continuing, you agree to Amaze's Conditions of Use and Privacy Notice.
            </Text>
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
              
            Create your Amaze account? <Button color={"blue"} fontSize={"13px"} variant={"link"} >Sign up</Button>
            </Text>
            {/* <Button
              mt="5px"
              border={"0px"}
              background="white"
              borderRadius="3px"
              height={"40px"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              width="270px"
            >
              Google
            </Button> */}
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Login;
