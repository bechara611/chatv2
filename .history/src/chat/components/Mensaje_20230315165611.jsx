import React from 'react'
import './Mensaje.css'
export const Mensaje = ({ mensaje,background }) => {
    return (
        <>
            <div className="col-12 contenedorMensajeInidividual">
                <div className="mensaje">
                    <h6>{mensaje.name}</h6>
                   
                </div>
            </div>

        </>
    )
}
