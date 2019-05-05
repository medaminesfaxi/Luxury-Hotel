import React, { Component } from 'react'
import img8 from '../../assets/images/img8.png'
import '../../assets/css/Introduction.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

class Introduction extends Component {
    render() {
        return (
            <div className="mainContIntro">
                <div className="contImgIntro">
                    <div className="contIntro">
                        <Fade left>
                            <div className="icons">
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                            </div>
                            <h2>Hotel Name</h2>
                        </Fade>
                        <div className="intro">
                            <p>
                                A new luxury concept that provides an extraordinary level of refinement, relaxation and style. A unique experience to be enjoyed in the peace and conviviality of your private chalet , with all the comfort of a luxury hotel!
                            </p>
                            <div id="bordered">
                                <p>
                                    Our Residences remain open all year round to discover the amazing Bernese Alps!
                                </p>
                            </div>
                            <p>
                                In the heart of the famous village of Gstaad! The luxury of discretion.
                            </p>
                        </div>
                    </div>
                    <div className="img">
                        <img src={img8} className="respImg" alt="png" />
                    </div>
                </div>

            </div>
        );
    }
}
export default Introduction;