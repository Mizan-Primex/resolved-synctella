import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

//images




import gameDev from '../Images/image_Product_Service_GameDev.svg';
import graphicImg from '../Images/image_Product_Service_ARVR.svg';
import manageIt from '../Images/image_Product_Service_ManagedService.svg';
import partner1 from '../Images/alienide1.svg';
import partner2 from '../Images/Logo-Light-11.svg';
import partner3 from '../Images/8061c99 1.svg';
import partner4 from '../Images/scsl308 1.svg';
import cient1 from '../Images/bergerlogo.svg';
import cient2 from '../Images/image-11.svg';
import cient3 from '../Images/logo-worldbank 1.svg';
import youtube from '../Images/youtube.svg';
import instra from '../Images/instra.svg';
import linkedin from '../Images/inkedin.svg';
import fb from '../Images/fb.svg';

import FirstSection from '../First-Section/FirstSection';
import SecondSection from '../Second-section/SecondSection';
import CompanyProfile from '../Company-profile/CompanyProfile';
import Product from '../Product/Product';


const Home = () => {

    useEffect(()=>{
        Aos.init({durations: 2000})
    },[])

    return (
        <div>
            
            <Navbar></Navbar>
            
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>      
            <CompanyProfile></CompanyProfile>      
            <Product></Product>

            <div className="home">
                    <div className="game-dev">
                        <div className="game-dev-img">
                            <img src={gameDev} alt="" />
                        </div>
                        <div className="game-dev-txt">
                            <h1>Game development</h1>
                            <p>
                                We build AR/VR games for Android, iOS as well as for Windows phones. This is to take you to the world of new experience and welcome you to a whole new immersive environment. We work with a talented team of artists, designers and developers who have years of experience designing and developing cutting edge graphics and creative story lines.

                            </p>
                        </div>
                    </div>
                    <div className="graphicDesign">
                        <div className="graphic-img">
                            <img src={graphicImg} alt="" />
                        </div>
                        <div className="graphic-txt">
                            <h1>3D Graphics Design and Animation</h1>
                            <p>
                                The ability to see life like characters and objects in 3 dimensions has become very sophisticated over the years. We have a team of artists and lab dedicated to bring your imagination to life in 3D. Whether you want your 3D personality or objects to be augmented in real life or you want it in a fully immersive environment we can make it happen for you.
                                
                    </p>
                        </div>

                    </div>
                    <div className="managedIT">
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

                    </div>
                    <div data-aos="fade-up" className="partner" id="partner">
                        <h1>Partner Company</h1>
                        <div className="company">            
                            <a href="http://www.alienide.com/wp-content/uploads/2017/04/ALiENIDE-Interactive-Logo-Top-Left.png" target="_blank"><img src={partner1} alt=""/></a>
                            <a href="http://www.dreamerzlab.com/" target="_blank"> <img src={partner2} alt=""/></a>
                            <a href="https://inneed.cloud/" target="_blank"><img src={partner3} alt=""/></a>
                            <a href="http://stargroup-bd.com" target="_blank"><img src={partner4} alt=""/></a>
                        </div>
                    </div>
            
                    <div className="client-profile">
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
                    </div>
                
                    <div data-aos="zoom-out-right" className="projects" id="projects">
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
                    </div>
                    <div className="footer" id="footer">
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
                    </div>
            </div>

        </div>
        
    );
};

export default Home;