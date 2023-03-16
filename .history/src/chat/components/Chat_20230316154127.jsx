
import { io } from "socket.io-client";
import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import { getUnixTime } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { pushConectadosSlice, pushMensajesSlice } from "../slices/chatSlice";
import { Mensaje } from "./Mensaje";

const socket = io(process.env.REACT_APP_BACKEND, { //ruta del backend
    'extraHeaders': {
        'token': localStorage.getItem('token'),
        'email': localStorage.getItem('email'),
        'nombre': localStorage.getItem('name'),
    }
})
export const Chat = () => {
    const [texto, setTexto] = useState('')

    const mensajesEstado = useSelector(state => state.chatSlice)
    const dispatch = useDispatch();

    useEffect(() => {

        socket.on('connect', () => { })
        socket.on('NuevoIntegrante', (payload) => {
            //TODO aca debes colocarle al slice y al estado los nuevos integrantes
            dispatch(pushConectadosSlice(payload))
            console.log(payload)
        })
        //?recibir mensajes
        socket.on('recibirTodosMensajes', (payload) => {
            //TODO colocar en el slice los mensajes
            dispatch(pushMensajesSlice(payload))
            console.log(payload)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    //?metodo para enviar mensajes

    const EnviarMensajes = () => {
        let mensaje = {
            name: localStorage.getItem('name'),
            mensaje: texto,//TODO ponle el estado de mensaje
            fecha: getUnixTime(new Date()),
            email: localStorage.getItem('email')
        }
        socket.emit('recibiMensaje', mensaje)
        setTexto('')
    }



    //TODO FIN SOCKET

    const referenciaDiv = useRef();
    const referenciaDiv2 = useRef();
    useEffect(() => {

        referenciaDiv2.current.scrollTop = referenciaDiv2.current.scrollHeight;
    }, [])
    useEffect(() => {


        referenciaDiv2.current.scrollTop = referenciaDiv2.current.scrollHeight;
    }, [mensajesEstado])

    return (
        <>
            <div className="col-12 chat2 " ref={referenciaDiv}>
                <div className="col-10 hijoChat">
                    <div className="col-12 parteMensajes" ref={referenciaDiv2} >
                        {
                            mensajesEstado.mensajes.map((mensaje, index) => {
                                return <Mensaje key={index} mensaje={mensaje}></Mensaje>
                            })
                        }
                    </div>
                    <div className="col-12 parteInputs">
                        <div className="col-9 col-sm-11">
                            <textarea type="text" className="form-control area" placeholder="Type" value={texto} onChange={(e) => { setTexto(e.target.value) }} />
                        </div>
                        <div className="col-3 col-sm-1 cajaicono " onClick={() => { EnviarMensajes() }}>
                            <i className="fa-solid fa-paper-plane botonenviar" ></i>
                            <p className="MensajeBoton">Send</p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
