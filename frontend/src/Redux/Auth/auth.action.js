import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from "./auth.actionType";
import { authApi } from "./auth.apiRequset";

const request = () => {
  return {
    type: AUTH_REQUEST,
  };
};
const success = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};
const error = () => {
  return {
    type: AUTH_ERROR,
  };
};

export const registerFunction = (payload) => async (dispatch) => {

    console.log(payload)
    dispatch(request());
    try {
        const url=`${process.env.REACT_APP_URL}users/register`
        const data=await authApi(url,payload)
        if(data){
            dispatch(success(data))
        }
    } catch (err) {
        dispatch(error())
    }
};
export const loginFunction = (payload) => async (dispatch) => {

    console.log(payload)
    dispatch(request());
    try {
        const url=`${process.env.REACT_APP_URL}users/login`
        const data=await authApi(url,payload)
        if(data){
            dispatch(success(data))
            return data;
        }
    } catch (err) {
        dispatch(error())
    }
};
