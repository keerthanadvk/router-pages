import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <div>
    <ul> 
    <Link to="/"><li>Login</li></Link>
    <Link to="/dashboard"><li>Dashboard</li></Link>
    <Link to="/about"><li>About</li></Link>
    </ul>
    
    </div>
  )
}

export default Navbar