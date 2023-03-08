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
            console.log(state);
        }
    }
})

export Action