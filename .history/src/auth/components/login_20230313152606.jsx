import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { login, mostrar } from '../slices/authSlice';
import './login.css'
export const Login = () => {
    const navegar = useNavigate();
    const authState = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
const {onLoginUSE} = useAuth()
    useEffect(() => {
      if(localStorage.getItem('name') && localStorage.getItem('email') && localStorage.getItem('token')){
        navegar('/home')
      }
    
      return () => {
        
      }
    }, [])
    

    const onLogin=async(e)=>{
        e.preventDefault();
        //TODO LOGIN 
        const resultado = await onLoginUSE({email:'bechara611@gmail.com',password:'123456'})
        console.log({resultado})
        localStorage.setItem('name','Dany Bechara')
        localStorage.setItem('email','bechara611@gmail.com')
        localStorage.setItem('token','abc123')
        //TODO hacer el login y obtener los valores

        console.log(authState)
        dispatch(login({
            name:localStorage.getItem('name'),
            email:localStorage.getItem('email'),
            token:localStorage.getItem('token')
        }));
        navegar('/home')

    }
    return (
        <>
            <div className="col-12 contenedor-loginRegistro animate__animated animate__flipInX ">
                <div className="col-md-4 col-sm-6 col-12 m-5">
                    <form className='bg-dark formularioLoginRegister ' onSubmit={onLogin}>
                        <h3>Login</h3>

                        <label htmlFor="username" className='labelLoginRegister'>Email</label>
                        <input type="text" placeholder="Email" className='inputLoginRegister' id="username"></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className='inputLoginRegister' id="password"></input>

                        <button className='btnLoginRegister'>Log In</button>
                        <div className="social">
                      
                            <div className="go"  onClick={()=>{navegar('/register')}}><i className="fab fa-google" ></i>  Register</div>
                          
                        </div>
                    </form>
                </div>
            </div>

         
        </>
    )
}
