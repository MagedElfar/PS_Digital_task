import axios from "axios";

const API = axios.create({
    baseURL: "https://task-api-eosin.vercel.app/api"
})

export const getCategories = async () => await API.get("/categories");

export const getProducts = async (id:number) => await API.get(`/products?catID=${id}`)

export const addCart = async (data: any) => await API.post ("/cart/createCart" , data)