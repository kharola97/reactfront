import React from 'react'
import "./Nav.css"
import logo from "../Images/recipe5.png"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='Navbar'>
        <div className='logo'><img src={logo} alt='empty'></img></div>
        <div className='Anchor'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    </div>
  )
}

export default Nav