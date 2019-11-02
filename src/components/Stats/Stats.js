import React, {Component} from "react";
import Stat from "./Stat/Stat";
import Level from "./Level/Level";
import {connect} from "react-redux";

class Stats extends Component {

    render() {
        const listItems = [];
        for (const key in this.props.stats) {
            listItems.push(<Stat key={key} name={key} value={this.props.stats[key]}/>);
        }
        return (
            <div>
                <Level value={this.props.level}/>
                {listItems}
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