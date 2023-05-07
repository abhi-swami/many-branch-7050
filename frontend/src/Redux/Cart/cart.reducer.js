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
            data:[...payload.data],
        }
    }
    case CART_POST_SUCCESS:{

        return{
            ...state,
            isLoading:false,
            isError:false,
            data:[...state.data,...payload.data],
        }
    }
    case CART_PATCH_SUCCESS:{
        const arr=state.data.map((el)=>el._id===payload.data._id?{...el,...payload.data}:el)
        return {
            ...state,
            isLoading: false,
            isError: true,
            data:[...arr]
        };
    }
    case CART_DELETE_SUCCESS:{
        console.log("payload",payload)
        const data=state.data
        console.log("data",data)
        const arr=data.filter((el)=>el._id!==payload.data._id)
        console.log("arr",arr)
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
