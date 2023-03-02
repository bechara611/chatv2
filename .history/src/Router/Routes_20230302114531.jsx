import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth/components/login'

export const Rutas = () => {
  
    return (

        <Routes>
            <Route path='/' element={<h1>Home</h1>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<h1>Register</h1>}></Route>
            <Route path='/chat' element={<h1>chat</h1>}></Route>
            <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>

    )
}
