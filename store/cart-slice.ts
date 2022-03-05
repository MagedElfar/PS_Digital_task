import { createSlice } from "@reduxjs/toolkit";
import {CartSlice , Action , CartItem} from "./../utils/interface";
import { addCart, getCart , deleteCart} from "./thunk-action";

const initialState:CartSlice = {
    isLoading: false,
    cart: {
        id: null,
        products: [],
    },
    total:0
}

const slice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
        [getCart.fulfilled.toString()] : (state:CartSlice , action:Action) => {
            state.cart = {
                id: action.payload?._id,
                products: action.payload.products
            };
            state.total = action.payload.products.reduce((sum:number , item:CartItem) => {
                return sum + (item.quantity * item.price)
            } , 0);
        },
        [addCart.fulfilled.toString()] : (state:CartSlice , action:Action) => {
            state.cart = {
                id: action.payload?._id,
                products: action.payload.products
            };
            state.total = action.payload.products.reduce((sum:number , item:CartItem) => {
                return sum + (item.quantity * item.price)
            } , 0);
        },
        [deleteCart.fulfilled.toString()] : (state:CartSlice , action:Action) => {
            state.cart = {
                id: action.payload?._id,
                products: action.payload.data.products.filter((p:any) => {
                    return p.productId != action.payload.id
                })
            };
            state.total = action.payload.data.products.reduce((sum:number , item:CartItem) => {
                return sum + (item.quantity * item.price)
            } , 0);
        },
    }
})

export default slice.reducer