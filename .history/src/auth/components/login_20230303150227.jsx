import React from 'react'
import './login.css'
export const Login = () => {
    const onLogin=(e)=>{
        e.preventDefault();
    }
    return (
        <>
            <div className="col-12 contenedor-loginRegistro ">
                <div className="col-4 ">
                    <form className='bg-dark formularioLoginRegister '>
                        <h3>Login Here</h3>

                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Email" className='inputLoginRegister' id="username"></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className='inputLoginRegister' id="password"></input>

                        <button className='btnLoginRegister'>Log In</button>
                        <div className="social">
                      
                            <div className="go"><i className="fab fa-google"></i>  Register</div>
                          
                        </div>
                    </form>
                </div>
            </div>

         
        </>
    )
}
