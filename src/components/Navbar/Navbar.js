import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './Navbar.css';

const Navbar = () => (
    <nav className="nav-bar">
        <div className='top'>
            <a className="logo">
                <img src={logo} width='50px' height='50px' />
            </a>
            <span className='nav-title'>Space Traveler's Hub</span>
        </div>
        <ul className="nav-menu">
            <li className="nav-item">
                <NavLink className="nav-link-mine" to="/"> Missions</NavLink>
            </li>
            <li className="separator"> | </li>
            <li className="nav-item">
                <NavLink className="nav-link-mine" to="/myprofile"> My Profile </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;