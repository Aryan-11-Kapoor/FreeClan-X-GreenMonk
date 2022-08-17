import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartredux";
import userReducer from "./userSlice";
     
export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
    }
})
