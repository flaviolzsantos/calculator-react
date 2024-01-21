import React, {Component} from "react";
import './Calculador.css'

import Button from "../components/Button";
import Display from "../components/Display";

const initialValue = {
    display: '0',
    operation: null,
    firstValue: 0,
    secoundValue: 0,
    clearDisplay: false
};

const enumOperation = {
    division: 'division', 
    multiplier: 'multiplier', 
    minus: 'minus', 
    plus: 'plus', 
    equal: 'equal'
};

class Calculador extends Component {

    
    
    state = {...initialValue};

    constructor (props){
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }
    clearMemory () {
        this.setState({...initialValue});
    }

    setOperation(operation){
        let op = null;
        switch(operation){
            case '/' : op = enumOperation.division; break;
            case '*' : op = enumOperation.multiplier; break;
            case '-' : op = enumOperation.minus; break;
            case '+' : op = enumOperation.plus; break;
            case '=' : op = enumOperation.equal; break;
            default : op = null;
        }
        this.setState({
            operation:op,
            clearDisplay: true
        })

        if(op === enumOperation.equal){
            let display = 0;
            const firstValue = this.state.firstValue;
            const secoundValue = this.state.secoundValue;

            switch(this.state.operation){
                case enumOperation.division:
                    display = firstValue / secoundValue;
                    break;
                case enumOperation.minus:
                    display = firstValue - secoundValue;
                    break;
                case enumOperation.multiplier:
                    display = firstValue * secoundValue;
                    break;
                case enumOperation.plus:
                    display = firstValue + secoundValue;
                    break;
                default:
                    display = 0;
            }

            this.setState({display});
        }
    }

    addDigit(n){

        if(n === '.' && this.state.display.includes('.')){
            return;
        }

        if(this.state.operation == null){
            this.setState(
                {
                    display: (this.state.display == 0) ? n : this.state.display + n,
                    firstValue : parseFloat(this.state.display + n)
                });
        }else{
           
            this.setState(
                {
                    display: (this.state.clearDisplay) ? n : this.state.display + n,
                    secoundValue : (this.state.clearDisplay) ? parseFloat(n) : parseFloat(this.state.display + n),
                    clearDisplay: false
                });
        }  
        
    }

    render(){        

        return (
            <div className="calculator">
                <Display value={this.state.display}></Display>
                <Button label="AC" click={this.clearMemory} triple></Button>
                <Button label="/" click={this.setOperation} operation ></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation ></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation ></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation ></Button>
                <Button label="0" click={this.addDigit} double></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation ></Button>
            </div>
        )
    }
}

export default Calculador