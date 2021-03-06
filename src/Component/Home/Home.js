import React, { useEffect, useState } from 'react';

import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

// import { Link } from 'react-router-dom';
import { Carousel, Dropdown, DropdownButton } from 'react-bootstrap';

//images

import logo from '../Images/synctella-logo.png'
// import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import firstImg from '../Images/New folder/slider1.png';
import secondImg from '../Images/New folder/slider2.png';
import thirdImg from '../Images/New folder/slider3.png';
import fourthImg from '../Images/New folder/slider4.png';
import feature1 from '../Images/Vector.svg';
import feature2 from '../Images/Vector2.svg';
import feature3 from '../Images/Vector3.svg';

import secondImg1 from '../Images/New folder/image_who_we_are-1.png';

import companyprofile from '../Images/New folder/adsa.jpg';

import product from '../Images/New folder/image_Product_Service_3DGraphics.png';

import gameDev from '../Images/New folder/image_Product_Service_GameDev.png';
import graphicImg from '../Images/New folder/image_Product_Service_ARVR.png';
import manageIt from '../Images/New folder/image_Product_Service_ManagedService.png';
import partner1 from '../Images/logo/alienide 1.png';
import partner2 from '../Images/logo/Logo-Light-1 1.png';
import partner3 from '../Images/logo/8061c99 1.png';
import partner4 from '../Images/logo/scsl308 1.png';
import cient1 from '../Images/logo/image (1) 1.png';
import cient2 from '../Images/image-11.svg';
import cient3 from '../Images/logo-worldbank 1.svg';
import youtube from '../Images/youtube.svg';
import instra from '../Images/instra.svg';
import linkedin from '../Images/inkedin.svg';
import fb from '../Images/fb.svg';
import ham from '../Images/Ham barg -s.png';

import clientImg1 from '../Images/image 2.png';
import clientImg2 from '../Images/image 3.png';
import clientImg3 from '../Images/image 4.png';
import clientImg4 from '../Images/clientImg (4).png';
import clientImg5 from '../Images/clientImg (5).png';
import upBtn from '../Images/images.png'


