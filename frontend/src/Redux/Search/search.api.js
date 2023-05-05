import axios from "axios"

export const getProductsApi=async(url,params)=>{
    const res=await axios.get(`${url}`,params);
    return res.data;
}
export const getSingleProductsApi=async(url)=>{
    const res=await axios.get(`${url}`);
    return res.data;
}