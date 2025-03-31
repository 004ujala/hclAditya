import React from 'react';
import "../css/BlogCard.css";

const BlogCard = ({ src, desc }) => {
    return (
        <div className="mainBlogCard">
            {/* Left side - Description */}
            <div className="leftBlogCard">
                <p>{desc}</p>
            </div>

            {/* Right side - Image */}
            <div className="rightBlogCard">
                <img src={"/blogImgFol/" + src} alt="Blog" />
            </div>
        </div>
    );
};

export default BlogCard;
