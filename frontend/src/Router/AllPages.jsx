import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../Pages/Search/SearchPage.jsx";
import SingleProduct from "../Pages/Single_Product_Page/SingleProduct.jsx";
import Home from "../Pages/Home/Home.jsx";
import { Dashboard } from "../Pages/Admin/Dashboard.jsx";
import Addproduct from "../Pages/Admin/Addproduct.jsx";
import UpdatePro from "../Pages/Admin/UpdatePro.jsx";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/search" element={ <SearchPage />}/>
        <Route path="/product/:productId" element={ <SingleProduct />}/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/addpro" element={<Addproduct />} />
        <Route path="/admin/update" element={<UpdatePro />} />
      </Routes>
    </div>
  );
};

export default AllPages;
