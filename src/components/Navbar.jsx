import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/planet.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="nav-bar">
            <a className="logo">  
                <img src={logo} width='50px' height='50px'/>
                <span>Space Traveler's Hub</span>
            </a>
            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/"> Missions</NavLink>
                </li>
                <li className="separator"> | </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/myprofile"> My Profile </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;