import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mensajes:[{name:'',mensaje:'',fecha:'',email:''}],
    conectados:[],
}

const chatSlice = createSlice({
    name:'chatSlice',
    initialState,
    reducers:{
        pushConectadosSlice :(state,{payload})=>{

        },
        pushMensajesSlice:(state,{payload})=>{},
    }
})

export default chatSlice
export const {pushConectadosSlice,pushMensajesSlice} = chatSlice.actions