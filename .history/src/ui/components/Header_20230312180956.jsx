import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../auth/slices/authSlice';
import './Header.css'
export const Header = () => {
  const navegar= useNavigate()
  const authState = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  
  return (
    <>

      <div className=" bg-dark contenedor-header col-12">
        <div className="titulo-header col-sm-4 col-12">
          <h4 className='text-light'>Chat live</h4>

        </div>
        <div className="col-sm-8 col-12  contenedor-menu">
          <nav className=' m-2 nav'>
       
            <NavLink className={ ({isActive}) => `item-menu  ${ isActive ? 'activeLink':'' }` } to={'/'} >Home</NavLink>
            {
              authState.token && authState.name && authState.email ? 
              <NavLink className={ ({isActive}) => `item-menu  ${ isActive ? 'activeLink':'' }` } to={'/chat'} >Chat</NavLink> 
              :<></>
            }
          
            <NavLink className={ ({isActive}) => `item-menu  ${ isActive ? 'activeLink':'' }` } to={'/register'} >Register</NavLink>
            {authState.token && authState.name && authState.email ? 
              <NavLink className={ ({isActive}) => `item-menu  }` } onClick={()=>{
                localStorage.removeItem('email')
                localStorage.removeItem('token')
                localStorage.removeItem('name')
             
                navegar('/login')
                dispatch(logout())
              }} >Logout</NavLink>
              :
              <NavLink className={ ({isActive}) => `item-menu  ${ isActive ? 'activeLink':'' }` } to={'/login'} >Login</NavLink>
            }
           
            </nav>
        </div>




      </div>
    </>

  )
}
