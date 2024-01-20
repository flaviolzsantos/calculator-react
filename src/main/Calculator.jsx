import React, {Component} from "react";
import './Calculador.css'

import Button from "../components/Button";

class Calculador extends Component {
    render(){
        return (
            <div className="calculator">
                <Button label="AC"></Button>
                <Button label="/"></Button>
                <Button label="7"></Button>
                <Button label="8"></Button>
                <Button label="9"></Button>
                <Button label="*"></Button>
                <Button label="4"></Button>
                <Button label="5"></Button>
                <Button label="6"></Button>
                <Button label="-"></Button>
                <Button label="1"></Button>
                <Button label="2"></Button>
                <Button label="3"></Button>
                <Button label="+"></Button>
                <Button label="0"></Button>
                <Button label="."></Button>
                <Button label="="></Button>
            </div>
        )
    }
}

export default Calculador