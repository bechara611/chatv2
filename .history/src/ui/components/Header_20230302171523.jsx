import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>
      <div className='bg-dark'>
      <div className="titulo-header">
      <h1 className='text-light'>Header</h1>
      
      </div>
     
  
      <nav className='p-2 m-2 nav'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/chat'}>chat</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
      </nav>
      </div>
    </>

  )
}
