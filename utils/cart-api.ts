import axios from "axios";

const API = axios.create({
    baseURL: "https://food-app-psg.herokuapp.com/api"
})

export const addCart = async (data: any , id:string | null = null ) => await API.post (`${id ? `/cart?id=${id}`: "/cart"}` , data)

export const getCart = async (id:string) => await API.get(`/cart?id=${id}`)

export const deleteCart = async (id:string , product:string) => await API.delete(`/cart?id=${id}&product=${product}`)