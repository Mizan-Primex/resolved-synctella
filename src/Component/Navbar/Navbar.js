import React from 'react';
import './Navbar.css';
import logo from '../Images/loog.svg'
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="navbarBody">
            <div className="logo">
                <a href="/"><img className="logo" src={logo} alt="" srcset="" /></a>
            </div>
            <div className="links">
                <a href="#"> <Link activeClass="active"
                    to="whoWeAre"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={1000}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >Who We are</Link></a>
                {/* <a href="#whoWeAre"></a> */}

                <a href="#">
                    <Link activeClass="active"
                        to="company-profile"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Company profile</Link>
                </a>
                <a href="#">
                    <Link activeClass="active"
                        to="product"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Products and Services</Link> </a>

                <a href="#">
                    <Link activeClass="active"
                        to="partner"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Partner Company</Link>
                </a>
                <a href="#">
                    <Link activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Our Projects</Link> </a>
                <a href="#">
                    <Link activeClass="active"
                        to="footer"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Contact Us</Link> </a>
            </div>
        </div>
    );
};

export default Navbar;