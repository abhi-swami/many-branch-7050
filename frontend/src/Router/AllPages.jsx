import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../Pages/Search/SearchPage.jsx";
import SingleProduct from "../Pages/Single_Product_Page/SingleProduct.jsx";
import Home from "../Pages/Home/Home.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Login from "../Pages/Auth/Login.jsx";
import Signup from "../Pages/Auth/Signup.jsx";



const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/search" element={ <SearchPage />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/product/:productId" element={ <SingleProduct />}/>
        <Route path="/cart" element={ <Cart />}/>
      </Routes>
    </div>
  );
};

export default AllPages;
