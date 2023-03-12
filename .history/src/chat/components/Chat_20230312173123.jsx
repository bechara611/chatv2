import React from 'react'
import './chat.css'
export const Chat = () => {
    let vector =Array.from({length:10},()=>true)
    let vector2 = [1,2,3,4,5,6,7,8]
  return (
    <>
    <div className="col-12 chat">
    {
        vector2.map((index,elemento)=>{
            return <h1>{index}</h1>
        })
    }
    </div>
    
    </>
   
  )
}
