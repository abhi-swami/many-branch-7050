
import { AUTH_REQUEST,AUTH_SUCCESS,AUTH_ERROR } from "./auth.actionType"
const initial={
    isLoading:false,
    isError:false,
    data:{}
}
export const authReducer=(state=initial,action)=>{
    const {type,payload}=action;
    switch(type){
        case AUTH_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case AUTH_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload,
            }
        }
        case AUTH_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        default:return state;
    }
}