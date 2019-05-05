import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <div id="logoAndSocialMedia">
                <h1>Nom Hotel</h1>
                <p>© 2019 Designed and developed <span>with love</span></p>
                <FontAwesomeIcon style={{ width: '40px', marginLeft: "80px" }} icon={faFacebookF} color="#cfa167" />
                <FontAwesomeIcon style={{ width: '40px' }} icon={faInstagram} color="#cfa167" />
            </div>
            <div id="links">
                <div id="menu">
                    <h1>Hotel</h1>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/About">About us</Link></li>
                        <li><Link to="/credits">Credits</Link></li>
                    </ul>
                </div>
                <div id="services">
                    <h1>services</h1>
                    <ul>
                        <li><Link to="/booknow">Book now</Link></li>
                    </ul>
                </div>
                <div id="contact">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} color="#cfa167" />
                        <p style={{ display: "inline", marginLeft: "4px" }}> company@domaine.com</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faPhone} color="#cfa167" />
                        <p style={{ display: "inline", marginLeft: "4px" }}> 0021600000000</p>
                    </span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
