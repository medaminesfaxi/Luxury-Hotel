import React from 'react';
import ScrollTop from "react-scrolltop-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

class ScrollUpBtn extends React.Component {
    render() {
        return (
            <div>
                <ScrollTop
                    text = " "
                        style={{

                        backgroundColor: '#2a2a2a', border: 'none', borderRadius: '0px',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)', right: '30px', bottom: '30px', width: '50px', height: '50px'
                    }}
                    icon={
                        <FontAwesomeIcon
                            style={{
                                position: "absolute", top: '32%', left: '32%', color: 'hsla(0,0%,100%,.4)', width: '20px', height: '20px'
                            }}
                            icon={faChevronUp}
                            color="hsla(0,0%,100%,.4) "
                        />
                    }
                    speed={600}
                />
            </div>
        )
    }
}
export default ScrollUpBtn;
