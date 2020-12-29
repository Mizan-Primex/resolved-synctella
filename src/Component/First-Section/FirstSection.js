import React from 'react';
import './First-Section.css';

import firstImg from '../Images/image_slogan02.svg';
import feature1 from '../Images/Syntella icon_AR-VR devlopment.svg';
import feature2 from '../Images/Syntella icon_Experienced team.svg';
import feature3 from '../Images/Syntella icon_allaround quality.svg';

const FirstSection = () => {
    return (
        <div>
              <div className="first-section" >
                <div className="txt-1">
                    <h1>A CUSTOMER CENTRIC CONSULTANCY COMPANY</h1>
                    <p>“We’re not competitor obsessed, we’re customer obsessed. We start with what the customer needs and we work backwards.” - Jeff Bazos</p>
                </div>
                <div className="slide-1">
                     <img src={firstImg} alt=""/>
                     <div className="feature">
                         <div className="feature1 fea">
                            <img src={feature1} alt=""/>
                            <h2>AR/VR Development</h2>
                            <p>Looking to bring your AR or VR experience to life</p>
                         </div>
                         <div className="feature2 fea">
                         <img src={feature2} alt=""/>
                         <h2>Experienced Team</h2>
                            <p>Our team has 20+ years of video game development experience</p>
                         </div>
                         <div className="feature3 fea">
                         <img src={feature3} alt=""/>
                         <h2>Allaround Quality</h2>
                            <p>high quality visuals and engaging content and mechanics draw your users in</p>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;