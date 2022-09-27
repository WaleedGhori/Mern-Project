import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <section className='signup'>
        <div className='container mt-5'>
            <div className='signup-content'>
            <div className='signin-image'>
                    <figure>
                      <img src="./images/login.png" alt="registration pic" />
                    </figure>
                    <NavLink to = "/signup" className = "signup-image-link">Create an Account</NavLink>
                  </div>
                <div className='signup-form'>
                  <h2 className='form-title'>Sign In</h2>
                  <form className='register-form' id='register-form'>
                        
                        <div className='form-group'>
                          <label htmlFor='email'>
                            <i className='zmdi zmdi-email zmdi-hc-lg'></i>
                          </label>
                          <input type="text" name='email' id='email' autoComplete='off'
                          placeholder='Your Email' />
                        </div>

                        <div className='form-group'>
                          <label htmlFor='password'>
                            <i className='zmdi zmdi-key zmdi-hc-2x material-icons-name'></i>
                          </label>
                          <input type="password" name='password' id='password' autoComplete='off'
                          placeholder='Your Password' />
                        </div>

                        <div className='form-group form-button'>
                          <input type="submit" name='signin' id='signin' className='form-submit' value="Login" />
                        </div>

                  </form>
                </div>
                  
            </div>
        </div>
    </section>
    </>
  )
}

export default Login