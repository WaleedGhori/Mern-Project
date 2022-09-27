import React from 'react'
import {NavLink} from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <section className='signup'>
        <div className='container mt-5'>
            <div className='signup-content'>
                <div className='signup-form'>
                  <h2 className='form-title'>Sign Up</h2>
                  <form className='register-form' id='register-form'>
                        <div className='form-group'>
                          <label htmlFor='name'>
                            <i className='zmdi zmdi-account zmdi-hc-lg '></i>
                          </label>
                          <input type="text" name='name' id='name' autoComplete='off'
                          placeholder='Your Name' />
                        </div>

                        <div className='form-group'>
                          <label htmlFor='email'>
                            <i className='zmdi zmdi-email zmdi-hc-lg'></i>
                          </label>
                          <input type="text" name='email' id='email' autoComplete='off'
                          placeholder='Your Email' />
                        </div>

                        <div className='form-group'>
                          <label htmlFor='phone'>
                            <i className='zmdi zmdi-phone-in-talk zmdi-hc-2x material-icons-name'></i>
                          </label>
                          <input type="text" name='phone' id='phone' autoComplete='off'
                          placeholder='Your Phone' />
                        </div>

                        <div className='form-group'>
                          <label htmlFor='work'>
                            <i className='zmdi zmdi-slideshow zmdi-hc-2x material-icons-name'></i>
                          </label>
                          <input type="text" name='work' id='work' autoComplete='off'
                          placeholder='Your Profession' />
                        </div>

                        <div className='form-group'>
                          <label htmlFor='password'>
                            <i className='zmdi zmdi-key zmdi-hc-2x material-icons-name'></i>
                          </label>
                          <input type="password" name='password' id='password' autoComplete='off'
                          placeholder='Your Password' />
                        </div>

                        <div className='form-group'>
                          <label htmlFor='cpassword'>
                            <i className='zmdi zmdi-key zmdi-hc-2x material-icons-name'></i>
                          </label>
                          <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                          placeholder='Conform Your Password' />
                        </div>

                        <div className='form-group form-button'>
                          <input type="submit" name='signup' id='signup' className='form-submit' value="register" />
                        </div>

                  </form>
                </div>
                  <div className='signup-image'>
                    <figure>
                      <img src="./images/signup.png" alt="registration pic" />
                    </figure>
                    <NavLink to = "/login" className = "signup-image-link">I am already register</NavLink>
                  </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SignUp