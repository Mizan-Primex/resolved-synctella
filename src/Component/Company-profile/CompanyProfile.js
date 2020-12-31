import React from 'react';
import './Company-profile.css';
import companyprofile from '../Images/image_company_profile_mission1.svg';

const CompanyProfile = () => {
    return (
        <div>
            <div className="company-profile" id="company-profile">
                <div className="company-img">
                    <img src={companyprofile} alt="" srcset="" />
                </div>
                {/* <span className="shed"></span> */}
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

            </div>
        </div>
    );
};

export default CompanyProfile;