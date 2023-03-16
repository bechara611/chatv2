import React, {  } from 'react'
import './Mensaje.css'
export const Mensaje = ({ mensaje, background }) => {
 
if(!mensaje){return}
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
                    background: mensaje.email === localStorage.getItem('email') ? 'rgb(147, 230, 147,.5)' : 'rgba(122, 178, 242, 0.5)',
                    borderBottomRightRadius: mensaje.email === localStorage.getItem('email') && window.innerWidth>610 ? '100px' : '10px',
                  
                }}>
                    <div className=" col-12 contenedorMensajitos">

                        <p className='nombre'>{mensaje.name}:</p>
                        <p>{mensaje.mensaje}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
