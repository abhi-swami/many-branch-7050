import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SINGLE_PRODUCT_SUCCESS,
  SEARCH_ERROR,
} from "./search.actionType";

const initial = {
  isLoading: false,
  isError: false,
  data: [],
  singleProduct:{},
  currentPage:0,
  totalPage:0
};

export const searchReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_REQUEST: {
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }
    case SEARCH_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            isError:false,
            data:[...payload.products],
            currentPage:payload.currentPage,
            totalPage:payload.totalPages,
        }
    }
    case SINGLE_PRODUCT_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            isError:false,
            singleProduct:{...payload.product},
        }
    }
    case SEARCH_ERROR:{
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
