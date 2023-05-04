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
} from "@chakra-ui/react";

import React, { useEffect, useState, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getSearchProducts } from "../../Redux/Search/search.action.js";

import CardComponent from "../../Components/Card/CardComponent.jsx";

import {
  createSearchParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { TbArrowsDownUp } from "react-icons/tb";
// import Pagination from "../../Components/Pagination";
const rating = [
  { id: 4, rating: [<AiFillStar/>,<AiFillStar/> ]},
  { id: 3, rating: 4 },
  { id: 2, rating: 3 },
  { id: 1, rating: 2 },
];
const obj = {
  sortBy: "rating",
  order: "low",
};
const SearchPage = () => {
  const [searchParamsFilter, setSearchParamsFilter] = useSearchParams();
  const [searchParamsStar, setSearchParamsStar] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterStar, setFilterStar] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [sort, setSort] = useState(obj);
  const [totalPage, setTotalPage] = useState(0);


  const dispatch = useDispatch();
  const location = useLocation();

  const { products } = useSelector((store) => {
    return { products: store.searchReducer.data };
  }, shallowEqual);
  // const varible = filterStar.length > 0 ? filterStar?.map(Number) : 0;
  // // const filterProducts = products?.filter((el) => el?.rating >= varible);

  const handleFilterValue = (val) => {
    setFilterCategory(val);
  };
  const handleFilterStar = (val) => {
    setFilterStar(val);
  };
  const handleSortPrice = (e) => {
    const val = e.target.value;
    if (val === "option1") {
      setSort({ sort: "rating", order: "low" });
    }
    if (val === "option2") {
      setSort({ sortBy: "rating", order: "high" });
    }
    if (val === "option3") {
      setSort({ sortBy: "price", order: "low" });
    }
    if (val === "option4") {
      setSort({ sortBy: "price", order: "high" });
    }
  };
  useEffect(() => {
    let param = {};
    if (filterCategory.length !== 0) {
      param.filter = filterCategory;
      setSearchParamsFilter(createSearchParams({ filter: filterCategory }));
      setIsActive(true);
    } else if (filterCategory.length === 0) {
      setIsActive(false);
      setSearchParamsFilter(param);
    }
    if (filterStar.length !== 0 && isActive === false) {
      param.rating = filterStar;
      setSearchParamsStar(createSearchParams({ rating: filterStar }));
    } else if (filterStar.length === 0) {
      setSearchParamsStar(param);
    }
  }, [
    filterCategory,
    filterStar,
    isActive,
    setSearchParamsFilter,
    setSearchParamsStar,
  ]);
  /*
   */
  useEffect(() => {
    if (products.length === 0 || location) {
      // const url = `${base_url}/allproducts?q=${query}`;
      const getProductsParam = {
        params: {
          brand: searchParamsFilter.getAll("filter"),
          rating_gte:searchParamsStar.getAll("rating"),
          _sort: sort,
          _order: searchParamsFilter?.get("star_sort"),
        },
      };
      dispatch(getSearchProducts(getProductsParam));
    }
  }, [
    sort,
    location,
    dispatch,
    searchParamsFilter,
    searchParamsStar,
    location.search,
    isActive,
    products.length,
  ]);

  //   useEffect(() => {
  //     if (query) {
  //       const url = `${base_url}/allproducts?q=${query}`;
  //       getProduct(url).then((res) => setProductList(productListGenerator(res)));
  //     }
  //   }, [query]);
  //   useEffect(() => {
  //     setTotalPage(filterProducts?.length);
  //   }, [filterProducts]);

  console.log(products);

  return (
    <Box pos={"relative"} border={"0px solid green"} bgColor={"gray.100"}>
      <Grid
        minHeight={"100vh"}
        pos={"relative"}
        templateColumns={"20% 75%"}
        gap={2}
        py={{ base: 1, sm: 2, lg: 1 }}
        mt={15}
      >
        <GridItem ml={7} position={"-webkit-sticky"} bgColor={"white"}>
          <Box pos={"sticky"} top={10} w={"70%"} ml={8}>
            <Heading size={"md"} fontWeight={"bold"} textAlign={"left"} my={5}>
              Filter
            </Heading>
            <Accordion defaultIndex={[0, 1]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Brands
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack>
                    {productList?.map((el) => (
                      <CheckboxGroup
                        key={el + Math.random() + Date.now()}
                        value={filterCategory}
                        onChange={handleFilterValue}
                      >
                        <Checkbox fontSize={"sm"} w={"100%"} value={el}>
                          {el}
                        </Checkbox>
                      </CheckboxGroup>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                  >
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
                        <Checkbox
                          value={`${el.rating}`}
                          fontSize={"sm"}
                          w={"100%"}
                        >
                          <Box
                            as={"span"}
                            display="flex"
                            flexDirection={"row"}
                            my={1}
                            fontSize={"14px"}
                          >
                            {el.rating}
                            <Icon as={AiFillStar} mx={1} mt={1} /> & above
                          </Box>
                          <Text as={"span"}></Text>
                        </Checkbox>
                      </HStack>
                    </CheckboxGroup>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* <Heading size={"md"} fontWeight={"bold"} textAlign={"left"} my={5}>
              Sort
            </Heading>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Star Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack ml={0}>
                    <RadioGroup
                      defaultValue={sortStar}
                      onChange={handleSortStar}
                    >
                      <VStack direction="row" ml={-8}>
                        <Radio value="asc">Low To High</Radio>
                        <Radio color={"rgb(255,255,255)"} value="desc">
                          Hight To Low
                        </Radio>
                      </VStack>
                    </RadioGroup>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion> */}
          </Box>
        </GridItem>
        <GridItem p={{ base: 1, sm: 1, md: 1 }} ml={8}>
          <Flex justifyContent={"flex-end"} mb={5} bgColor={"white"} w={"20%"}>
            {/* <Menu closeOnSelect={true} bgColor={"white"}>
              <MenuButton
                bgColor={"white"}
                as={Button}
                _hover={{ backgroundColor: "rgb(41,116,242)" }}
                mr={2}
              >
                <Text as={"span"} mt={0}>
                  Price
                </Text>
                <Icon as={TbArrowsDownUp} mx={1} fontSize={"12px"} />
              </MenuButton>
              <MenuList minW="155px">
                <RadioGroup
                  ml={3}
                  defaultValue={sortStar}
                  onChange={handleSortPrice}
                >
                  <VStack direction="row" ml={-8}>
                    <Radio value="asc">Low To High</Radio>
                    <Radio value="desc">Hight To Low</Radio>
                  </VStack>
                  <VStack direction="row" ml={-8}>
                    <Radio value="asc">Low To High</Radio>
                    <Radio value="desc">Hight To Low</Radio>
                  </VStack>
                </RadioGroup>
                
              </MenuList>
            </Menu> */}
            <Select onChange={handleSortPrice}>
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
              <Box key={el._id} border={"2px solid green"}>
                <CardComponent cardData={el} />
              </Box>
            ))}
          </SimpleGrid>
          {/* <Pagination posts={totalPage} /> */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SearchPage;
