import React, {Component} from "react";
import Stat from "./Stat/Stat";
import Level from "./Level/Level";

export default class Stats extends Component {

    constructor(props) {
        super(props);
        this.stats = ['Power', 'Stamina', 'Wisdom'];
        this.minimumAllocatedStats = process.env.REACT_APP_MIN_STAT * this.stats.length;
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
        const listItems = this.stats.map((stat) =>
            <Stat onStatChange={this.onStatChange} key={stat.toLowerCase()} id={stat.toLowerCase()} name={stat}/>
        );
        return (
            <div>
                <Level value={this.state.level}/>
                {listItems}
            </div>
        );
    }

}