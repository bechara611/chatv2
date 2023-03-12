import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        name: localStorage.getItem('name') || null,
        email: localStorage.getItem('email') || null,
        token: localStorage.getItem('token') || null
    },
    reducers: {
        mostrar: (state, { payload }) => {
            state.name='Dany bechara2'
          
        }
    }
})

export const {mostrar} = AuthSlice.actions;