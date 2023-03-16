import React from 'react'
import './Mensaje.css'
export const Mensaje = ({ mensaje, background }) => {
    return (
        <>
            <div className="col-12 contenedorMensajeInidividual" style={
                { justifyContent: mensaje.email === localStorage.getItem('email') ? 'flex-start' : 'flex-end',
            
            }
            
            } >
                <div className="mensaje col-8">
                    <div className="col-12">

                        <p>{mensaje.name}:</p>
                        <p>{mensaje.mensaje} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure praesentium incidunt odit maxime perferendis, fugit eius soluta illum consectetur possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa deleniti earum perferendis optio ea impedit, deserunt ad. Dolore quidem cumque nobis magni, dicta soluta nihil eum, nesciunt quis unde libero reprehenderit et, aperiam inventore dolorum maiores quisquam pariatur debitis voluptas blanditiis. Corporis voluptatum, porro voluptas esse earum sequi! Itaque?</p>
                    </div>
                </div>
            </div>

        </>
    )
}
