import React from 'react';
import '../css/Contact.css';
import { faInstagram, faLinkedinIn, faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MapCard from './MapCard';

const Contact = () => {
    const bus = [
        "Start at Alambagh Bus Stand - Your departure point in Lucknow, well-connected to public transport.",
        "Take the Lucknow Metro - Board the Red Line from Alambagh station to Charbagh, with trains running every 5 minutes for a 5-minute journey.",
        "Arrive at Charbagh Station - Get off at Charbagh, a major transit hub in Lucknow with access to taxis and autos.",
        "Hire a Taxi or Auto-Rickshaw - Take a taxi or auto from Charbagh to HCL IT City, covering 12 km in about 30 minutes, depending on traffic.",
        "Arrive at HCL Technologies - Reach your destination at HCL IT City, a prominent tech hub in Lucknow."
    ];
    const railway = [
        "Start at Charbagh Railway Station - Your departure point and a major transit hub in Lucknow.",
        "Exit the station and hire a taxi or auto-rickshaw - Easily available outside the station for direct travel.",
        "Travel via Amar Shaheed Path - Take the fastest route covering approximately 12 km.",
        "Journey time is around 30-35 minutes - Duration may vary based on traffic conditions.",
        "Arrive at HCL Technologies, Lucknow - Reach your destination at HCL IT City in Lucknow."
    ];

    const airport = [
        "Start at Lucknow Airport (Chaudhary Charan Singh International Airport) - Your departure point in Lucknow.",
        "Exit the airport and hire a taxi or auto-rickshaw - Cabs and autos are available at the terminal.",
        "Travel via Amar Shaheed Path - Take the fastest route covering approximately 10 km.",
        "Journey time is around 20-25 minutes - Duration may vary based on traffic conditions.",
        "Arrive at HCL Technologies, Lucknow - Reach your destination at HCL IT City in Lucknow."
    ];

    return (
        <div className="a1 contact">
            <div className="detail contDetail">
                <div className="container mt-4 d-flex justify-content-center">
                    <div className="shadow-lg rounded p-4 bg-white">
                        {/* Office Info */}
                        <div className="mb-4">
                            <div className="ct d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faBuilding} className="me-3 text-primary" />
                                <div>
                                    <strong>Office</strong><br />
                                    HCLTech SEZ Lucknow
                                </div>
                            </div>

                            {/* Address */}
                            <div className="ct d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faLocationDot} className="me-3 text-danger" />
                                <div>
                                    <strong>Address</strong><br />
                                    Mastemau, Lucknow, UP 226002
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faEnvelope} className="me-3 text-info" />
                                <div className='ct'>
                                    <strong>Reach Us</strong><br />
                                    <a href="https://hclitcitylucknow.com/" target="_blank" rel="noreferrer">https://hclitcitylucknow.com/</a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="follow">
                                <h2 className='text-center ct'>Follow Us</h2>
                                <div className='container d-flex flex-row align-items-center justify-content-around'>
                                    <a href="https://www.instagram.com/hcltech/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/hcltech" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                    </a>
                                    <a href="https://x.com/hcltech" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                                    </a>
                                    <a href="https://www.youtube.com/user/HCLTechtube" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                                    </a>
                                    <a href="https://www.facebook.com/HCLTechOfficial" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='ReachUs' >Reach Us</h1>

            <div className="container row map mt-2">
                <div className="d-flex justify-content-center align-items-center col-lg-4 col-sm-12">
                    <MapCard src="/reachusImgFol/bus.jpg" steps={bus} /></div>
                <div className="d-flex justify-content-center align-items-center col-lg-4 col-sm-12">
                    <MapCard src="reachusImgFol/railway.jpg" steps={railway} /></div>
                <div className="d-flex justify-content-center align-items-center col-lg-4 col-sm-12">
                    <MapCard src="reachusImgFol/airport.jpg" steps={airport} /></div>

            </div>
        </div>
    );
};

export default Contact;
