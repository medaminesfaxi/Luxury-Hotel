import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Header.css';

const Header = () =>
    <header>
        <h3>Hotel name</h3>
        <div className="right">
            <div>
                <FontAwesomeIcon icon={faEnvelope} color="#cfa167" />
                <p>Email@comany.com</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faPhone} color="#cfa167" />
                <p>002222222</p>
            </div>
        </div>
    </header>
export default Header;