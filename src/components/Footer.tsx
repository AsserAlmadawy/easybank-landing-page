import React from "react";
import "./styles/Footer.css";

const Footer: React.FC = () => (
  <div className="footer">
    <img src="icons/logo-white.svg" alt="Logo" className="logo" />
    <img src="icons/icon-facebook.svg" alt="Facebook" className="facebook" />
    <img src="icons/icon-youtube.svg" alt="YouTube" className="youtube" />
    <img src="icons/icon-twitter.svg" alt="Twitter" className="twitter" />
    <img src="icons/icon-pinterest.svg" alt="Pinterest" className="pinterest" />
    <img src="icons/icon-instagram.svg" alt="Instagram" className="instagram" />
    <div className="about-us">About us</div>
    <div className="contact">Contact</div>
    <div className="blog">Blog</div>
    <div className="careers">Careers</div>
    <div className="support">Support</div>
    <div className="privacy-policy">Privacy policy</div>
    <div className="footer-button">Request invite</div>
    <div className="copyright">&copy; Easybank 2024 all rights reserved</div>
  </div>
);

export default Footer;