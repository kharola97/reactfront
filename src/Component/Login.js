import React, { useState } from 'react'
import leftImage from "../Images/left-login.jpg"
import rightImage from "../Images/right-login.jpg"
import { Link } from 'react-router-dom'
import "./Login.css"
const Login = () => {
    const [Data, setData] = useState({
        username:"",
        password:""
    })

    const [isChecked, setIsChecked] = useState(false);

    const handleLogin = (e)=>{
        e.preventDefault()
        console.log(Data)
    }

    const handleInputChange = (e)=>{
        const{name, value} = e.target;
        setData({...Data, [name]:value})
    }

   
  return (
    <div className='loginpage'>
        <div className='right-login'><img src={leftImage} alt='couldnt Load image'></img></div>
        <div className='center-login'>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className='username'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' required value={Data.username} onChange={handleInputChange}></input>
                </div>
                <div className='password-login'>
                    <label htmlFor='password'>Password</label>
                    <input type={isChecked ? "text" : "password"} name='password' id='password' required value={Data.password} onChange={handleInputChange}></input>
                    
                </div>
                <div className='showpassword'>
                <label>Show password</label>
                <input type='checkbox' checked={isChecked}
          onChange={()=>setIsChecked(!isChecked)}></input>
            </div>
                <button type='submit'>Login</button>
            </form>
           
            <div className='footer-login'><p>Don't have an account? <Link to='/register'>Register</Link></p></div>
        </div>
        <div className='left-login'> <img src={rightImage} alt='Couldnt find image'></img> </div>
    </div>
  )
}

export default Login