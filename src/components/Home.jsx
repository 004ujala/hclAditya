import React, { useEffect, useRef } from 'react'
import '../css/Home.css'
import ReviewComp from './ReviewComp';
const Home = () => {
    const typingRef = useRef(null);
    const video1 = {
        src: "https://www.youtube.com/embed/aA2iJR_BkJs?si=8ayBvjmZHXMe28yR",
        desc: "Four years before when HCL started its operations in Lucknow this was a distant dream. Today HCL Lucknow is the largest IT employer in the city with over 5000+ employees working for 100+ Global Customers. Watch the incredible journey of HCL at it continues to create employment opportunities and for shape the future leaders of tomorrow.#HCLLucknow #TeamHCL #teambond #4yearsHCLLucknow #HCLFirstCareers #HCLTech #HCLTechnologies #Inspiration"
    }
    const video2 = {
        src: "https://www.youtube.com/embed/XtySEt6u9bM?si=gy01VlJE4lcwVidw",
        desc: "Meet Manish Srivastava, who came back from the UK to lead our digital business services team at the Lucknow campus. The autonomy, flexibility and support given by HCLTech has helped him lead a 1,200+ strong team from his hometown. Watch Manish pay a glowing tribute to our company’s work culture and why he considers HCLTech Lucknow to be the best thing that has ever happened to him in his professional career.HCLTech gives the opportunity of working closer to home to thousands of people in India through its New Vistas campuses in Lucknow, Nagpur, Madurai and Vijayawada. If you are a fresher or an experienced tech professional, you no longer have to stay away from your home for a career in a global technology company.Come home, stay rooted and #findyourspark with #HCLTechLucknow."
    }

    useEffect(() => {
        const texts = ["finding our spark!", "supercharging progress!"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = texts[textIndex];
            if (typingRef.current) {
                if (isDeleting) {
                    typingRef.current.textContent = currentText.substring(0, charIndex--);
                } else {
                    typingRef.current.textContent = currentText.substring(0, charIndex++);
                }

                if (!isDeleting && charIndex === currentText.length + 1) {
                    isDeleting = true;
                    setTimeout(type, 1000); // Pause before deleting
                    return;
                }

                if (isDeleting && charIndex < 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }

            setTimeout(type, isDeleting ? 50 : 100); // Typing & deleting speed
        };

        type(); // Start typing

    }, []);
    return (
        <>
            <div className="mainHome d-flex flex-column justify-content-center align-items-center">
                <div className="home" id="Home">
                    <div className="max-width">
                        <div className="home-content">
                            <div className="text-1">HCLTech</div>
                            <div className="text-2">Lucknow Campus</div>
                            <div className="text-3">
                                We are <span className="typing" ref={typingRef}>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='title mt-3' >The Journey of HCLTech Lucknow</h2>
                <ReviewComp src={video1.src} desc={video1.desc} />
                <ReviewComp src={video2.src} desc={video2.desc} />
            </div>
        </>
    )
}

export default Home