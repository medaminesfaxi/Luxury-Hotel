import React, { Component } from 'react';
import Welcome from '../partials/Welcome';
import Carrousel from '../partials/Carrousel';
import Location from '../partials/Location';
import Introduction from '../partials/Introduction';
import Fade from 'react-reveal/Fade';


export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        <Fade>
          <Welcome />
        </Fade>
        <Fade top duration={500}>
          <Introduction />
        </Fade>
        <Fade top duration={1500}>
          <Carrousel />
        </Fade>
        <Fade top duration={500}>
          <Location />
        </Fade>
      </div>
    )
  }
}
