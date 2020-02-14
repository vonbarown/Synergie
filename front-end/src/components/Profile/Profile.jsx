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
            <div>
                Profile
    < br />
                <Link to='/chat'>
                    <button>Chat</button>
                </Link>
                <br />
                <br />
                <button
                    onClick={this.showModal}
                >
                    Messages
                </button>
                <Modal show={this.state.show} onClose={this.showModal}>Show Modal</Modal>
            </div >
        )
    }
}