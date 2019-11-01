import React, {Component} from "react";
import Button from "react-bootstrap/Button";

export default class StatButton extends Component {

    increment = () => {
        console.log("increment " + this.props.id);
    };

    decrement = () => {
        console.log("decrement " + this.props.id);
    };

    render() {
        let label;
        let callback;
        if (this.props.operation === 'add') {
            label = "+";
            callback = () => this.increment();
        } else if (this.props.operation === 'subtract') {
            label = "-";
            callback = () => this.decrement();
        } else {
            console.exception("Unknown StatButton type " + this.props.type);
        }
        return (
            <Button variant="link" onClick={callback}>{label}</Button>
        );
    }
}