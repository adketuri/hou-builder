import React, {Component} from "react";
import Stat from "./Stat/Stat";
import Level from "./Level/Level";
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class Stats extends Component {

    render() {
        const listItems = [];
        for (const key in this.props.stats) {
            listItems.push(<ListGroup.Item key={key}><Stat name={key} value={this.props.stats[key]}/></ListGroup.Item>);
        }
        return (
            <div>
                <h1>Primary Stats</h1>
                <Card>
                    <Card.Header><Level value={this.props.level}/></Card.Header>
                    <ListGroup variant="flush">
                        {listItems}
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

/** Takes in the state (from our store) and passes it down as this component's props. */
function mapStateToProps(state) {
    return {
        stats: state.primaryStats.stats,
        level: state.primaryStats.level
    };
}

export default connect(mapStateToProps)(Stats);