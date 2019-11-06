import React, {Component} from "react";

export default class Level extends Component {

    render() {
        return (<span><strong>Level {this.props.value}</strong></span>);
    }

}