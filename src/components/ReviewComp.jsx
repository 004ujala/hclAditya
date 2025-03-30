import React from 'react';
import '../css/ReviewComp.css';

const ReviewComp = ({ src, desc }) => {
    return (
        <>
            <div className="container review mt-3 mb-3">
                {/* Left side - YouTube Video */}
                <div className="reviewLeft">
                    <iframe
                        width="100%"
                        height="100%"
                        src={src + "?cc_load_policy=1"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Right side - Text Content */}
                <div className="reviewRight">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ReviewComp;
