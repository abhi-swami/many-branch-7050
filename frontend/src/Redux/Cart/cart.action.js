import {
  CART_REQUEST,
  CART_GET_SUCCESS,
  CART_POST_SUCCESS,
  CART_PATCH_SUCCESS,
  CART_DELETE_SUCCESS,
  CART_ERROR,
} from "../Cart/cart.actionType.js";
import {
  getCartProductsApi,
  postCartProductsApi,
  patchCartProductsApi,
  deleteCartProductsApi,
} from "./cart.api.js";

const request = () => {
  return {
    type: CART_REQUEST,
  };
};
const getsuccess = (data) => {
  return {
    type: CART_GET_SUCCESS,
    payload: data,
  };
};
const postsuccess = (data) => {
  return {
    type: CART_POST_SUCCESS,
    payload: data,
  };
};
const patchsuccess = (data) => {
  return {
    type: CART_PATCH_SUCCESS,
    payload: data,
  };
};
const deletesuccess = (data) => {
  return {
    type: CART_DELETE_SUCCESS,
    payload: data,
  };
};

const error = () => {
  return {
    type: CART_ERROR,
  };
};

export const getCartProducts = (data) => async (dispatch) => {
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/cart`;
    const res = await getCartProductsApi(url, data);
    if (res) {
      dispatch(getsuccess(res));
    }
  } catch (err) {
    dispatch(error());
  }
};
export const postCartProduct = (data) => async (dispatch) => {
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/cart/add`;
    const res = await postCartProductsApi(url,data);
    if (res) {
      dispatch(postsuccess(res));
    }
  } catch (err) {
    dispatch(error());
  }
};
export const patchCartProduct = (id,param) => async (dispatch) => {
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/cart/${id}`;
    const res = await patchCartProductsApi(url, param);
    // console.log("res",res)
    if (res) {
      dispatch(patchsuccess(res))
      return res.product;
    }
  } catch (err) {
    dispatch(error());
  }
};
export const deleteCartProduct = (id,param) => async (dispatch) => {
  dispatch(request());
  try {
    const url = `${process.env.REACT_APP_URL}/cart/${id}`;
    const res = await deleteCartProductsApi(url, param);
    if (res) {
      dispatch(deletesuccess(res));
    }
  } catch (err) {
    dispatch(error());
  }
};
