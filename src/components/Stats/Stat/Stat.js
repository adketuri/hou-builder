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

    handleIncrement = () => {
        this.setState((state, props) => ({value: state.value + 1}));
        this.props.onStatChange(this.props.id, 1);
    };

    handleDecrement = () => {
        if (this.state.value > process.env.REACT_APP_MIN_STAT) {
            this.setState((state, props) => ({value: state.value - 1}));
            this.props.onStatChange(this.props.id, -1);
        }
    };

    render() {
        return (
            <Row>
                <Col>{this.props.name}</Col>
                <Col>
                    <StatButton id={this.props.id} operation="subtract" value={this.state.value}
                                onClick={this.handleDecrement}/>
                    {this.state.value}
                    <StatButton id={this.props.id} operation="add" value={this.state.value}
                                onClick={this.handleIncrement}/>
                </Col>
            </Row>
        );
    }
}