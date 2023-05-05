import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../Pages/Search/SearchPage.jsx";
import Home from "../Pages/Home/Home.jsx";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/search" element={ <SearchPage />}/>
        <Route path="/" element={<Home/>}></Route>
        
      </Routes>
    </div>
  );
};

export default AllPages;
