import React from 'react';
import '../../assets/css/Button.css';

const Button = (props) =>
    props.active ?  <a href={props.link} className="btnStyle btnActive">{props.text}</a> :  <a href={props.link} className="btnStyle ">{props.text}</a>
export default Button;