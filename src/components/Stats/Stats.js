import React, {Component} from "react";
import Stat from "./Stat/Stat";
import Container from "react-bootstrap/Container";

export default class Stats extends Component {

    render() {
        const stats = ['Power', 'Stamina', 'Wisdom'];
        const listItems = stats.map((stat) =>
            <Stat key={stat.toLowerCase()} id={stat.toLowerCase()} name={stat}/>
        );
        return (
            <Container>
                {listItems}
            </Container>
        );
    }

}