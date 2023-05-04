import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from "./search.actionType";

const initial = {
  isLoading: false,
  isError: false,
  data: [],
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
