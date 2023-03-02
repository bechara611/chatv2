import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>
    <div>Header</div>
    <nav>
    <NavLink to={'/chat'}>Login</NavLink>
    <NavLink to={'/login'}>Login</NavLink>
    <NavLink to={'/register'}>Login</NavLink>
    </nav>
    </>
    
  )
}
