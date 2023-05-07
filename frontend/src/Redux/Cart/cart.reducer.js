import {
    CART_REQUEST,
    CART_GET_SUCCESS,
    CART_POST_SUCCESS,
    CART_PATCH_SUCCESS,
    CART_DELETE_SUCCESS,
    CART_ERROR,
} from "./cart.actionType";

const initial = {
  isLoading: false,
  isError: false,
  data: [],
  singleProduct:{},
  currentPage:0,
  totalPage:0
};

export const cartReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_REQUEST: {
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }
    case CART_GET_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            isError:false,
            data:[...payload.products],
        }
    }
    case CART_POST_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            isError:false,
            data:[...state.data,...payload.products],
        }
    }
    case CART_PATCH_SUCCESS:{
        const arr=state.data.map((el)=>el._id===payload._id?{...el,...payload}:el)
        return {
            ...state,
            isLoading: false,
            isError: true,
            data:[...arr]
        };
    }
    case CART_DELETE_SUCCESS:{
        const arr=state.data.map((el)=>el._id===payload._id?{...el,...payload}:el)
        return {
            ...state,
            isLoading: false,
            isError: true,
            data:[...arr]
        };
    }
    case CART_ERROR:{
        return{
            ...state,
            isLoading:false,
            isError:false,
        }
    }
    default:
      return state
  }
};
