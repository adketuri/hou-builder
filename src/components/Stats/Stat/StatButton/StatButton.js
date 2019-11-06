import React, {Component} from "react";
import Button from "react-bootstrap/Button";

export default class StatButton extends Component {

    click = () => {
        this.props.onClick();
    };

    render() {
        const value = this.props.value;
        const variant = this.props.value > 0 ? "outline-primary" : "outline-danger";
        return (
            <Button size="sm" className="stat-button" variant={variant} onClick={() => this.click()}>{value}</Button>
        );
    }
}