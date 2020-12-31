import React from 'react';
import './First-Section.css';

import firstImg from '../Images/image_slogan02.svg';
import secondImg from '../Images/fourth.svg';
import thirdImg from '../Images/third.svg';
import fourthImg from '../Images/second.svg';
import feature1 from '../Images/Syntella icon_AR-VR devlopment.svg';
import feature2 from '../Images/Syntella icon_Experienced team.svg';
import feature3 from '../Images/Syntella icon_allaround quality.svg';
import { Carousel } from 'react-bootstrap';

const FirstSection = () => {
    return (
        <div>
            <div className="first-section"  >

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

            </div>
        </div>
    );
};

export default FirstSection;