import axios from "axios";

const authApi=async(url,payload)=>{
    const res=await axios.post(`${url}`,payload)
    return res.data
}

export {authApi}