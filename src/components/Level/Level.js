import React, {Component} from "react";

export default class Level extends Component {

    constructor(props){
        super(props);
        this.state = {level: 1}
    }

    render() {
        return(<span>Level {this.state.level}</span>);
    }

}