import React, { Component } from 'react'
import '../../assets/css/welcome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default class Welcome extends Component {
  handleOnClick = () => {
    window.scrollTo(0, 2060);
     
  }
  render() {
    return (
      <div className='contWel'>
        <h1 style={{ letterSpacing: "10px" }}>Hotel Name</h1>
        <div className="icons">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
        </div>
        <h1>Find a Room</h1>
        <div className='btns'>
          <Link to="/Booknow" className="btnStyle btnActive" style={{ marginRight: "26px", padding: "26px 68px 26px 68px" }}>Book now</Link>
          <Link onClick={this.handleOnClick} to="#caro" className="btnStyle " style={{ marginRight: "26px", padding: "26px 68px 26px 68px" }}>Offers</Link>
        </div>
      </div>
    )
  }
}
