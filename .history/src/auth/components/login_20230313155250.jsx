import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../hooks/useAuth';
import { login, mostrar } from '../slices/authSlice';
import './login.css'
export const Login = () => {
    const navegar = useNavigate();
    const {Email,password} = useForm({Email:'',password:''})
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
        const {data} = await onLoginUSE({email:'bechara611@gmail.com',password:'123456'})
        if(!data){return}
        Swal.fire('Ok', 'WELCOME TO OUR CHAT', 'success')
        localStorage.setItem('name',data.user.name)
        localStorage.setItem('email',data.user.email)
        localStorage.setItem('token',data.token)
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
                        <input type="text" placeholder="Email" className='inputLoginRegister' id="username" value={Email} name='Email'></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className='inputLoginRegister' id="password" value={password} name='password'></input>

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
