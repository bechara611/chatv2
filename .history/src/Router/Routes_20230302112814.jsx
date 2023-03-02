import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const Rutas = () => {
    return (

        <Routes>
            <Route path='/*' element={<h1>Home</h1>}></Route>
        </Routes>

    )
}
