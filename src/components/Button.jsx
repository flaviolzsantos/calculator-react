import React from "react";
import './css/Button.css';


const Button = props => {
    return (        
        <button className="button">{props.label}</button>        
    )
}   

export default Button;