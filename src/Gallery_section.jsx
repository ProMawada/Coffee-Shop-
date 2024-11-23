import React from 'react'
import './coffee_shop.css';
// import'./coffee_shop.js'
// import React, { useEffect } from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

const Gallery_ection = () => {
return (
    <section className="gallery-section" id="gallery">
    <h2 className="section-title">Gallery</h2>
    <div className="section-content">
        <ul className="gallery-list ul">
        <li className="gallery-item">
            <img src="https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?cs=srgb&dl=art-bread-breakfast-1170659.jpg&fm=jpg.jpg" alt="Gallery Image" className="gallery-image" />
        </li>
        <li className="gallery-item">
            <img src="https://th.bing.com/th/id/OIP.-EozSSln-ybYDwpC_Xch1wHaGW?rs=1&pid=ImgDetMain.jpg" alt="Gallery Image" className="gallery-image" />
        </li>
        <li className="gallery-item">
            <img src="https://nextluxury.com/wp-content/uploads/The-Nine-Most-Useful-Mixers-for-Gin-Drinks.jpg" alt="Gallery Image" className="gallery-image" />
        </li>
        <li className="gallery-item">
            <img src="https://th.bing.com/th/id/OIP.xoeMpXVK3Vhz4G7LpFpUbgHaFj?rs=1&pid=ImgDetMain.jpg" alt="Gallery Image" className="gallery-image" />
        </li>
        <li className="gallery-item">
            <img src="https://openrangeogallala.com/wp-content/uploads/2024/09/eggs-up-grill-menu.jpg" alt="Gallery Image" className="gallery-image" />
        </li>
        <li className="gallery-item">
            <img src="https://streetfood.oceanwp.org/wp-content/uploads/2023/07/grilled-cheeseburger-fries-classic-american-meal-generated-by-ai-1-1.jpg" alt="Gallery Image" className="gallery-image" />
        </li>
        </ul>
    </div>
    </section>
);
}
export default Gallery_ection;
