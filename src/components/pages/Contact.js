import React from 'react';
import Confirmation from '../partials/Confirmation';
import '../../assets/css/Form.css';
import Wobble from 'react-reveal/Wobble';
import axios from 'axios';

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
        sent: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('api/inbox', this.state).then(res => {
            console.log(res)
            if (res.data === "success") {
                this.setState({sent:true})  
            }
        })
    }
    nameHandleChange = (e) => {
        this.setState({ name: e.target.value });
    }
    emailHandleChange = (e) => {
        this.setState({ email: e.target.value });
    }
    messageHandleChange = (e) => {
        this.setState({ message: e.target.value });
    }
    componentDidMount(){
        document.title = "Contact us";
      }
    render() {
        return (
            <>
                <div className="formContainer" style={{overflow:"hidden"}}>
                    <div className="info">
                        <h1>Email</h1>
                        <p>com@email.com</p>
                    </div>
                    <div className="info">
                        <h1>Phone</h1>
                        <p>000000000000</p>
                    </div>
                    <h1>Contact Us</h1>
                    {this.state.sent === false ? 
                    <form onSubmit={this.handleSubmit} method="POST" action="/inbox" >
                        <label>Name</label>
                        <input type="text" required placeholder="your name" value={this.state.name} onChange={this.nameHandleChange} />
                        <label>Email</label>
                        <input type="email" required placeholder="your e-mail" value={this.state.email} onChange={this.emailHandleChange} />
                        <label>Your message</label>
                        <textarea rows="6" cols="20" maxLength="250" required="required" placeholder="write something for us" value={this.state.message} onChange={this.messageHandleChange}></textarea>
                        <input style={{ cursor: "pointer" }} type="submit" className="btnStyle btnActive" value="Send message" />
                    </form> : <Wobble duration={1220} top> <Confirmation message="Message sent"></Confirmation> </Wobble>}
                </div>
            </>
        )
    }
}
export default Contact;
