import axios from "axios";

export const addOrUpdate = async (userData) =>{
    const {data} = await axios.post(`${import.meta.env.VITE_API_LINK}/user`,userData )
    return data;
}