import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  Select,
  Input,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

import React, { useEffect, useState, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getSearchProducts } from "../../Redux/Search/search.action.js";
import CardComponent from "../../Components/Card/CardComponent.jsx";
import "../../CSS/Search.css";

import {
  createSearchParams,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { TbArrowsDownUp } from "react-icons/tb";
import Pagination from "../../Components/Pagination/Pagination.jsx";
const rating = [
  {
    id: 4,
    rating: [
      <AiFillStar color={"rgb(255,164,28)"} />,
      <AiFillStar color={"rgb(255,164,28)"} />,
      <AiFillStar color={"rgb(255,164,28)"} />,
      <AiFillStar color={"rgb(255,164,28)"} />,
    ],
  },
  {
    id: 3,
    rating: [
      <AiFillStar color={"rgb(255,164,28)"} />,
      <AiFillStar color={"rgb(255,164,28)"} />,
      <AiFillStar color={"rgb(255,164,28)"} />,
    ],
  },
  {
    id: 2,
    rating: [
      <AiFillStar color={"rgb(255,164,28)"} />,
      <AiFillStar color={"rgb(255,164,28)"} />,
    ],
  },
  {
    id: 1,
    rating: [<AiFillStar color={"rgb(255,164,28)"} />],
  },
];

const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { products,current,total } = useSelector((store) => {
    return {
      products: store.searchReducer.data,
      current: store.searchReducer.currentPage,
      total: store.searchReducer.totalPage,
    };
  },shallowEqual);



  const [searchParam, setSearchParam] = useSearchParams();
  const [filterbrand, setFilterBrand] = useState([]);
  const [filterStar, setFilterStar] = useState([]);
  const [filterMinPrice, setFilterMinPrice] = useState("");
  const [filterMaxPrice, setFilterMaxPrice] = useState("");
  const [filterPrice, setFilterPrice] = useState([]);
  const [sort, setSort] = useState(["reviews", "desc"]);
  const [currentPage,setCurrentPage]=useState(1)
  const [limitQty,setLimitDty]=useState(12)




  // const varible = filterStar.length > 0 ? filterStar?.map(Number) : 0;
  // // const filterProducts = products?.filter((el) => el?.rating >= varible);

  const handleFilterBrand = (val) => {
    setFilterBrand(val);
  };
  const handleFilterStar = (val) => {
    setFilterStar(val);
  };
  const handleSort = (e) => {
    const val = e.target.value;
    if (val === "option1") {
      setSort(["rating", "asc"]);
    }
    if (val === "option2") {
      setSort(["rating", "desc"]);
    }
    if (val === "option3") {
      setSort(["price", "asc"]);
    }
    if (val === "option4") {
      setSort(["price", "desc"]);
    }
  };
  const handlleGoClick = () => {
    setFilterPrice([filterMinPrice, filterMaxPrice]);
  };
  useEffect(() => {
    let param = {};
    if (sort) {
      param.sort = sort;
      setSearchParam(createSearchParams({ ...param }));
    } else if (!sort) {
      setSearchParam(param);
    }
    if (filterStar.length !== 0) {
      param.rating = filterStar;
      setSearchParam(createSearchParams({ ...param }));
    } else if (filterStar.length === 0) {
      setSearchParam(param);
    }
    if (filterPrice.length !== 0) {
      param.price = filterPrice;
      setSearchParam(createSearchParams({ ...param }));
    } else if (filterPrice.length === 0) {
      setSearchParam(param);
    }
  }, [sort, filterStar, filterPrice, searchParam, setSearchParam]);
  useEffect(() => {
    if (products.length === 0 || location) {
      const getProductsParam = {
        params: {
          rating: searchParam.getAll("rating"),
          price: searchParam.getAll("price"),
          sort: searchParam.getAll("sort"),
          page:currentPage,
          limit:limitQty,
        },
      };
      dispatch(getSearchProducts(getProductsParam));
    }
  }, [sort, location, dispatch, searchParam, location.search, products.length,currentPage]);

  //   useEffect(() => {
  //     if (query) {
  //       const url = `${base_url}/allproducts?q=${query}`;
  //       getProduct(url).then((res) => setProductList(productListGenerator(res)));
  //     }
  //   }, [query]);
  //   useEffect(() => {
  //     setTotalPage(filterProducts?.length);
  //   }, [filterProducts]);
  // useEffect(()=>{
  //   if(products.length>0){
  //     const set = new Set();
  //     products.map((el)=>set.add(el.brand));
  //     console.log(set)
  //   }
  // })
  // console.log(products)
  const handlePage=(val)=>{
    setCurrentPage(val)
  }
  return (
    <Box pos={"relative"} border={"0px solid green"} bgColor={"whiteAlpha.100"}>
      <Grid
        minHeight={"100vh"}
        pos={"relative"}
        templateColumns={"20% 75%"}
        gap={2}
        py={{ base: 1, sm: 2, lg: 1 }}
        mt={15}
      >
        <GridItem ml={7} position={"-webkit-sticky"} bgColor={"gray.100"}>
          <Box pos={"sticky"} top={10} w={"70%"} ml={[1, 2, 3, 4, 5, 6]}>
            <Heading size={"md"} fontWeight={"bold"} textAlign={"left"} my={5}>
              Filter
            </Heading>
            <Accordion defaultIndex={[0, 1, 2]} allowMultiple >
              {/* filterbrands */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Brands
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack>
                    {filterbrand?.map((el) => (
                      <CheckboxGroup
                        key={el + Math.random() + Date.now()}
                        value={filterbrand}
                        onChange={handleFilterBrand}
                      >
                        <Checkbox fontSize={"sm"} w={"100%"} value={el}>
                          {el}
                        </Checkbox>
                      </CheckboxGroup>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              {/* filter by star rating */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Star Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {rating.map((el) => (
                    <CheckboxGroup
                      key={el.id}
                      value={filterStar}
                      onChange={handleFilterStar}
                    >
                      <HStack>
                        <Checkbox value={`${el.id}`} fontSize={"sm"} w={"100%"}>
                          <Box
                            as={"span"}
                            display="flex"
                            flexDirection={"row"}
                            my={1}
                            fontSize={"14px"}
                          >
                            {el.rating.map((el) => (
                              <Text key={Math.random()} as="span">
                                {el}
                              </Text>
                            ))}
                            <Text mt={-1} ml={1} as={"span"}>
                              & up
                            </Text>
                          </Box>
                          <Text as={"span"}></Text>
                        </Checkbox>
                      </HStack>
                    </CheckboxGroup>
                  ))}
                </AccordionPanel>
              </AccordionItem>
              {/* filter by price */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Price Range
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <HStack>
                    <InputGroup size="s">
                      <InputLeftAddon
                        pointerEvents="none"
                        color="gray.900"
                        fontSize="1.2em"
                        children="₹"
                        bgColor={"gray.100"}
                      />
                      <Input
                        type="tel"
                        placeholder=" min"
                        focusBorderColor="gray.100"
                        onChange={(e) => setFilterMinPrice(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup size="s">
                      <InputLeftAddon
                        pointerEvents="none"
                        color="gray.900"
                        fontSize="1.2em"
                        children="₹"
                        bgColor={"gray.100"}
                      />
                      <Input
                        type="tel"
                        placeholder=" max"
                        focusBorderColor="gray.100"
                        onChange={(e) => setFilterMaxPrice(e.target.value)}
                      />
                    </InputGroup>
                    <Button
                      size="s"
                      variant={"ghost"}
                      _hover={{ color: "rgb(255,164,28)" }}
                      onClick={handlleGoClick}
                    >
                      Go
                    </Button>
                  </HStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </GridItem>

        <GridItem p={{ base: 1, sm: 1, md: 1 }} ml={8}>
          <Flex justifyContent={'space-between'} alignItems={'center'} mb={5} bgColor={"white"} w={"100%"} border={'0px solid red'}>
            <Box >
             Showing {current*limitQty-limitQty+1}-{current*limitQty} of {total*limitQty}
            </Box>
            <Select
              className="selectTag"
              focusBorderColor="white"
              onChange={handleSort}
              w={'20%'}
            >
              <option value="option1">Star: Low To Hight</option>
              <option value="option2">Star: High To Low</option>
              <option value="option3">Price: Low To High</option>
              <option value="option4">Price: High To Low</option>
            </Select>
          </Flex>
          <SimpleGrid columns={4} spacing="40px">
            {/* {products
              .filter((el) => el.rating >= varible)
              .filter((_, index) => {
                return (
                  index >= perPage * (activePage - 1) &&
                  index < perPage * activePage
                );
              })
              .map((el) => (
                <Box key={el.id} border={"0px solid green"}>
                  <CardComponent key={el.id} cardData={el} />
                </Box>
              ))} */}
            {products?.map((el) => (
              <Box key={el._id} border={"0px solid green"}>
                <CardComponent cardData={el} />
              </Box>
            ))}
          </SimpleGrid>
          <Pagination handlePage={handlePage}/>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SearchPage;
/**/
