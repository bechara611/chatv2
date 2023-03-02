import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>
      <div className='bg-dark'>
      <h1 className='color-dark'>Header</h1>
     
  
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/chat'}>chat</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
      </nav>
      </div>
    </>

  )
}
