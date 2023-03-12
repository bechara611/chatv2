import React from 'react'
import './chat.css'
export const Chat = () => {
    let vector =Array.from({length:10},()=>true)
    const mensaje = (numero)=>{
        return(
            <>
            <h1>`Hola ${numero}`</h1>
            </>
        )
    }
  return (
    <>
    <div className="col-12 chat">
    {
        vector.map((index)=>{
            return <mensaje numero={index}></mensaje>
        })
    }
    </div>
    </>
   
  )
}
