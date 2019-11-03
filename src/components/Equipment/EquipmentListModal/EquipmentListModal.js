import * as React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {bindActionCreators} from "redux";
import {hideEquipment, showEquipment} from "../../../actions";
import {connect} from "react-redux";

class EquipmentListModal extends React.Component {

    render() {
        const handleClose = () => this.props.hideEquipment();
        return (
            <Modal show={this.props.visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.activeSlot}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        visible: state.ui.showEquipment,
        activeSlot: state.ui.activeSlot
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({hideEquipment: hideEquipment, showEquipment: showEquipment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentListModal);