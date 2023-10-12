import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>logo</div>
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