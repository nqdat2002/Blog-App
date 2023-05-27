import axios from "axios";
const baseURL = "http://localhost:5002/";

export const validateUser = async (token) => {
    try {
        const res = await axios.post(`${baseURL}api/auth/login`, token);
        return res.data;
    } catch (error) {
        return null;
    }
};

export const getAllPost = async () =>{
    try {
        const res = await axios.get(`${baseURL}api/post/getAll`);
        return res.posts;
    } catch (error) {
        return null;
    }
}