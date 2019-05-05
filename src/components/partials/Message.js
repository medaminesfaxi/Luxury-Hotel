import React from 'react';
import '../../assets/css/Popup.css';
import Fade from 'react-reveal/Fade';
class Message extends React.Component {
    state = {
        display: "none",
    }
    toggle = () => {
        this.state.display === "none" ? this.setState({ display: "block" }) : this.setState({ display: "none" })
    }
    render() {
        return (
            <Fade duration={320}>
            <div className="modal" style={{ display: this.state.display }}>
                <div className="modal-content">
                    <span className="close" onClick={this.toggle}>&times;</span>
                    <p style={{borderBottom:"1px solid #555", padding:"16px 12px", marginBottom:"25px"}}> <span style={{ color: "#4CE1B6", fontWeight: "bold" }}>FROM:</span> Med amine (m.amine.sfaxi@gmail.com)</p>
                    <p>{this.props.message}</p>
                </div>
            </div>
            </Fade>
        )
    }
}
export default Message;
