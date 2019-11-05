import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {changeEquipment} from "../../actions"
import {connect} from "react-redux";
import EquippableItem from "./EquippableItem/EquippableItem";
import EquipmentListModal from "./EquipmentListModal/EquipmentListModal";
import Table from "react-bootstrap/Table";

class Equipment extends Component {

    render() {
        const slots = ['weapon', "armor", "helmet", "other"];
        const equipment = [];
        slots.forEach((slot, index) => {
            equipment.push(<EquippableItem key={slot} slot={slot} value={this.props.equipment[slot]}/>);
        });
        return (<>
            <EquipmentListModal/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Slot</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Stats</th>
                </tr>
                </thead>
                <tbody>
                {equipment}
                </tbody>
            </Table>
        </>);
    }
}

function mapStateToProps(state) {
    return {
        equipment: state.equipment
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeEquipment: changeEquipment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
