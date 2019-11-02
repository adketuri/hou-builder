import React, {Component} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import StatButton from "./StatButton/StatButton";
import {bindActionCreators} from "redux";
import {changeStat} from "../../../actions";
import {connect} from "react-redux";

class Stat extends Component {

    render() {
        return (
            <Row>
                <Col>{this.props.name}</Col>
                <Col>
                    <StatButton id={this.props.name} operation="subtract" value={this.props.value}
                                onClick={() => this.props.changeStat(this.props.name, -1)}/>
                    {this.props.value}
                    <StatButton id={this.props.name} operation="add" value={this.props.value}
                                onClick={() => this.props.changeStat(this.props.name, 1)}/>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({changeStat: changeStat}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Stat);
