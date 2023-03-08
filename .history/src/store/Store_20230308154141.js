import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../auth/slices/authSlice";


export const store = configureStore({
    reducer:{
        auth:AuthSlice.reducer
    },
    middleware:(middleware)=>{
        return middleware({
            serializableCheck:false,
        })
    }
    
})

