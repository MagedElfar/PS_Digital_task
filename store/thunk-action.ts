import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './../utils/cart-api';


//add cart
export const addCart = createAsyncThunk("cart/add" , async(args:any , thunkAPI) => {
    const {rejectWithValue}  = thunkAPI;
    try {
        const id = JSON.parse(localStorage.getItem("cart")!);
        if(id) {
            const {data} = await api.addCart(args , id)
            return data;
        } else {
            const {data} = await api.addCart(args)
            localStorage.setItem("cart" , JSON.stringify(data._id))
            console.log(data)
            return data;
        }
    } catch (error:any) {
        console.log(error)
        return rejectWithValue(error?.response?.data?.message || error.message)
    }
});

export const getCart = createAsyncThunk("cart/get" ,async(args:any , thunkAPI) => {
    const {rejectWithValue}  = thunkAPI;
    try {
        const {data} = await api.getCart(args?.id)
        return data;
    } catch (error:any) {
        console.log(error)
        return rejectWithValue(error?.response?.data?.message || error.message)
    }
});

//add cart
export const deleteCart = createAsyncThunk("cart/delete" , async(args:any , thunkAPI) => {
    const {rejectWithValue}  = thunkAPI;
    try {
        const id = JSON.parse(localStorage.getItem("cart")!);
            const {data} = await api.deleteCart(id , args?.id)
            return {data , id:args?.id};
    } catch (error:any) {
        console.log(error)
        return rejectWithValue(error?.response?.data?.message || error.message)
    }
});