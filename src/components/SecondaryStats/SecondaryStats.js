import * as React from "react";
import {connect} from "react-redux";
import Table from "react-bootstrap/Table";
import SecondaryStatName from "./SecondaryStatName/SecondaryStatName";

const tooltips = {
    "atk": "Atk (Attack) is multiplied by Power to determine the strength of physical attacks.",
    "def": "Def (Defense) is combined with Stamina to determine touch damage reduction.",
    "matk": "Matk (Magic Attack) is multiplied with Wisdom to determine Magical spell damage.",
    "mdef": "Mdef (Magic Defense) is multiplied with Wisdom to reduce projectile and magic damage.",
    "crit": "The probability of dealing a critical strike. Critical strikes ignore defense and deal maximum damage. Expressed as a percentage.",
    "aspd": "Aspd (Attack Speed) is the rate of attacking with your weapon. Expressed roughly as a percentage.",
    "cspd": "Cspd (Cast Speed) is the rate of casting spells. Expressed roughly as a percentage.",
    "cdmg": "Cdmg (Crit Damage) is expressed as a percentage and is added to the damage of critical attacks."
};

class SecondaryStats extends React.Component {

    render() {
        return (
            <div>
                <h1>Secondary Stats</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getRow("atk", "def")}
                    {this.getRow("matk", "mdef")}
                    {this.getRow("aspd", "cspd")}
                    {this.getRow("crit", "cdmg")}
                    </tbody>
                </Table>
            </div>
        );
    }

    getRow(stat1, stat2) {
        return <tr>
            <td><SecondaryStatName name={stat1} description={tooltips[stat1]}/></td>
            <td>{this.sum(stat1) + this.suffix(stat1)}</td>
            <td><SecondaryStatName name={stat2} description={tooltips[stat2]}/></td>
            <td>{this.sum(stat2) + this.suffix(stat2)}</td>
        </tr>;
    }

    sum(stat) {
        let sum = 0;
        Object.keys(this.props.equipment).forEach((key) => sum += this.props.equipment[key][stat]);
        if (stat === "aspd" || stat === "cspd") sum += 100;
        return sum;
    }


    suffix(stat) {
        return (stat === "aspd" || stat === "cspd" || stat === "cdmg" || stat === "crit") ? "%" : "";
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats,
        equipment: state.equipment,
    };
}

export default connect(mapStateToProps, null)(SecondaryStats);