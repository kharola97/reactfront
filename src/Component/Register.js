import React from 'react'
import Image from "../Images/registerpage.jpg"
import "./Register.css"
const Register = () => {
  return (
    <div className='Register'>
      <div className='right-image'><img src={Image} alt='empty'></img></div>
      <div className='left-register'> <form> 
        <div> <h2> Create an account </h2></div>
        <div className='registration-form'>
          <div className='fullname'>
          <label for="username">Username</label>
          <input type='text' name='username' required id='username'></input>
          </div>
          <div className='password'>
          <label for="password">Password</label>
          <input type='password' name='password' id='password' required minLength="6"></input>
          </div>
          <div className='phone'>
          <label for="phone">Phone</label>
          <input type='tel' name='phone' required id='phone' minLength="10" maxLength="10"></input>
          </div>
          <div className='email'>
          <label for="email">Email</label>
          <input type='email' name='email' id='email' required ></input>
          </div>
          <div className='register-button'>
            <button type='submit'>Register</button>
          </div>
        </div>
        </form>
        <p>Already have an account? <a href='#' alt="">Login</a></p>
        </div>
    </div>
  )
}

export default Register