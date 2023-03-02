import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>
      <div>
      <h1 className='bd-dark'>Header</h1>
      <button className='btn btn-primary'>Ir</button>
      </div>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/chat'}>chat</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
      </nav>
    </>

  )
}
