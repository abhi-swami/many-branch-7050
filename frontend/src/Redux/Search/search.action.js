import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from "../../Redux/Search/search.actionType.js";
import { getProductsApi } from "./search.api.js";

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
const error = () => {
  return {
    type: SEARCH_ERROR,
  };
};

export const getSearchProducts = (data) => async (dispatch) => {
  console.log(data);
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/products`;
    const res = await getProductsApi(url,data);
    if (res) {
      // console.log(res)
      dispatch(success(res));
    }
} catch (err) {
      dispatch(error());
  }
};
