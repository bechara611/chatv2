import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        name: localStorage.getItem('name') || null,
        email: localStorage.getItem('email') || null,
        token: localStorage.getItem('token') || null
    },
    reducers: {
        login: (state, { payload }) => {
            state.name=payload.name;
            state.email=payload.email;
            state.token=payload.token
          
        },
        logout:(state,{payload})=>{
            state.name=null;
            state.email=null;
            state.token=null;
        },
    }
})

export const {mostrar,logout,login} = AuthSlice.actions;