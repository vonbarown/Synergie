import React from "react";

export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className='modal'>
                <div>{this.props.children}</div>
                <div className='modal-button'>
                    <button onClick={this.onClose} >
                        Close
                    </button>
                </div>
            </div>
        )

    }
}