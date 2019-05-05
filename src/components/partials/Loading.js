import React from 'react';
import '../../assets/css/Loader.css';

class Loader extends React.Component {
    render() {
        return (
            <div className="loader-container" style={{ display: this.props.isLoading ? "block" : "none" }}> 
                <div className="loader"></div>
            </div>
        )
    }
}
export default Loader;

