import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/css/Menu.css';
const menuStyle = {
    position: "absolute",
    top: "100px",
    cursor: "pointer",
    right: "50px",
    zIndex: "2223",
    background: "none"
}

class Menu extends React.Component {
    state = {
        visibility: false
    }
    toggle = () => {
        this.setState({ visibility: !this.state.visibility});  
    }
    render() {
        // fixed menu scroll
        this.state.visibility ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
        return (
            <>
                {this.state.visibility ?
                    <>
                        <div className="barContainer">
                            <div className="bar ono"></div>
                            <div className="bar two"></div>
                        </div>
                        <div className="menu-container fade-in one" >
                            <ul onClick={this.toggle}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/booknow">Book now</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Credits">Credits</Link></li>
                            </ul>
                        </div>
                    </>
                    : null}
                < div style={menuStyle} onClick={this.toggle} >
                    <FontAwesomeIcon icon={this.state.visibility ? faTimes : faBars} color="#fff" size="2x" />
                </div >
            </>
        )
    }
}
export default Menu;