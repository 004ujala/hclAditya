import React from 'react';
import LucknowCard from './LucknowCard';
import "../css/Lucknow.css"

const Lucknow = () => {
    const images = [
        "/lucknowImgFol/1.jpg", "/lucknowImgFol/2.jpg", "/lucknowImgFol/3.png", "/lucknowImgFol/4.jpg", "/lucknowImgFol/5.png", "/lucknowImgFol/6.jpg", "/lucknowImgFol/7.png", "/lucknowImgFol/8.jpg", "/lucknowImgFol/9.jpg", "/lucknowImgFol/10.jpg", "/lucknowImgFol/11.jpg", "/lucknowImgFol/12.jpg", "/lucknowImgFol/13.jpg", "/lucknowImgFol/14.jpg", "/lucknowImgFol/15.jpg"
    ];

    const descriptions = [
        "Marine Drive in Lucknow is a scenic riverside promenade along the Gomti River, popular for jogging, cycling, and relaxing with a beautiful sunset view.", "Ambedkar Park in Lucknow is a grand memorial dedicated to Dr. B.R. Ambedkar, featuring magnificent sandstone structures, statues, and a serene ambiance.", "Lucknow Zoo, also known as Nawab Wajid Ali Shah Zoological Garden, is a popular attraction housing diverse wildlife, including the rare white tiger and a toy train ride.", "Hazratganj Market in Lucknow is a vibrant shopping hub known for its colonial charm, branded stores, street shopping, and famous eateries.", "The Indira Gandhi Planetarium in Lucknow is a unique space-themed attraction featuring immersive astronomical shows and a distinctive Saturn-shaped building.", "Ramakrishna Math in Lucknow is a spiritual and cultural center dedicated to Vedanta, meditation, and community service, inspired by Sri Ramakrishna's teachings.", "Dream World Amusement Park in Lucknow is a fun-filled destination offering thrilling rides, a water park, and entertainment for all age groups.", "Anandi Water Park in Lucknow is one of the largest water parks in North India, featuring exciting slides, wave pools, and family-friendly attractions.", "Lucknow's Chowk Market is a historic shopping destination famous for its authentic Chikankari embroidery, traditional handicrafts, and delectable Awadhi cuisine.", "Lucknow Metro is a modern and efficient rapid transit system that enhances connectivity across the city with speed, comfort, and convenience.", "Sushant Golf City is a premium township in Lucknow, spread over 6,465 acres, featuring an international golf course, luxury residences, and modern amenities. It is strategically located along Amar Shaheed Path, offering excellent connectivity and a green, well-planned environment.", "ISKCON Lucknow is a grand temple dedicated to Lord Krishna, known for its beautiful architecture, spiritual programs, and vibrant festivals like Janmashtami. Located in Sushant Golf City, it serves as a peaceful retreat for devotees and visitors seeking divine bliss.", "Janeshwar Mishra Park in Lucknow is one of Asia’s largest parks, spanning 376 acres with lush greenery, lakes, and jogging tracks. Inspired by London’s Hyde Park, it serves as a popular recreational spot for visitors and fitness enthusiasts.", " ​Harmony Park, located near CG City in Lucknow, is the city's first musical-themed park, featuring around 80 installations crafted from recycled materials, including 53 playable musical instruments. Opened to the public on January 18, 2025, it offers a unique blend of art, music, and sustainability for visitors.", "Lulu Mall in Lucknow is one of North India’s largest shopping malls, spanning 2.2 million square feet with top global brands, a food court, and entertainment zones. Located on Amar Shaheed Path, it offers a premium shopping and leisure experience."
    ];

    return (
        <div className="container">
            <h2 className='title text-center' >Places to visit in Lucknow</h2>
            <div className='luk row'>
                {images.map((image, index) => (
                    <div key={index} className=" d-flex justify-content-center align-items-center col-lg-4 col-sm-12">
                        <LucknowCard src={image} desc={descriptions[index]} />
                    </div>
                ))}
            </div></div>
    );
};

export default Lucknow;
