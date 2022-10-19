import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="heading">Notes</div>
      
      <div className='action'>
      <div className="login"><a href="/">Login</a></div>
      <div className=" signup"><a href="/signup">Sign Up</a></div>
      </div>
    </div>
  )
}
