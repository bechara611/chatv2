import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../auth/slices/authSlice";
import chatSlice from "../chat/slices/chatSlice";


export const store = configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        chatSlice:chatSlice.reducer
    },
    middleware:(middleware)=>{
        return middleware({
            serializableCheck:false,
        })
    }
    
})

