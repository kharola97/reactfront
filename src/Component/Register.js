import React, { useState } from 'react'
import Image from "../Images/7922893.jpg"
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom'
import "./Register.css"
const Register = () => {
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    phone:"",
    email:""
  })

  const [visible, setVisible] = useState(false)

  const handleInputChange =  (e)=>{
         const {name, value} = e.target;
         setFormData({...formData,[name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div className='Register'>
      <div className='right-image'><img src={Image} alt='empty'></img></div>
      <div className='left-register'> <form onSubmit={handleSubmit}> 
        <div> <h2> Create an account </h2></div>
        <div className='registration-form'>
          <div className='fullname'>
          <label htmlFor="username">Username</label>
          <input type='text' name='username' required id='username' value={formData.username}onChange={handleInputChange}></input>
          </div>
          <div className='password'>
          <label htmlFor="password">Password</label>
          <div className='passwordShow'>
          <input type={visible ? "text" : "password"} name='password' id='password' required minLength="6" value={formData.password}onChange={handleInputChange}></input>
          <div className='eyeButton' onClick={()=>setVisible(!visible)}>{ visible ? <AiFillEye/> : <AiFillEyeInvisible/>}</div>
          </div>
          </div>
          <div className='phone'>
          <label htmlFor="phone">Phone</label>
          <input type='tel' name='phone' required id='phone' minLength="10" maxLength="10" value={formData.phone}onChange={handleInputChange}></input>
          </div>
          <div className='email'>
          <label htmlFor="email">Email</label>
          <input type='email' name='email' id='email' required value={formData.email} onChange={handleInputChange}></input>
          
          </div>
          <div className='register-button'>
            <button type='submit' >Register</button>
          </div>
        </div>
        </form>
        <p className='form-footer'>Already have an account? <Link to='/login' alt="">Login</Link></p>
        </div>
        
    </div>
  )
}

export default Register