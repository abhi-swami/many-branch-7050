import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSubCategory } from "../../Redux/Search/search.action";
import SubCategoryCarousels from "../../Carouseles/SubCategoryCarousels";

export const SingleProductCarousel = ({ sub_category }) => {
  const [data,setData]=useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    if (sub_category) {
      let productParams = {
        params: {
          sub_category: sub_category,
        },
      };
      dispatch(getSubCategory(productParams)).then((res)=>setData([...res]));
    }
  }, [dispatch, sub_category]);
  return <div>

    <SubCategoryCarousels allData={data}/>
  </div>;
};
