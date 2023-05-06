import axios from "axios"

export const getCartProductsApi=async(url)=>{
    const res = await axios.get(`${url}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return res.data;
}
export const postCartProductsApi=async(url,payload)=>{
    const res = await axios({
        method: "post",
        url: `${url}`,
        headers: {
          token: localStorage.getItem("token"),
        },
        data: { ...payload },
      })
      return res.data;
}
export const patchCartProductsApi=async(url,payload)=>{
    const res = await axios({
        method: "patch",
        url: `${url}`,
        headers: {
          token: localStorage.getItem("token"),
        },
        data: { ...payload },
      })
      return res.data;
}
export const  deleteCartProductsApi=async(url)=>{
    const res = await axios({
        method: "delete",
        url: `${url}`,
        headers: {
          token: localStorage.getItem("token"),
        }
      })
      return res.data;
}