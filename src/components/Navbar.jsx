import React from "react";
import logo from '../assets/planet.png'

const Navbar = () => {
    return(
        <nav className="nav-bar">
            <a> 
                <img src={logo} width='50px' height='50px' className="logo"/>
                <span>Space Traveler's Hub</span>
            </a>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="" className="nav-link"> Missions </a>
                </li>
                <li className="separator"> | </li>
                <li className="nav-item">
                    <a href="" className="nav-link"> My Profile </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;