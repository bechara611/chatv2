import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        
    },
    middleware:(middleware)=>{
        return middleware({
            serializableCheck:false,
        })
    }
    
})