const Home = () => {

    useEffect(() => {
        Aos.init({ durations: 2000 })
    }, [])

    window.onload = function () {
        let hamburgerArea = document.getElementById("Ham");
        hamburgerArea.addEventListener("click", function () {
            const hamburgerMenuArea = document.getElementById("menu2");
            hamburgerMenuArea.style.display = "block";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "block";
        })

        let backdropArea = document.getElementById("backdrop");
        backdropArea.addEventListener("click", function () {
            const hamburgerMenuArea = document.getElementById("menu2");
            hamburgerMenuArea.style.display = "none";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "none";
        })
    }

    const [userData, setUserData] = useState([]);
    console.log(userData);

    const data = () => {
        let fname = document.getElementById("fname").value;
        let sname = document.getElementById("sname").value;
        let email = document.getElementById("email").value;
        let massage = document.getElementById("massage").value;

        setUserData(fname + " " + sname + " "  + email + " "  + massage); 
    }

    return (
        <div className="mainBody">
            <nav className="navbarBody">
                <div className="logo">
                <a href="/"><img className="logo" src={logo} alt="" srcset="" /></a>
                </div>
                <div className="hamburger">
                    <div className="menu1" >
                        <img id="Ham" src={ham} alt=""/>
                    </div>
                    <div className="menu2" id="menu2">
                    <div className="h">
                    <a> <Link activeClass="active"
                        to="whoWeAre"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-120}
                        duration={500}
                        delay={500}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Who We are</Link></a>
                    <a>
                        <Link activeClass="active"
                            to="company-profile"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={20}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Company profile</Link>
                    </a>                  
                        <a id="nav-dropdown">
                        <DropdownButton id="dropdown-basic-button" title="Products and Services">
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="product"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-130}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >AR/VR Solutions</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="game-dev"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-120}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >Game development</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="graphicDesign"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-100}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >3D Graphics Design and Animation</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="managedIT"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-100}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >Managed IT Service</Link>
                        </Dropdown.Item>
                        </DropdownButton>
                        </a>
                    <a>
                        <Link activeClass="active"
                            to="partner"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-220}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Partner Company</Link>
                    </a>
                    <a>
                        <Link activeClass="active"
                            to="client-profile"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-110}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Client Profile</Link> </a>
                    <a>
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Our Projects</Link> </a>
                    <a>
                        <Link activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-250}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Contact Us</Link> </a>   
                   </div>
                    </div>
                   
                </div>
                <span id="backdrop" className="backdrop"></span>
                <div className="links">
               
                     <Link activeClass="active"
                        to="whoWeAre"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-120}
                        duration={500}
                        delay={500}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Who We Are</Link>
                   
                        <Link activeClass="active"
                            to="company-profile"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Company Profile</Link>
                          
                        <a className="DropdownButton" id="nav-dropdown">
                        <DropdownButton   id="dropdown-basic-button" title="Products and Services">
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="product"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-130}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >AR/VR Solutions</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="game-dev"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-120}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >Game development</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="graphicDesign"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-100}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >3D Graphics Design and Animation</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        <Link activeClass="active"
                                                    to="managedIT"
                                                    spy={true}
                                                    smooth={true}
                                                    hashSpy={true}
                                                    offset={-100}
                                                    duration={500}
                                                    delay={500}
                                                    isDynamic={true}
                                                    ignoreCancelEvents={false}
                                                >Managed IT Service</Link>
                        </Dropdown.Item>
                        </DropdownButton>
                        </a>
                  
                        <Link activeClass="active"
                            to="partner"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-220}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Partner Company</Link>
                
              
                        <Link activeClass="active"
                            to="client-profile"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Client Profile</Link> 
            
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Our Projects</Link> 
            
                        <Link activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-120}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Contact Us</Link> 
                        
                </div>
                
            </nav>
           
            <section className="first-section" id="home" >
                                <Carousel>
                        <Carousel.Item>
                            <div className="a">
                            <div className="txt-1">
                                    <h1>CONTOURS OF EXTREME TECHNOLOGY WITH CREATIVITY</h1>
                                    <p>"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution." - Alber Einstein
                                    </p>
                                </div>
                                <div className="first">
                                    <img
                                        className="d-block w-100"
                                        src={firstImg}
                                        alt="First slide"
                                    />
                                </div>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="a">
                            <div className="txt-1">
                                    <h1>A CUSTOMER CENTRIC CONSULTANCY COMPANY</h1>
                                    <p>“We’re not competitor obsessed, we’re customer obsessed. We start with what the customer needs and we work backwards.” - Jeff Bazos</p>
                                </div>
                                <div className="first">
                                    <img
                                        className="d-block w-100"
                                        src={secondImg}
                                        alt="First slide"
                                    />
                                </div>


                                
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="a">
                                <div className="txt-1">
                                    <h1>WE MAKE TECHNOLOGY WORK FOR YOU</h1>
                                    <p>“There will be two types of businesses in the next 5 years, those that are on the Internet, and those that are out of business.” - Bill Gates
