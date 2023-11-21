import React from 'react'
import "./Navbar.css"
import logo from "../Homepage/Images/logo.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li> <NavLink to={'/'} style={({ isActive }) => ({ color: isActive ? '#545e6f' : '#fff', })}>Home</NavLink></li>
          <li><NavLink to={'/explore'} style={({ isActive }) => ({ color: isActive ? '#545e6f' : '#fff', })}>Explore </NavLink> </li>
          <li><NavLink to={'/about'} style={({ isActive }) => ({ color: isActive ? '#545e6f' : '#fff', })}>About Us</NavLink> </li>
          <li><NavLink to={'/contact'} style={({ isActive }) => ({ color: isActive ? '#545e6f' : '#fff', })}> Contact</NavLink> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;