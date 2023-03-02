import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>
      <div className='bg-dark contenedor-header'>
        <div className="row">
          <div className="titulo-header col-4">
            <h1 className='text-light'>Header</h1>

          </div>
          <div className="col-2">
            <nav className='nav'>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/chat'}>chat</NavLink>
              <NavLink to={'/login'}>Login</NavLink>
              <NavLink to={'/register'}>Register</NavLink>
            </nav>

          </div>
        </div>



      </div>
    </>

  )
}
