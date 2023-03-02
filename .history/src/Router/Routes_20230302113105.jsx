import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

export const Rutas = () => {
    const navegar= useNavigate();
    return (

        <Routes>
            <Route path='/' element={<h1>Home</h1>}></Route>
            <Route path='/login' element={<h1>Login</h1>}></Route>
            <Route path='/*' element={navegar('/')}></Route>
        </Routes>

    )
}
