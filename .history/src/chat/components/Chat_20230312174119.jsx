import React, { useEffect, useState } from 'react'
import './chat.css'
export const Chat = () => {
    const [vector2, setvector] = useState([1,2,3,4,5,6,7,8,9,10])
 
    useEffect(() => {
      let chat= document.getElementById('chat')
     chat.scrollTop=chat.scrollHeight;

    }, [])
    
  return (
    <>
    <div className="col-12 chat" id='chat'>
    {
        vector2.map((index,elemento)=>{
            return <h1>{index}</h1>
        })
    }
    </div>
    
    </>
   
  )
}
