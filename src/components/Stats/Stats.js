import React, {Component} from "react";
import Stat from "./Stat/Stat";
import Level from "./Level/Level";
import {connect} from "react-redux";

class Stats extends Component {

    constructor(props) {
        super(props);
        this.minimumAllocatedStats = process.env.REACT_APP_MIN_STAT * this.props.stats.length;
        this.allocatedStats = this.minimumAllocatedStats;
        this.state = {level: 1, rebirth: false}
    }

    onStatChange = (id, change) => {
        console.log("Stat change " + id + " " + change);
        this.allocatedStats += change;
        this.setState((props, state) => ({
            level: Math.ceil((this.allocatedStats - this.minimumAllocatedStats) / 2 + 1)
        }));
    };

    render() {
        const listItems = this.props.stats.map((stat) =>
            <Stat onStatChange={this.onStatChange} key={stat.id} id={stat.id} name={stat.name}/>
        );
        return (
            <div>
                <Level value={this.state.level}/>
                {listItems}
            </div>
        );
    }
}

/** Takes in the state (from our store) and passes it down as this component's props. */
function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

export default connect(mapStateToProps)(Stats);