import React from 'react'
import './Mensaje.css'
export const Mensaje = ({ mensaje,background }) => {
    return (
        <>
            <div className="col-12 contenedorMensajeInidividual">
                <div className="mensaje col-16">
                    <p>{mensaje.name}:</p>
                    <p>{mensaje.mensaje} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure praesentium incidunt odit maxime perferendis, fugit eius soluta illum consectetur possimus!</p>
                </div>
            </div>

        </>
    )
}
