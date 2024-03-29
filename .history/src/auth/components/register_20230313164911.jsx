import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import './login.css'
export const Register = () => {
    const navegar = useNavigate();
    const {onRegisterUSE}= useAuth();
    const onRegister = async(e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_BACKEND)
        const { data } = await onLoginUSE({ email: Email, password })
        if (!data) { return }

    }
    return (
        <>
            <div className="col-12 contenedor-loginRegistro animate__animated animate__flipInX ">
                <div className="col-md-4 col-sm-6 col-10 ">
                    <form className='bg-dark formularioLoginRegister ' onSubmit={onRegister}>
                        <h3>Register</h3>

                        <label htmlFor="name" className='labelLoginRegister'>Name</label>
                        <input type="text" placeholder="Name" className='inputLoginRegister' id="name"></input>

                        <label htmlFor="username" className='labelLoginRegister'>Email</label>
                        <input type="text" placeholder="Email" className='inputLoginRegister' id="username"></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className='inputLoginRegister' id="password"></input>

                        <button className='btnLoginRegister'>Register</button>
                        <div className="social">

                            <div className="go" onClick={() => { navegar('/login') }}><i className="fab fa-google" ></i>  Login</div>

                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}
