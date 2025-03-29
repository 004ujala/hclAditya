import React from 'react';
import LucknowCard from './LucknowCard';
import "../css/Lucknow.css"

const Lucknow = () => {
    const images = [
        "/lucknow/1.jpg", "/lucknow/2.jpg", "/lucknow/3.png", "/lucknow/4.jpg", "/lucknow/5.png", "/lucknow/6.jpg", "/lucknow/7.png", "/lucknow/8.jpg", "/lucknow/9.jpg", "/lucknow/10.jpg"
    ];

    const descriptions = [
        "| Marine Drive Lucknow | Marine Drive in Lucknow is a scenic riverside promenade along the Gomti River, popular for jogging, cycling, and relaxing with a beautiful sunset view.", "| Ambedkar Park | Ambedkar Park in Lucknow is a grand memorial dedicated to Dr. B.R. Ambedkar, featuring magnificent sandstone structures, statues, and a serene ambiance.", " | Lucknow Zoo | Lucknow Zoo, also known as Nawab Wajid Ali Shah Zoological Garden, is a popular attraction housing diverse wildlife, including the rare white tiger and a toy train ride.", " | Hazratganj Market | Hazratganj Market in Lucknow is a vibrant shopping hub known for its colonial charm, branded stores, street shopping, and famous eateries.", "| Planetarium | The Indira Gandhi Planetarium in Lucknow is a unique space-themed attraction featuring immersive astronomical shows and a distinctive Saturn-shaped building.", "| Ram Nath Krishna Marg | Ramakrishna Math in Lucknow is a spiritual and cultural center dedicated to Vedanta, meditation, and community service, inspired by Sri Ramakrishna's teachings.", " | Dream World Lucknow | Dream World Amusement Park in Lucknow is a fun-filled destination offering thrilling rides, a water park, and entertainment for all age groups.", " | Anandi Water Park | Anandi Water Park in Lucknow is one of the largest water parks in North India, featuring exciting slides, wave pools, and family-friendly attractions.", " | Lucknow Chowk | Lucknow's Chowk Market is a historic shopping destination famous for its authentic Chikankari embroidery, traditional handicrafts, and delectable Awadhi cuisine.", "| Metro | Lucknow Metro is a modern and efficient rapid transit system that enhances connectivity across the city with speed, comfort, and convenience."
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
