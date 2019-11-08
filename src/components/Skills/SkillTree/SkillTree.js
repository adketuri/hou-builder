import * as React from "react";
import Card from "react-bootstrap/Card";
import {Accordion} from "react-bootstrap";

export default class SkillTree extends React.Component {

    render() {
        return (<Card>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
                {this.props.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={this.props.id}>
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>)
    }

}