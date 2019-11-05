import * as React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {bindActionCreators} from "redux";
import {changeEquipment, hideEquipment, showEquipment} from "../../../actions";
import {connect} from "react-redux";
import ItemDetails from "../EquippableItem/ItemDetails/ItemDetails";
import Table from "react-bootstrap/Table";

class EquipmentListModal extends React.Component {

    render() {
        const handleClose = () => this.props.hideEquipment();
        const handleUnequip = () => {
            this.props.changeEquipment(this.props.slot, undefined);
            this.props.hideEquipment();
        };
        const title = this.props.activeSlot ? this.props.activeSlot.replace(/^\w/, c => c.toUpperCase()) : '';
        const itemElements = [];

        if (this.state != null && this.props.activeSlot) {
            for (const i in this.state.items) {
                const item = this.state.items[i];
                if (this.props.activeSlot === this.getSlot(item.type)) {
                    itemElements.push(<ItemDetails key={i} slot={this.props.activeSlot} item={item}/>);
                }
            }
        }
        return (
            <Modal show={this.props.visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Stats</th>
                        </tr>
                        </thead>
                        <tbody>
                        {itemElements}
                        </tbody>
                    </Table>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleUnequip}>Unequip {this.props.activeSlot}</Button>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    getSlot(type) {
        switch (type) {
            case 2:
                return "weapon";
            case 3:
                return "armor";
            case 4:
                return "helmet";
            case 5:
                return "other";
            case 11:
                return "orb";
            default:
                return undefined;
        }
    }

    componentDidMount() {
        console.log("CALLING API");
        fetch('https://api.heroesofumbra.com/v1/items', {
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