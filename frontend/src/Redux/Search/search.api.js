import axios from "axios"

export const getProductsApi=async(url,params)=>{
    const res=await axios.get(`${url}`,params);
    return res.data;
}