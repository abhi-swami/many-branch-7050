import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../Pages/Search/SearchPage.jsx";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/search" element={ <SearchPage />}/>
        
      </Routes>
    </div>
  );
};

export default AllPages;
