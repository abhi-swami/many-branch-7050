import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SINGLE_PRODUCT_SUCCESS,
} from "../../Redux/Search/search.actionType.js";
import {
  getProductsApi,
  getSingleProductsApi,
  getSubCategoryApi,
} from "./search.api.js";

const request = () => {
  return {
    type: SEARCH_REQUEST,
  };
};
const success = (data) => {
  return {
    type: SEARCH_SUCCESS,
    payload: data,
  };
};
const singleProductsuccess = (data) => {
  return {
    type: SINGLE_PRODUCT_SUCCESS,
    payload: data,
  };
};

const error = () => {
  return {
    type: SEARCH_ERROR,
  };
};

export const getSearchProducts = (data) => async (dispatch) => {
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/products`;
    const res = await getProductsApi(url, data);
    if (res) {
      console.log(res);
      dispatch(success(res));
    }
  } catch (err) {
    dispatch(error());
  }
};
export const getSingleProduct = (id) => async (dispatch) => {
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/products/${id}`;
    const res = await getSingleProductsApi(url);
    if (res) {
      dispatch(singleProductsuccess(res));
    }
  } catch (err) {
    dispatch(error());
  }
};
export const getSubCategory = (param) => async (dispatch) => {
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/products/subcategory`;
    const res = await getSubCategoryApi(url, param);
    if (res) {
      return res.product;
    }
  } catch (err) {
    dispatch(error());
  }
};
