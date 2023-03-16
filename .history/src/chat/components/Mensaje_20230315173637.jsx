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
                <div className="mensaje " style={{
                    background: mensaje.email === localStorage.getItem('email') ? 'yellow' : 'orange',
                    borderBottomRightRadius: mensaje.email === localStorage.getItem('email') ? '100px' : '10px',
                }}>
                    <div className="">

                        <p>{mensaje.name}:</p>
                        <p>{mensaje.mensaje}sdfhdsjghjkdfghjkdfghjdk</p>
                    </div>
                </div>
            </div>

        </>
    )
}
