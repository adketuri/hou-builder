import * as React from "react";
import {bindActionCreators} from "redux";
import {changeEquipment} from "../../../actions";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class EquippableItem extends React.Component {

    render() {
        console.log(this.props);
        if (this.props.item == null) {
            return <div>No item</div>;
        }
        return <div>
            {this.props.item.name}
            <Button variant="danger" onClick={() => this.props.changeEquipment(this.props.slot, null)}>X</Button>
        </div>;
    }
}

function mapStateToProps(state, props) {
    return {
        item: state.equipment[props.slot]
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeEquipment: changeEquipment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EquippableItem);