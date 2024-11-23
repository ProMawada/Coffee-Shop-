import React from 'react';
import './coffee_shop.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer_section = () => {
  return (
    <footer className="footer-section">
      <div className="section-content">
        <p className="copyright-text">© 2024 Coffee Shop</p>

        <div className="social-link-list">
          <Link to="https://www.facebook.com" className="social-link">
            <FacebookRoundedIcon style={{ color: 'white', fontSize: '26px' }} />
          </Link>
          <Link to="https://www.instagram.com" className="social-link">
            <InstagramIcon style={{ color: 'white', fontSize: '26px' }} />
          </Link>
          <Link to="https://www.twitter.com" className="social-link">
            <XIcon style={{ color: 'white', fontSize: '26px' }} />
          </Link>
        </div>

        <p className="policy-text">
          <HashLink to="" className="policy-link">Privacy policy</HashLink>
          <span className="separator">•</span>
          <HashLink to="" className="policy-link">Refund policy</HashLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer_section;
