
import { io } from "socket.io-client";
import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import { getUnixTime } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { pushMensajesSlice } from "../slices/chatSlice";
export const Chat = () => {
    const mensajesEstado= useSelector(state=>state.chatSlice)
    const dispatch = useDispatch();

    const socket = io(process.env.REACT_APP_BACKEND, { //ruta del backend
        'extraHeaders': {
            'token': localStorage.getItem('token'),
            'email': localStorage.getItem('email'),
            'nombre': localStorage.getItem('name'),
        }
    })
    socket.on('connect', () => { console.log('conectado') })
    socket.on('NuevoIntegrante', (payload) => {
        //TODO aca debes colocarle al slice y al estado los nuevos integrantes
        console.log(payload)
    })

    //?metodo para enviar mensajes

    const EnviarMensajes = () => {
        let mensaje = {name:localStorage.getItem('name'),
        mensaje:'Mensaje nuevo ',//TODO ponle el estado de mensaje
        fecha:getUnixTime(new Date()),
        email:localStorage.getItem('email')}
        socket.emit('recibiMensaje', mensaje)
    }

    //?recibir mensajes
    socket.on('recibirTodosMensajes',(payload)=>{
        //TODO colocar en el slice los mensajes
        dispatch(pushMensajesSlice(payload))
        console.log(payload)})

    //TODO FIN SOCKET
    const [vector2, setvector] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const referenciaDiv = useRef();
    useEffect(() => {
        referenciaDiv.current.scrollTop = referenciaDiv.current.scrollHeight;

    }, [])
    useEffect(() => {

        referenciaDiv.current.scrollTop = referenciaDiv.current.scrollHeight;
    }, [vector2])

    return (
        <>
            <div className="col-12 chat" id='chat' ref={referenciaDiv}>
                {
                    vector2.map((index, elemento) => {
                        return <h1 key={index}>{index}</h1>
                    })
                }
            </div>
            <button onClick={() => {

                setvector([...vector2, 11])

            }}> sumar</button>
            <button onClick={() => { EnviarMensajes() }}>Enviar</button>
        </>

    )
}
