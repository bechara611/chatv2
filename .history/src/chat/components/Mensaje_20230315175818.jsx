import React, { useEffect } from 'react'
import './Mensaje.css'
export const Mensaje = ({ mensaje, background }) => {
 console.log(window.innerHeight)

    // border-bottom-right-radius: 100px;
    // border-top-right-radius: 100px;
    // border-bottom-left-radius: 50px;
    return (
        <>
            <div className="col-12 contenedorMensajeInidividual" style={
                { justifyContent: mensaje.email === localStorage.getItem('email') ? 'flex-start' : 'flex-end'
             
            }
            
            } >
                <div id='mensaje' className="mensaje col-sm-8 col-12 " style={{
                    background: mensaje.email === localStorage.getItem('email') ? 'yellow' : 'orange',
                    borderBottomRightRadius: mensaje.email === localStorage.getItem('email') && window.innerHeight>600 ? '100px' : '10px',
                    borderTopRightRadius: mensaje.email === localStorage.getItem('email') && window.innerHeight>600 ? '0px' : '100px',
                }}>
                    <div className=" col-12 contenedorMensajitos">

                        <p>{mensaje.name}:</p>
                        <p>{mensaje.mensaje}sdfhdsjghjkdfghjkdfghjdk</p>
                    </div>
                </div>
            </div>

        </>
    )
}
