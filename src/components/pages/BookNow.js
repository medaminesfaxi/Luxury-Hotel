import React from 'react';
import '../../assets/css/bookNow.css';
import PickRooms from '../partials/PickRooms';
import DatePicker from '../partials/DatePicker';
import Confirmation from '../partials/Confirmation';
import axios from 'axios';
import Wobble from 'react-reveal/Wobble';

let pickData = {};
let dateData = {};

class BookNow extends React.Component {
    state = {
        data: [],
        sent: false
    }
    componentDidMount() {
        document.title = "Book now";
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (dateData.startDay === 0 || dateData.endDay === 0) {
            alert("Sorry, You have to choose a reservation date")
        } else {
            axios
                .post("/api/reservations", { ...dateData, ...pickData });
            this.setState({ sent: true });
        }
    }

    getDataR = (obj) => {
        pickData = obj;
    }
    getDataD = (obj) => {
        dateData = obj;
    }
    render() {
        return (
            <div className='form' style={{overflow:"hidden"}}>
                <h2>Find a room</h2>
                {this.state.sent === false ? 
                <form onSubmit={this.handleSubmit}>
                    <div className="pickRoom">
                        <PickRooms dataR={this.getDataR} />
                    </div>

                    <div className='calendar'>
                        <p>pick a date:</p>
                        <DatePicker dataD={this.getDataD} />
                    </div>
                    <input style={{ cursor: "pointer" }} type="submit" className="btnStyle" value="Book now" />
                </form> : <Wobble duration={620} top> <Confirmation message="Thank you for using our service."></Confirmation> </Wobble>}
            </div>
        );
    }
}
export default BookNow;

