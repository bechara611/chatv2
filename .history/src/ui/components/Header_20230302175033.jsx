import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <>

      <div className=" bg-dark contenedor-header col-12">
        <div className="titulo-header col-sm-4 col-12">
          <h4 className='text-light'>Chat live</h4>

        </div>
        <div className="col-sm-8 col-12  contenedor-menu">
          <nav className=' m-2 nav'>
            <NavLink className='item-menu' to={'/'}>Home</NavLink>
            <NavLink className='item-menu' to={'/chat'}>Chat</NavLink>
            <NavLink className='item-menu' to={'/register'}>Register</NavLink>
            <NavLink className='item-menu' to={'/login'}>Login</NavLink>
            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/Products'} onClick={}>Products</NavLink>
          </nav>
        </div>




      </div>
    </>

  )
}
