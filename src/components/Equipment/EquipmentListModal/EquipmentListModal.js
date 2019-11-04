import * as React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {bindActionCreators} from "redux";
import {changeEquipment, hideEquipment, showEquipment} from "../../../actions";
import {connect} from "react-redux";
import ItemDetails from "../EquippableItem/ItemDetails/ItemDetails";

class EquipmentListModal extends React.Component {

    render() {
        const handleClose = () => this.props.hideEquipment();
        const title = this.props.activeSlot ? this.props.activeSlot.replace(/^\w/, c => c.toUpperCase()) : '';
        const itemElements = [];

        if (this.state != null) {
            for (const i in this.state.items) {
                const item = this.state.items[i];
                itemElements.push(<div key={item.id}><ItemDetails slot={this.props.activeSlot} item={item}/></div>);
            }
        }
        return (
            <Modal show={this.props.visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{itemElements}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    componentDidMount() {
        fetch('http://api.heroesofumbra.com/v1/items', {
            method: 'GET',
            credentials: "same-origin", //include, same-origin
            headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({items: data.items})
            })
            .catch(console.log)
    }
}

function mapStateToProps(state, props) {
    return {
        visible: state.ui.showEquipment,
        activeSlot: state.ui.activeSlot
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideEquipment: hideEquipment,
        showEquipment: showEquipment,
        changeEquipment: changeEquipment
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentListModal);