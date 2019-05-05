import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "../../assets/css/location.css"
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Location extends Component {
  static defaultProps = {
    center: {
      lat: 35.8125,
      lng: 10.638
    },
    zoom: 18
  };

  render() {
    return (
      <div className="mainContloc">
        <Fade left>
          <h2>visit us</h2>
        </Fade>
        <div className="locCont">
            <div className="locDesc">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <div>
                <p> ISSAT Sousse</p>
                <p>Cité Taffala(Ibn Khaldoun)</p>
                <p>4003 Sousse</p>
                <p>Tunisie</p>
              </div>
            </div>
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
        </div>

      </div>

    );
  }
}

export default Location;