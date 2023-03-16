import React from 'react'
import './Mensaje.css'
export const Mensaje = ({ mensaje,background }) => {
    return (
        <>
            <div className="col-12 contenedorMensajeInidividual" style={mensaje.email===localStorage.getItem('email') ? background:'red' }>
                <div className="mensaje col-6">
                    <p>{mensaje.name}:</p>
                    <p>{mensaje.mensaje} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure praesentium incidunt odit maxime perferendis, fugit eius soluta illum consectetur possimus!</p>
                </div>
            </div>

        </>
    )
}
