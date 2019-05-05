import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Button.css';
class About extends React.Component {
    componentDidMount(){
        document.title = "About us";
      }
    render() {
        return (
            <>
            <div className="container">
                <h1>Hotel name</h1>
                <h3><span>10000m² </span>pure lexury</h3>
                <h3><span>01 </span>Restaurents</h3>
                <h3><span>03 </span>Bars</h3>
                <h2>Contact us</h2>
                <h3>If you have any questions or suggestions - please contact us. We are waiting for your letter …</h3>
                <Link to="/contact" className="btnStyle btnActive" >Contact us</Link>
                </div>
            </>
        )
    }
}
export default About;
