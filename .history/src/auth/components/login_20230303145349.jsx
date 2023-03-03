import React from 'react'
import './login.css'
export const Login = () => {
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
                            <div className="go"><i className="fab fa-google"></i>  Google</div>
                            <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                        </div>
                    </form>
                </div>
            </div>

         
        </>
    )
}
