import React, {Component} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import StatButton from "./StatButton/StatButton";


export default class Stat extends Component {

    constructor(props) {
        super(props);
        this.min = 5;
        this.state = {value: this.min}
    }

    render() {
        return (
            <Row>
                <Col>{this.props.name}</Col>
                <Col><StatButton id={this.props.id} operation="subtract"/>{this.state.value}<StatButton
                    id={this.props.id} operation="add"/></Col>
            </Row>
        );
    }
}