import React, { useEffect } from 'react';
import './Second-section.css';
import secondImg from '../Images/image_who_we_are-1.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SecondSection = () => {

    useEffect(()=>{
        Aos.init({durations: 4000})
    },[])

    return (
        <div>
            
            
            <div className="second-section" id="whoWeAre">
                <div data-aos="flip-right"  className="second-img">
                    <img src={secondImg} alt="" />
                </div>
                <div data-aos="flip-left" className="txt-2">
                    <h1>Who We are</h1>
                    <p>Technology has taken a quantum leap in the last few decades and it is entering the age of robotics, artificial intelligence and virtualization so that your business can get the maximum output with lower cost. Synctella is a technology startup for the data driven business environment of today and tomorrow. Our core competence lies in developing applications in Virtual and Augmented reality from mission critical solutions to game development. Synctella also provides Managed IT Service, Mobile and Web application development and cloud migration support. With an onshore presence of management and customer service and offshore presence of developers and partner companies our cardinal goal is to deliver our customers premium solutions that will cater to their needs, ready for the modern world of technology while keeping the cost to a minimum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;