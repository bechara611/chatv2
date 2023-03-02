import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

export const Rutas = () => {
  
    return (

        <Routes>
            <Route path='/' element={<h1>Home</h1>}></Route>
            <Route path='/login' element={<h1>Login</h1>}></Route>
            <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>

    )
}
