import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth/components/login'
import { Register } from '../auth/components/register'
import { Chat } from '../chat/components/Chat'
import { Home } from '../ui/components/Home'

export const Rutas = () => {
  
    return (

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/chat' element={<Chat></Chat>}></Route>
            <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>

    )
}
