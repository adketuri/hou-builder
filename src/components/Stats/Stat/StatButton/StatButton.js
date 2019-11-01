import React, {Component} from "react";
import Button from "react-bootstrap/Button";

export default class StatButton extends Component {

    click = () => {
        console.log(this.props.operation + " " + this.props.id);
        this.props.onClick();
    };

    render() {
        let label;
        const value = this.props.value;
        if (this.props.operation === 'add') {
            label = "+";
        } else if (this.props.operation === 'subtract') {
            label = "-";
        } else {
            console.exception("Unknown StatButton type " + this.props.type);
        }
        return (
            <Button variant="link" onClick={() => this.click()}>{label}</Button>
        );
    }
}