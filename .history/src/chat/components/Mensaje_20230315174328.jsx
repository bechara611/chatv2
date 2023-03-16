import React from 'react'
import './Mensaje.css'
export const Mensaje = ({ mensaje, background }) => {
    // border-bottom-right-radius: 100px;
    // border-top-right-radius: 100px;
    // border-bottom-left-radius: 50px;
    return (
        <>
            <div className="col-12 contenedorMensajeInidividual" style={
                { justifyContent: mensaje.email === localStorage.getItem('email') ? 'flex-start' : 'flex-end'
             
            }
            
            } >
                <div className="mensaje col-8 " style={{
                    background: mensaje.email === localStorage.getItem('email') ? '#dcf8c6' : 'orange',
                   
                }}>
                    <div className=" col-12">

                        <p>{mensaje.name}:</p>
                        <p>{mensaje.mensaje}sdfhdsjghjkdfghjkdfghjdk</p>
                    </div>
                </div>
            </div>

        </>
    )
}
