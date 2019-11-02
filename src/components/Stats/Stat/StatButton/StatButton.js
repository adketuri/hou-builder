import React, {Component} from "react";
import Button from "react-bootstrap/Button";

export default class StatButton extends Component {

    click = () => {
        this.props.onClick();
    };

    render() {
        const value = this.props.value;
        return (
            <Button className="w-5" variant="link" onClick={() => this.click()}>{value}</Button>
        );
    }
}