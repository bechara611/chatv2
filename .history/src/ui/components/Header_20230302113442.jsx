import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>
    <div>Header</div>
    <nav>
    <NavLink to={'/home'}>chat</NavLink>
    <NavLink to={'/chat'}>chat</NavLink>
    <NavLink to={'/login'}>Login</NavLink>
    <NavLink to={'/register'}>Register</NavLink>
    </nav>
    </>
    
  )
}
