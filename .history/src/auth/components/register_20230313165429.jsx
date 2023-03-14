import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../hooks/useAuth';
import './login.css'
const initialForm={
    name:'',
    email:'',
    password:''
}
export const Register = () => {
    const navegar = useNavigate();
    const dispatch=useDispatch();
    const {name,email,password,onInputChange}= useForm(initialForm,{})
    const {onRegisterUSE}= useAuth();
    const onRegister = async(e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_BACKEND)
        const { data } = await onRegisterUSE({ email, password,name,level:'USER' })
        if (!data) { return }
        Swal.fire('Ok', 'WELCOME TO OUR CHAT', 'success')
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('name')
        navegar('/login')

    }
    return (
        <>
            <div className="col-12 contenedor-loginRegistro animate__animated animate__flipInX ">
                <div className="col-md-4 col-sm-6 col-10 ">
                    <form className='bg-dark formularioLoginRegister ' onSubmit={onRegister}>
                        <h3>Register</h3>

                        <label htmlFor="name" className='labelLoginRegister'>Name</label>
                        <input type="text" placeholder="Name" name='name' value={name} onChange={onInputChange} className='inputLoginRegister' id="name"></input>

                        <label htmlFor="username" className='labelLoginRegister'>Email</label>
                        <input type="text" name='email' value={email} placeholder="Email" onChange={onInputChange}  className='inputLoginRegister' id="username"></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={password} onChange={onInputChange} placeholder="Password" className='inputLoginRegister' id="password"></input>

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
