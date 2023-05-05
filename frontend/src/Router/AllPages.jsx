import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../Pages/Search/SearchPage.jsx";
import SingleProduct from "../Pages/Single_Product_Page/SingleProduct.jsx";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/search" element={ <SearchPage />}/>
        <Route path="/product/:productId" element={ <SingleProduct />}/>
        
      </Routes>
    </div>
  );
};

export default AllPages;
