import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart-slice"



const store = configureStore({
    reducer:{
        cart
    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store;