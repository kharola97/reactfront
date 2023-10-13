import React from 'react'
import "./Nav.css"
import logo from "../Images/logo.webp"
const Nav = () => {
  return (
    <div className='Navbar'>
        <div className='logo'><img src={logo} alt='empty'></img></div>
        <div className='Anchor'>
            <a href='#'>Home</a>
            <a href='#'>About Us</a>
            <a href='#'>Login</a>
            <a href='#'>Register</a>
        </div>
    </div>
  )
}

export default Nav