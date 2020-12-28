import React from 'react';
import './Navbar.css';
import logo from '../Images/loog.svg'

const Navbar = () => {
    return (
        <div className="navbarBody">
            <div className="logo">
                <img className="logo" src={logo} alt="" srcset="" />
            </div>
            <div className="links">
                <a href="#whoWeAre">Who We are</a>
              
                <a href="#company-profile">Company profile </a>
                <a href="#product">Products and Services </a>
                <a href="#partner">Partner Company</a>
                <a href="#projects">Our Projects </a>
                <a href="#footer">Contact Us </a>
            </div>
        </div>
    );
};

export default Navbar;