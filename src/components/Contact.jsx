import React from 'react';
import '../css/Contact.css';
import { faInstagram, faLinkedinIn, faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div className="a1">
            <div className="detail">
                <div className="container mt-4 d-flex justify-content-center">
                    <div className="shadow-lg rounded p-4 bg-white">
                        {/* Office Info */}
                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faBuilding} className="me-3 text-primary" />
                                <div>
                                    <strong>Office</strong><br />
                                    HCLTech SEZ Lucknow
                                </div>
                            </div>

                            {/* Address */}
                            <div className="d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faLocationDot} className="me-3 text-danger" />
                                <div>
                                    <strong>Address</strong><br />
                                    Mastemau, Lucknow, UP 226002
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faEnvelope} className="me-3 text-info" />
                                <div>
                                    <strong>Reach Us</strong><br />
                                    <a href="https://www.hcltech.com/" target="_blank" rel="noreferrer">www.hcltech.com</a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="follow">
                                <h2 className='text-center'>Follow Us</h2>
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
        </div>
    );
};

export default Contact;
