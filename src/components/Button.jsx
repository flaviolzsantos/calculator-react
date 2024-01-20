import React from "react";
import './css/Button.css';


const Button = props => {

    let classes = `button
        ${props.operation ? "operation" : ""}
        ${props.double ? "double" : ""}
        ${props.triple ? "triple" : ""}`;

    return (        
        <button 
            className = {classes}
            onClick={e => props.click && props.click(props.label)}
        >{props.label}
        
        </button>        
    )
}   

export default Button;