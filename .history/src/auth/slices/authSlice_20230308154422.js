import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        name: 'Dany Bechara',
        email: null,
        token: null
    },
    reducers: {
        mostrar: (state, { payload }) => {
            state.name='Dany bechara2'
            console.log(state);
        }
    }
})

export const {mostrar} = AuthSlice.actions;