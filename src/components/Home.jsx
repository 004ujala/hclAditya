import React, { useEffect, useRef } from 'react'
import '../css/Home.css'
const Home = () => {
    const typingRef = useRef(null);

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


        </>
    )
}

export default Home