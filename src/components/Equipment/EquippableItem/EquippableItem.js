import * as React from "react";
import {bindActionCreators} from "redux";
import {changeEquipment, showEquipment} from "../../../actions";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import ItemDetails from "./ItemDetails/ItemDetails";

class EquippableItem extends React.Component {

    render() {
        if (this.props.item == null) {
            return <tr>
                <td>{this.props.slot.replace(/^\w/, c => c.toUpperCase())}</td>
                <td colSpan="3">
                    <Button variant="primary" size="sm" onClick={() => this.props.showEquipment(this.props.slot)} block>Equip
                        Something</Button>
                </td>
            </tr>;
        }
        return <ItemDetails slot={this.props.slot} item={this.props.item} equip={true}/>;
    }
}

function mapStateToProps(state, props) {
    return {
        item: state.equipment[props.slot]
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeEquipment: changeEquipment, showEquipment: showEquipment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EquippableItem);