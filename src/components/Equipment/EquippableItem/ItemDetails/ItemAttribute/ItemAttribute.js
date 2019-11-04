import * as React from "react";

export default class ItemAttribute extends React.Component {

    render() {
        if (!this.props.value) {
            return <></>;
        }
        return (<span className="item-attribute">{this.props.value} {this.props.attribute}</span>);
    }

}