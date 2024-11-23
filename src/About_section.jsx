import React from 'react';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const About_section = () => {
return (
<section className="about-section" id="about">
    <div className="section-content">
    <div className="about-image-wrapper">
        <img src="https://img.freepik.com/premium-photo/latte-art-cappuccino_1031776-28233.jpg" alt="About" className="about-image" />
    </div>
    <div className="about-details">
        <h2 className="section-title">About Us</h2>
        <p className="text">
        At Coffee House in Berndorf, Germany, we pride ourselves on being a go-to destination for coffee lovers and conversation seekers alike. We're dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
        </p>
        <div className="social-link-list">
        <Link to="https://www.facebook.com" className="social-link">
            <FacebookRoundedIcon style={{ color: '#171616', fontSize: '25px' }} />
        </Link>
        <Link to="https://www.instagram.com" className="social-link">
            <InstagramIcon style={{ color: '#171616', fontSize: '25px' }} />
        </Link>
        <Link to="https://www.twitter.com" className="social-link">
            <XIcon style={{ color: '#171616', fontSize: '25px' }} />
        </Link>
        </div>
    </div>
    </div>
</section>
);
}

export default About_section;
