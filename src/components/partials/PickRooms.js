import React from 'react';
class PickRooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameLastname: "",
            phone:"",
            rooms: 1,
            category: 'twoBed',
            adultsNumber: 1,
            childNumber: 0,
            child: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addAdults = this.addAdults.bind(this);
        this.removeAdults = this.removeAdults.bind(this);
        this.addChild = this.addChild.bind(this);
        this.removeChild = this.removeChild.bind(this);
    }

    addAdults(e) {
        if (this.state.adultsNumber < 6)
            this.setState({
                adultsNumber: this.state.adultsNumber + 1
            })
        else {
            alert("Sorry, You can't add another Adult");
            e.preventDefault(e);
        }
    }
    removeAdults(e) {
        this.state.adultsNumber > 1 ?
            this.setState({
                adultsNumber: this.state.adultsNumber - 1
            })
            : alert("Sorry, You can't remove another adult")
    }
    addChild(e) {
        if (this.state.childNumber < 10)
            this.setState({
                childNumber: this.state.childNumber + 1,
                child: [...this.state.child, 'baby']

            })
        else { alert("Sorry, You can't add another child") }
    }
    removeChild(e, index) {
        if (this.state.childNumber > 0) {
            this.state.child.splice(index, 1)
            this.setState({
                childNumber: this.state.childNumber - 1,
            })
        } else { alert("Sorry, You can't remove another child"); }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleChangearr(e, index) {
        let copy = [];
        copy = [...this.state.child];
        copy[index] = e.target.value;
        this.setState({ child:copy })
    }
    picked() {
        this.props.dataR(this.state);
    }
    render() {
        this.picked();
        return (
            <div className="pickRooms">
                            <label>Name & lastname</label>
                        <input type="text" name="nameLastname" value={this.state.nameLastname} onChange={this.handleChange} required/>
                        <label>Phone number</label>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                <div className='selectInputs'>
                    <div className='wrappingUp'>
                        <p>rooms:</p>
                        <select name='rooms' value={this.state.rooms} onChange={this.handleChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>
                    <div className='wrappingUp'>
                        <p>category:</p>
                        <select name='category' value={this.state.category} onChange={this.handleChange}>
                            <option value='two bed residence'>Two-bedrooms Residence</option>
                            <option value='three bed residence'>three-bedrooms Residence</option>
                            <option value='royal suit'>Royal Suite</option>
                        </select>
                    </div>
                </div>
                <div className="inputBtns">
                    <div>
                        <p style={{ textAlign: "left" }}>Adults:</p>
                        <div className="inputbtn wrappingUp">

                            <input type='button' className="btn" onClick={this.addAdults} value="+" />
                            <input type='text' className="inputText" name='adultsNumber' onChange={this.handleChange} value={this.state.adultsNumber} disabled />
                            <input type='button' className="btn" onClick={this.removeAdults} value="-" />
                        </div>
                    </div>

                    <div>
                        <p style={{ textAlign: "left" }}>Children:</p>
                        <div className="inputbtn wrappingUp">
                            <input type='button' className="btn" onClick={this.addChild} value="+" />
                            <input type='text' className="inputText" name='childNumber' onChange={this.handleChange} value={this.state.childNumber} disabled />
                            <input type='button' className="btn" onClick={this.removeChild} value="-" />
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    {
                        this.state.child.map((bedtype, index) => {
                            return (
                                <div key={index}>
                                    <p> child {index + 1} , Type of bed:</p>
                                    <div>
                                        <select name='bedtype' value={bedtype} onChange={(e) => this.handleChangearr(e, index)}>
                                            <option value='baby'>baby bed</option>
                                            <option value='normal'>Normal bed</option>
                                        </select>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default PickRooms;