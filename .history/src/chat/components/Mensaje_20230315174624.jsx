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
                <div className="mensaje col-sm-8 col-12 " style={{
                    background: mensaje.email === localStorage.getItem('email') ? 'yellow' : 'orange',
                    borderBottomRightRadius: mensaje.email === localStorage.getItem('email') ? '100px' : '10px',
                    borderTopRightRadius: mensaje.email === localStorage.getItem('email') ? '0px' : '100px',
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