</p>
                                </div>
                                <div className="first">
                                    <img
                                        className="d-block w-100"
                                        src={thirdImg}
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="a">
                                <div className="txt-1">
                                    <h1>YOUR VANGUARD IN EVERYTHING TECHNOLOGY</h1>
                                    <p>“If everyone is moving forward together, then success takes care of itself.” - Henry Ford</p>
                                </div>
                                <div className="first">
                                    <img
                                        className="d-block w-100"
                                        src={fourthImg}
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div className="feature">
                        <div className="feature1 fea">
                            <img src={feature1} alt="" />
                            <h2>AR/VR Development</h2>
                            <p>Looking to bring your AR or VR experience to life</p>
                        </div>
                        <div className="feature2 fea">
                            <img src={feature2} alt="" />
                            <h2>Experienced Team</h2>
                            <p>Our team has 20+ years of video game development experience</p>
                        </div>
                        <div className="feature3 fea">
                            <img src={feature3} alt="" />
                            <h2>Allaround Quality</h2>
                            <p>high quality visuals and engaging content and mechanics draw your users in</p>
                        </div>
                    </div>               
            </section>

            <section className="second-section" id="whoWeAre">
               
                    <div data-aos="flip-right" className="second-img">
                        <img src={secondImg1} alt="" />
                    </div>
                    <div data-aos="flip-left" className="txt-2">
                        <h1>WHO WE ARE</h1>
                        <p>Technology has taken a quantum leap in the last few decades and it is entering the age of robotics, artificial intelligence and virtualization so that your business can get the maximum output with lower cost. Synctella is a technology startup for the data driven business environment of today and tomorrow. Our core competence lies in developing applications in Virtual and Augmented reality from mission critical solutions to game development. Synctella also provides Managed IT Service, Mobile and Web application development and cloud migration support. Combined with an onshore presence of management and customer service and offshore presence of developers and partner companies our cardinal goal is to deliver our customers premium solutions that will cater to their needs, ready for the modern world of technology while keeping the cost to a minimum.
                    </p>
                    </div>
            </section>
           
            <section className="company-profile" id="company-profile">
               
                    <div className="company-img">
                        <img src={companyprofile} alt="" srcset="" />
                        <span className="layer" ></span>                   
                    </div>
                      
                    <div className="profileBody">
                    <h1>COMPANY PROFILE</h1>
                    <div className="profile">

                            <div className="leftSide">
                                
                                <h2>Vision</h2>
                                <p>We believe that Augmented Reality and Virtual Reality will play a key role in the business of the future. AR and VR will become an extension of how business is initiated, communicated and conducted. As a company built for the future our vision is to explore, invent and reinvent how we see the new digital world and how we interact with it. Through virtualization and augmentation, we strive to open that world to new possibilities that are yet to be imagined.
                                </p>
                            </div>
                            <div className="rightSide">
                                <h2>Why Choose Synctella</h2>
                                <p>For the rapidly evolving technologies and complexity in product features, we engage with customers at every step of the product engineering process, to help convert complex product vision into tangible designs that are scalable and successful.
                                <ul>
                                    <li>Free Initial Consultancy.</li>
                                    <li>  Domain Focused Expertise.</li>
                                    <li> Promises upgradation to help you succeed in your industry.</li>
                                    <li>We give high priority to every job we undertake.</li>
                                    <li>  Consultative and Innovative Solutions.</li>
                                    <li> Standard Methodology with different package offerings.</li>
                                    <li>Choosing tools that solve today’s problems and anticipate tomorrow’s needs.</li>
                                    <li>Appropriate development processes with continual improvements.</li>
                                </ul>

                                </p>
                            </div>
                            </div>
                    </div>
            </section>
           
            <section data-aos="zoom-in-right" className="product" id="product"> 
                     <h1>PRODUCTS & SERVICES</h1>    
                 <div className="productBody">
                 <div className="txt-3">                        
                        <img className="third-img1" src={graphicImg} alt="" srcset="" />
                        <h2>AR/VR Solutions </h2>
                        <p>AR/VR presents a whole new world of possibilities for modern businesses. All enterprises share a common goal of getting clients and customers to use their services and their products.
                        To achieve this, businesses must educate users about their products, engage meaningfully with potential clients and create lasting connections for future commerce. There are ways in which AR is already being implemented to further these goals and even more ways in which it has yet to be used.
                        </p>
                        
                    </div>
                    <div className="third-img">
                        <img src={graphicImg} alt="" srcset="" />
                    </div>  

                    </div>            
            </section>
           
            <section className="game-dev" id="game-dev">
             
                        <div className="game-dev-img">
                            <img src={gameDev} alt="" />
                        </div>
                        <div className="game-dev-txt">
                            <h1>Game Development</h1>
                            <p>
                    We build AR/VR games for Android, iOS as well as for Windows phones. This is to take you to the world of new experience and welcome you to a whole new immersive environment. We work with a talented team of artists, designers and developers who have years of experience designing and developing cutting edge graphics and creative story lines.

                            </p>
                        </div>
          </section>
                    
            <section className="graphicDesign" id="graphicDesign">
                  
                        <div className="graphic-img">
                            <img src={product} alt="" />
                        </div>
                        <div className="graphic-txt">
                            <h1>3D Graphics Design and Animation</h1>
                            <p>
                    The ability to see life like characters and objects in 3 dimensions has become very sophisticated over the years. We have a team of artists and lab dedicated to bring your imagination to life in 3D. Whether you want your 3D personality or objects to be augmented in real life or you want it in a fully immersive environment we can make it happen for you.
                     
                            </p>
                        </div>
            </section>
           
            <section className="managedIT" id="managedIT">
                   
                        <div className="managedIt-txt">
                        <h1>Managed IT Service</h1>
                        <img className="managedIt-img1" src={manageIt} alt="" />
                        <p>We provide a one stop IT solution for your business. IT should not be on your to do list rather managed by a team of experts who will ensure your business runs smoothly on the digital highway. Whether you are a SaaS user and need your entire stack managed or only need help with your infrastructure we will engage our consultants and solutions architects to understand your requirements and engineer a solution Tylor fits for your business. We have over 10 years of experience in managing IT services and our service model is built around a few core areas.</p>
                        <ul>
                            <li>UI/UX Design</li>
                            <li> Mobile and Web Applications</li>
                            <li> Digital Marketing</li>
                            <li> Cloud migration support</li>
                            <li> Machine learning and deep learning</li>
                        </ul>
                        </div>
                        <div className="managedIt-img">
                            <img src={manageIt} alt="" />
                        </div>

                   
            </section> 
          
            <section data-aos="fade-up" className="partner" id="partner">
                  
                        <h1>PARTNER COMPANY</h1>
                        <div className="company">            
                            <a  href="http://www.alienide.com/wp-content/uploads/2017/04/ALiENIDE-Interactive-Logo-Top-Left.png" target="_blank"><img className="company1" src={partner1} alt=""/></a>
                            <a  href="http://www.dreamerzlab.com/" target="_blank"> <img className="company2" src={partner2} alt=""/></a>
                            <a  href="https://inneed.cloud/" target="_blank"><img className="company3" src={partner3} alt=""/></a>
                            <a  href="http://stargroup-bd.com" target="_blank"><img className="company4" src={partner4} alt=""/></a>
                        </div>
                  
            </section>
                  
            <section className="client-profile" id="client-profile">
                   
                        <h1>CLIENT PROFILE</h1>
                        <div className="client-link">
                            <a href="">AR/VR Solutions</a>
                            <a href="">Game Development</a>
                            <a href="">3D Design and Animation</a>
                            <a href="">Managed IT Service</a>
                        </div>
                        <div className="client-details">
                            <div className="client-info 1">
                                <img src={cient2} alt=""/>
                                <p>
                                <h4>Executive Motors</h4> is the sole distributor of BMW luxury vehicles in Dhaka, Bangladesh. Since 2019 executive motors has been using our AR/VR platform called Auto Lab for showcasing their vehicles to their customers and achieved tremendous success.
                                </p>
                            </div>
                            <div className="client-info berger">
                                    <img src={cient1} alt=""/>
                                <p>
                                <h4>Berger Paint</h4>  has adopted the AR/VR solution called C3 Lab which allows their customers to choose paint and texture in an interactive and immersive 3D environment. This allows their customer  to visualize their home before picking the right color.
                                </p>
                            </div>
                            <div className="client-info 3">
                                    <img src={cient3} alt=""/>
                                <p>
                                <h4>The World Bank Group:</h4>
                                Wehave been providing Managed IT Service (Infrastructure & Help Desk Management) to World Bank Group, Bangladesh for last four (04) years.
                                </p>
                            </div>
                            <div className="client-info 4">
                                    <img className="siemens" src={clientImg4} alt=""/>
                                <p>
                                <h4>Siemens Bangladesh:</h4>
                                Synctella has provided CAD Services to SIEMENS, Bangladesh.
                                </p>
                            </div>

                        </div> 

                        <div className="client-details">
                            <div className="client-info 5">
                                <img src={clientImg5} alt=""/>
                                <p>
                                <h4>UNDP-JSF:</h4>
                                Successfully implemented the capacity development project under UNPP for Judiciary Depertment.
                                </p>
                            </div>
                            <div className="client-info 6">
                                <img src={clientImg1} alt=""/>
                                <p>
                                <h4>State Bank of India:</h4>
                                We have provided Managed IT Service (Infrastructure Management) to State Bank of India, Bangladesh for last four (03) years.
                                </p>
                            </div>
                            <div className="client-info 7">
                                <img src={clientImg2} alt=""/>
                                <p>
                                <h4>Save The Children International:</h4>
                                We have been providing Managed IT Service (Software Development for Web & Mobile Applications)) to World Bank Group, Bangladesh for last four (07) years.
                                </p>
                            </div>
                            <div className="client-info 8">
                                <img src={clientImg3} alt=""/>
                                <p>
                                <h4>Tullow Bangladesh:</h4>
                                Synctella has provided CAD Services to Tullow, Bangladesh.
                                </p>
                            </div>
                            
                        </div>          
                   
            </section>
              
            <section data-aos="zoom-out-right" className="projects" id="projects">
                    
                        <div className="project-txt">
                            <h1>Our Projects</h1>
                        </div>
                        <div className="project-details">
                            <label>Global Expansion:</label>
                            <p>
                    Oftentimes our clients have everything they need to succeed, they just require the resources and support to make a strategic jump. We worked on this project for several months and the end result was truly spectacular. By ensuring consistent and transparent communication, our client was able to progress by leaps and bounds.
                            </p>
                            <label>Corporate Identity Campaign:</label>
                            <p>
                    We approached this project carefully, as it was our very first undertaking of this scale. We studied our client’s business to create a focused and effective solution - and then watched it grow. We loved working with this client, and look forward to collaborating together on many more successful projects in the future.

                            </p>
                            <label>Brand Redesign:</label>
                            <p>
                    Clients often approach Synctella with a general idea of what they need, and this project was no different. We were able to jump right in with our expertise and really helped the company grow and evolve. Today, their business is doing exceptionally well, and we’re proud to have been part of the process.

                            </p>
                        </div> 
                    
            </section>
           
            <a href="" id="upbtn">
                <Link activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={500}
                    delay={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >
                <img className="upbtn" src={upBtn} alt="" /> </Link>
            </a>
           
            <section  className="footerBody" id="footer">                  
                         <h1>CONTACT US</h1> 
                            <div className="footer">
                            <div className="contactDetails">
                                <h1>CONTACT US</h1> 
                                  <p> Address: 3413 Lorenzo Dr, Plano, TX 75074 <br/>
                                      Email: contact@synctella.com <br/>
                                      Phone: +1-496-929-5958, +1-510-299-5458 <br/>
                                      </p>
                                  <div className="footer-link">
                                      <Link to="">
                                          <img src={youtube} alt=""/>
                                      </Link>
                                      <Link to="">
                                          <img src={instra} alt=""/>
                                      </Link>
                                      <Link to="">
                                          <img src={linkedin} alt=""/>
                                      </Link>
                                      <Link to="">
                                          <img src={fb} alt=""/>
                                      </Link>
                                  </div>
                              </div>
                             <div className="contactInfo">
                                  <div className="form">                                        
                                      <form className="form-control">
                                          <label>Name</label> 
                                          <div className="nameBody">
                                          <input id="fname" type="text" placeholder="First Name" />
                                          <input id="sname" type="text" placeholder="Last Name" />
                                          </div>
                                          <label>Email</label> 
                                          <input id="email" type="email" placeholder="Your Email" />
                                          <label>Massage</label> 
                                          <textarea id="massage" type="text" placeholder="Your massage within 500 words" cols="40" rows="3" />
                                          <button onClick={data} type="submit">Send</button>
                                      </form>
                                     
                                  </div>                                
                             </div>  
                             <div className="contactDetails1">
                                      {/* <label>CONTACT US</label>  */}
                                  <p> Address: 3413 Lorenzo Dr, Plano, TX 75074 <br/>
                                      Email: contact@synctella.com <br/>
                                      Phone: +1-496-929-5958, +1-510-299-5458 <br/>
                                      </p>
                                  <div className="footer-link">
                                      <Link to="">
                                          <img src={youtube} alt=""/>
                                      </Link>
                                      <Link to="">
                                          <img src={instra} alt=""/>
                                      </Link>
                                      <Link to="">
                                          <img src={linkedin} alt=""/>
                                      </Link>
                                      <Link to="">
                                          <img src={fb} alt=""/>
                                      </Link>
                                  </div>
                              </div>
                            </div>
                                             
            </section>
          
            <section className="copyright">
                        <article>
                           Copyright ©Synctella inc.
                        </article> 
                    </section>
                    
        </div >

    );
};

export default Home;