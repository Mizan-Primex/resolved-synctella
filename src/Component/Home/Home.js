import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

// import { Link } from 'react-router-dom';
import { Carousel, Dropdown, DropdownButton } from 'react-bootstrap';

//images
import hamburg from '../Images/Hambarg.svg';
import hamburg2 from '../Images/Hambarg2.svg';
import logo from '../Images/loog.svg'
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import firstImg from '../Images/New folder/slider1.png';
import secondImg from '../Images/New folder/slider2.png';
import thirdImg from '../Images/New folder/slider3.png';
import fourthImg from '../Images/New folder/slider4.png';
import feature1 from '../Images/Vector.svg';
import feature2 from '../Images/Vector2.svg';
import feature3 from '../Images/Vector3.svg';

import secondImg1 from '../Images/New folder/image_who_we_are-1.png';

import companyprofile from '../Images/New folder/image_company_profile_mission-1.png';

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



const Home = () => {

    useEffect(() => {
        Aos.init({ durations: 2000 })
    }, [])

    return (
        <div className="mainBody">
            <nav className="navbarBody">
                <div className="logo">
                <a href="/"><img className="logo" src={logo} alt="" srcset="" /></a>
                </div>
                <div className="links">
               
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
                            offset={-120}
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
                                                    offset={-160}
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
                
            </nav>
            <section className="first-section" >
                                <Carousel>
                        <Carousel.Item>
                            <div className="a">
                                <div className="txt-1">
                                    <h1>A CUSTOMER CENTRIC CONSULTANCY COMPANY</h1>
                                    <p>“We’re not competitor obsessed, we’re customer obsessed. We start with what the customer needs and we work backwards.” - Jeff Bazos</p>
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
                                    <h1>CONTOURS OF EXTREME TECHNOLOGY WITH CREATIVITY</h1>
                                    <p>"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution." - Alber Einstein
</p>
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
                        <h1>Who We are</h1>
                        <p>Technology has taken a quantum leap in the last few decades and it is entering the age of robotics, artificial intelligence and virtualization so that your business can get the maximum output with lower cost. Synctella is a technology startup for the data driven business environment of today and tomorrow. Our core competence lies in developing applications in Virtual and Augmented reality from mission critical solutions to game development. Synctella also provides Managed IT Service, Mobile and Web application development and cloud migration support. With an onshore presence of management and customer service and offshore presence of developers and partner companies our cardinal goal is to deliver our customers premium solutions that will cater to their needs, ready for the modern world of technology while keeping the cost to a minimum.
                    </p>
                    </div>
            </section>
            <section className="company-profile" id="company-profile">
               
                    <div className="company-img">
                        <img src={companyprofile} alt="" srcset="" />
                        <span className="layer" ></span>                   
                         </div>
                    <div className="profile">
                        <h1>Company Profile</h1>
                        <h2>Vision</h2>
                        <p>We believe that Augmented Reality and Virtual Reality will play a key role in the business of the future. AR and VR will become an extension of how business is initiated, communicated and conducted. As a company built for the future our vision is to explore, invent and reinvent how we see the new digital world and how we interact with it. Through virtualization and augmentation, we strive to open that world to new possibilities that are yet to be imagined.
                </p>
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
            </section>
            <section data-aos="zoom-in-right" className="product" id="product">              
                    <div className="txt-3">
                        <h1>Products and Services </h1>
                        <h2>AR/VR Solutions </h2>
                        <p>AR/VR presents a whole new world of possibilities for modern businesses. All enterprises share a common goal of getting clients and customers to use their services and their products.
                To achieve this, businesses must educate users about their products, engage meaningfully with potential clients and create lasting connections for future commerce. There are ways in which AR is already being implemented to further these goals and even more ways in which it has yet to be used.
                        </p>

                    </div>
                    <div className="third-img">
                        <img src={graphicImg} alt="" srcset="" />
                    </div>              
            </section>
          <section className="game-dev" id="game-dev">
             
                        <div className="game-dev-img">
                            <img src={gameDev} alt="" />
                        </div>
                        <div className="game-dev-txt">
                            <h1>Game development</h1>
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
                    <section className="managedIT">
                   
                        <div className="managedIt-txt">
                        <h1>Managed IT Service</h1>
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
                  
                        <h1>Partner Company</h1>
                        <div className="company">            
                            <a  href="http://www.alienide.com/wp-content/uploads/2017/04/ALiENIDE-Interactive-Logo-Top-Left.png" target="_blank"><img className="company1" src={partner1} alt=""/></a>
                            <a  href="http://www.dreamerzlab.com/" target="_blank"> <img className="company2" src={partner2} alt=""/></a>
                            <a  href="https://inneed.cloud/" target="_blank"><img className="company3" src={partner3} alt=""/></a>
                            <a  href="http://stargroup-bd.com" target="_blank"><img className="company4" src={partner4} alt=""/></a>
                        </div>
                  
                    </section>
                  
                    <section className="client-profile">
                   
                        <h1>Client Profile</h1>
                        <div className="client-details">
                            <div className="client-info 1">
                                <img src={cient2} alt=""/>
                                <p>
                                <b>Executive Motors</b> is the sole distributor of BMW luxury vehicles in Dhaka, Bangladesh. Since 2019 executive motors has been using our AR/VR platform called Auto Lab for showcasing their vehicles to their customers and achieved tremendous success.
                                </p>
                            </div>
                            <div className="client-info berger">
                                    <img src={cient1} alt=""/>
                                <p>
                                <b>Berger Paint</b>  has adopted the AR/VR solution called C3 Lab which allows their customers to choose paint and texture in an interactive and immersive 3D environment. This allows their customer  to visualize their home before picking the right color.
                                </p>
                            </div>
                            <div className="client-info 3">
                                    <img src={cient3} alt=""/>
                                <p>
                                <b>World Bank: </b>
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
                    <section  className="footer" id="footer">
                    
                        <div className="footer-txt">
                            <label>Contact Us</label> 
                            <p>
                    Address: 3413 Lorenzo Dr, Plano, TX 75074 <br/>
                            Email: contact@synctella.com <br/>
                            Phone: +1-496-929-5958, +1-510-299-5458
                            </p>
                        </div>
                        <div className="footer-link">.
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
                  
                    </section>
                    
         

        </div >

    );
};

export default Home;