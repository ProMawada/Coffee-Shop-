import React from 'react'
// import {Link} from 'react-router-dom'
import { Link } from 'react-scroll';
import { Outlet } from 'react-router-dom';
import './coffee_shop.css';

const Hero_section = () => {
    return (<>
        <section className="hero-section" id="hero">
        <div className="section-content">
        <div className="hero-details">
        <h2 className="title">Best Coffee</h2>
        <h3 className="subtitle">Make your day great with our special coffee!</h3>
        <p className="description">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
        <div className="buttons">
        <Link to="menu" className="button order-now">Order Now</Link>
        <Link to="contact" className="button contact-us">Contact Us</Link>
        </div>
        </div>
        <div className="hero-image-wrapper">
        <img src="https://th.bing.com/th/id/R.3cf3dcd5141b6fd1f35fa711c194a4fb?rik=sZinpBCHsvRAWw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcoffee-png--1413.png&ehk=dlsZAIfsSb3pG%2fPTq2seYl7mccei4YxRkUR24Z3k3Sk%3d&risl=&pid=ImgRaw&r=0.png" alt="Coffee" className="hero-image" />
        </div>
        </div>
        </section>
        <Outlet />
        </>
        );
}

export default Hero_section