import * as React from "react";
import {bindActionCreators} from "redux";
import {changeEquipment, showEquipment} from "../../../actions";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class EquippableItem extends React.Component {

    render() {
        if (this.props.item == null) {
            return <div><Button variant="primary" onClick={() => this.props.showEquipment(this.props.slot)}>Equip
                something</Button></div>;
        }
        return <div>
            <span className="item-name">{this.props.item.name}</span>
            <Button variant="danger" className="unequip btn-sm"
                    onClick={() => this.props.changeEquipment(this.props.slot, null)}>X</Button>
        </div>;
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