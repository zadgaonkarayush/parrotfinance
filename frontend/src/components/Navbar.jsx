import React from 'react'
import Logo from '../assets/Logo.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='para-content'>
        <p>Welcome to,<br /> <h3>Parrot Finance</h3></p>
       
      </div>
      <div className='search-bar'>
      <input type="text" placeholder="Search..." />
      </div>
    </nav>
  )
}

export default Navbar
