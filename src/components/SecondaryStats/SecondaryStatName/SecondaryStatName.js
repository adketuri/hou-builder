import * as React from "react";

export default class SecondaryStatName extends React.Component {

    format(stat) {
        return stat.replace(/^\w/, c => c.toUpperCase());
    }

    render() {
        return (
            <span>{this.format(this.props.name)}</span>
        );
    }
}
