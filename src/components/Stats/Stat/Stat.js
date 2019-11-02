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
                <Col>
                    <span className="stat-name mx-auto">{this.props.name}</span>
                    <StatButton id={this.props.name} operation="subtract" value="-10"
                                onClick={() => this.props.changeStat(this.props.name, -10)}/>
                    <StatButton id={this.props.name} operation="subtract" value="-1"
                                onClick={() => this.props.changeStat(this.props.name, -1)}/>
                    <span className="stat-changer mx-auto">{this.props.value}</span>
                    <StatButton id={this.props.name} operation="add" value="+1"
                                onClick={() => this.props.changeStat(this.props.name, 1)}/>
                    <StatButton id={this.props.name} operation="add" value="+10"
                                onClick={() => this.props.changeStat(this.props.name, 10)}/>
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
