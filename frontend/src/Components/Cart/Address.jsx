import {
  Box,
  Button,
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext, useState,useCallback} from "react";
import useRazorpay from 'react-razorpay'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const obj={
  name:"",
  phone:"",
  street:"",
  city:"",
  state:"",
  postal_code:"",
  country:"",

}

export default function Address({ isOpen, onOpen, onClose ,handleSubmit}) {
  const [userAddress,setUserAddress]=useState(obj);

  const handleFormChange=(e)=>{
    const {name,value}=e.target;
    const val= name==="phone"?+value:name==="postal_code"?+value:value
    setUserAddress({...userAddress,[name]:val})
  }
  const handleClick=()=>{
    handleSubmit(userAddress)

  }




  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
              User Details
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={"100%"} m={"auto"}  p={9}>
              
              <FormControl as={GridItem} colSpan={6} isRequired>
                <FormLabel
                  fontSize="md"
                  fontWeight="md"
                  color="gray.900"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                   Full Name
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={userAddress.name}
                  onChange={handleFormChange}
                  id="Name"
                  autoComplete="Name"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={6} isRequired>
                <FormLabel
                  htmlFor="phone"
                  fontSize="md"
                  fontWeight="md"
                  color="gray.900"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  Phone Number
                </FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  value={userAddress.phone}
                  onChange={handleFormChange}
                  id="phone"
                  autoComplete="phone"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  required
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                  htmlFor="street_address"
                  fontSize="md"
                  fontWeight="md"
                  color="gray.900"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  Street address
                </FormLabel>
                <Input
                  type="text"
                  name="street"
                  value={userAddress.street}
                  onChange={handleFormChange}
                  id="street_address"
                  autoComplete="street-address"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                  htmlFor="City"
                  fontSize="md"
                  fontWeight="md"
                  color="gray.900"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  City
                </FormLabel>
                <Input
                  type="text"
                  name="city"
                  value={userAddress.city}
                  onChange={handleFormChange}
                  id="city"
                  autoComplete="City"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="state"
                  fontSize="md"
                  fontWeight="md"
                  color="gray.900"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  State 
                </FormLabel>
                <Input
                  type="text"
                  name="state"
                  value={userAddress.state}
                  onChange={handleFormChange}
                  id="state"
                  autoComplete="state"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="postal_code"
                  fontSize="md"
                  fontWeight="md"
                  color="gray.900"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  Postal Code
                </FormLabel>
                <Input
                  type="text"
                  name="postal_code"
                  value={userAddress.postal_code}
                  onChange={handleFormChange}
                  id="postal_code"
                  autoComplete="postal_code"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="md"
                  fontWeight="md"
                  color="gray.900"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Country 
                </FormLabel>
                <Select
                  id="country"
                  name="country"
                  onChange={handleFormChange}
                  autoComplete="country"
                  placeholder="Select option"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="md"
                  w="full"
                  rounded="md"
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </Select>
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={"center"} alignItems={"center"}>
            <Button
              // onClick={()=>navigate("/checkout")}
              onClick={handleClick}
              variant="ghost"
              bgColor="green"
              mr={3}
              color={"white"}
              _hover={{ color: "black" }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
