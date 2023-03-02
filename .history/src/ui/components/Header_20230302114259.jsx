import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>
      <div className='bg-primary'>
      <h1>Header</h1>
     
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
