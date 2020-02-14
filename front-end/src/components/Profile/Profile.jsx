import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/modal'

export default class Profile extends React.Component {
    state = {
        show: false
    };


    showModal = e => this.setState({ show: !this.state.show })


    render() {
        return (
            <div className='profile-page'>
                <h1>Profile</h1>

                <button
                    onClick={this.showModal}
                    className='toggle-button'
                    id="centered-toggle-button"
                >
                    Messages
                </button>
                <Modal show={this.state.show} onClose={this.showModal}>
                    <Link to='/chat'>
                        <button>Chat</button>
                    </Link>
                </Modal>
            </div >
        )
    }
}