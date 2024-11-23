import React from 'react';
import './coffee_shop.css';
import { Link } from 'react-scroll';
import { Outlet } from 'react-router-dom';

const Header = () => {
return (
<>
    <header>
    <nav className="navbar">
        <div className="nav-logo">
        <h2 className="logo-text">☕ Coffee</h2>
        </div>
        <ul className="nav-menu">
        <button id="menu-close-button" className="fas fa-times" />
        <li className="nav-item">
            <Link to="hero" smooth={true} duration={30} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="about" smooth={true} duration={30} className="nav-link">About</Link>
        </li>
        <li className="nav-item">
            <Link to="menu" smooth={true} duration={30} className="nav-link">Menu</Link>
        </li>
        <li className="nav-item">
            <Link to="testimonials" smooth={true} duration={30} className="nav-link">Testimonials</Link>
        </li>
        <li className="nav-item">
            <Link to="gallery" smooth={true} duration={30} className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
            <Link to="contact" smooth={true} duration={30} className="nav-link">Contact</Link>
        </li>
        </ul>
        <button id="menu-open-button" className="fas fa-bars" />
    </nav>
    </header>
    <Outlet />
    
</>
);
}

export default Header;
