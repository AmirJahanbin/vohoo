import React from "react";
import Modal from "react-modal";

export default class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onAfterOpen={this.props.handleAfterOpenFunc}
                onAfterClose={this.props.handleAfterCloseFunc}
                style={this.props.style}
                contentLabel={this.props.contentLabel}
                className={this.props.className}
                onRequestClose={this.props.onRequestClose}
            >
                {this.props.children}
            </Modal>
        );
    }
}