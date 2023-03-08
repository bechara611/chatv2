import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
export const Login = () => {
    const navegar = useNavigate();
    const onLogin=(e)=>{
        e.preventDefault();

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
