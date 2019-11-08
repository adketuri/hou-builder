import * as React from "react";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";
import Skill from "./Skill/Skill";
import Table from "react-bootstrap/Table";

export default class SkillTree extends React.Component {
  render() {
    const s = [];
    for (let i = this.props.start; i < this.props.start + 12; i++) {
      s.push(<Skill key={i} id={i} skill={this.props.skills[i]} />);
    }
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.start}>
          {this.props.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.start}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>{s}</tbody>
          </Table>
        </Accordion.Collapse>
      </Card>
    );
  }
}
