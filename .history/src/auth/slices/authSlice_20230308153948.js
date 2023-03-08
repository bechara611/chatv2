import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:'auth',
    initialState:{},
    reducers:{
        mostrar:(state,{payload})=>{
            console.log(state);
        }
    }
})