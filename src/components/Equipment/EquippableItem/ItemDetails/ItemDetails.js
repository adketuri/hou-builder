import * as React from "react";
import {bindActionCreators} from "redux";
import {changeEquipment, hideEquipment} from "../../../../actions";
import {connect} from "react-redux";
import ItemAttribute from "./ItemAttribute/ItemAttribute";
import {Button} from "react-bootstrap";

const attributes = ['atk', 'def', 'matk', 'mdef'];

class ItemDetails extends React.Component {

    render() {
        const items = [];
        for (const [index, attribute] of attributes.entries()) {
            items.push(<ItemAttribute key={index} attribute={attribute} value={this.props.item[attribute]}/>)
        }

        return (<span className="item-name">
            <span>{this.props.item.name}</span>
            {items}
            {this.props.slot &&
            <Button onClick={() => this.props.changeEquipment(this.props.slot, this.props.item)}>Equip</Button>}
        </span>);
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeEquipment: changeEquipment, hideEquipment: hideEquipment}, dispatch)
}

export default connect(null, mapDispatchToProps)(ItemDetails);