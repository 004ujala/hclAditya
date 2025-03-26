import React from 'react';
import '../css/About.css';

const About = () => {
    return (
        <div className="about ">
            <div className="about max-width" id="About">
                <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center about-content">
                    <div className="column left">
                        <img src="/HCL Tech Lucknow Drone.jpg" alt="HCLTech Lucknow" />
                    </div>
                    <div className="column right">
                        <p>
                            <strong>HCLTech Lucknow is a key part of the company's New Vistas Offices, expanding its presence
                                across India. It features:</strong>
                        </p>
                        <ul>
                            <li><strong>State-of-the-art campuses</strong> with best-in-class amenities and a walk-to-work concept.</li>
                            <li><strong>A stable workforce</strong> ensuring quality work-life balance.</li>
                            <li><strong>One of the fastest-growing business hubs</strong> in India.</li>
                            <li><strong>Robust talent acquisition</strong> and deep academic engagement.</li>
                            <li><strong>100-acre IT City Campus</strong> supporting 150+ global clients with 20K+ professionals.</li>
                            <li><strong>Business operations</strong> started in October 2016 after the inauguration in April 2016.</li>
                            <li><strong>Comprehensive delivery support</strong> across Infra, Apps, Product Engineering,
                                BPOs, and Enabling Functions.</li>
                            <li><strong>Located in the IT City SEZ Zone</strong> at Chack Gajaria, a hub of innovation and
                                global aspirations.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
