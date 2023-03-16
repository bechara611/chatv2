import React from 'react'

export const Mensaje = ({ mensaje }) => {
    return (
        <>
            <div className="col-12">
                <div className="mensaje">
                    <div>{mensaje.name}</div>

                </div>
            </div>

        </>
    )
}
