import React from 'react';
import axios from 'axios';
import Loader from '../partials/Loading';

class Reservation extends React.Component {
    state = {
        data: [],
        dataCopy: [],
        loading: true
    }
    componentWillMount() {
        document.body.style.background = "#F2F4F7";
        document.title = "Reservations";
        axios
            .get('/api/reservations')
            .then(res => {
                this.setState({ data: res.data, loading: false });

                for (let i = 0; i < this.state.data.length; i++) {
                    if (this.state.data[i].category === "twoBed") this.setState({ dataCopy: [...this.state.dataCopy, "Two-bedrooms Residence"] });
                    else if (this.state.data[i].category === "royalSuit") this.setState({ dataCopy: [...this.state.dataCopy, "Royal suite"] });
                    else this.setState({ dataCopy: [...this.state.dataCopy, "Three-bedrooms Residence"] });
                }

            });
    }
    deleteMessage(id) {
        let answear = window.confirm("Are you sure you want to delete this ?");
        if (answear) {
            axios
                .delete('/api/reservations/' + id)
                .then(res => {
                    if (res.data === "deleted") {
                        let copy = this.state.data;
                        copy = copy.filter((obj) => {
                            return obj._id !== id;
                        });
                        this.setState({ data: copy });
                    }
                });
        }
    }
    render() {
        return (
            <>
                <Loader isLoading={this.state.loading}></Loader>
                <div className="ad-Container" style={{ width: "80%" }}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Name & lastname </th>
                                <th>Phone number</th>
                                <th>Number of rooms</th>
                                <th>Number of adults</th>
                                <th>Number of Childs</th>
                                <th>Categorie</th>
                                <th>Date</th>
                                <th style={{width:"30px", padding:"0"}}></th>
                            </tr>
                        </thead>
                    </table>
                    <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                {this.state.data.map((obj, i) => {
                                    return (
                                        <tr key={obj._id}>
                                            <td>{obj.nameLastname}</td>
                                            <td>{obj.phone}</td>
                                            <td>{obj.rooms}</td>
                                            <td>{obj.adultsNumber}</td>
                                            <td>{obj.childNumber}</td>
                                            <td>{this.state.dataCopy[i]}</td>
                                            <td>
                                                 From {obj.startDay.day} {obj.startDay.month} To {obj.endDay.day} {obj.endDay.month}
                                            
                                            </td>
                                            <td style={{width:"30px", padding:"0"}}><button onClick={this.deleteMessage.bind(this, obj._id)} style={{ width:"30px", height:"30px", padding:"0" }}>X</button></td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
export default Reservation;