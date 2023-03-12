import React from 'react'
import './chat.css'
export const Chat = () => {
    let vector =Array.from({length:10},()=>true)

  return (
    <>
    <div className="col-12 chat">
    {
        vector.map((index)=>{
            return <h1>{index}</h1>
        })
    }
    </div>
    
    </>
   
  )
}
