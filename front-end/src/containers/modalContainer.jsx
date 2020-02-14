import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal/modal'

export default class ModalContainer extends React.Component {
    state = {
        show: false
    };


    showModal = e => this.setState({ show: !this.state.show })


    render() {
        return (
            <div className='modal-container'>
                <div>
                    <button
                        onClick={this.showModal}
                        className='toggle-button modal-open-button'
                        id="centered-toggle-button"
                    >
                        Messages
                </button>

                    <Modal show={this.state.show} onClose={this.showModal}>
                        <Link to='/chat'>
                            <button>Chat</button>
                        </Link>
                    </Modal>
                </div>
            </div >
        )
    }
}