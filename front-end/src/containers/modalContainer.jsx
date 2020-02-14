import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal/modal'
import { connect } from 'react-redux';
import { loadChat } from '../store/actions/chatActions'
import axios from 'axios'

class ModalContainer extends React.Component {
    state = {
        show: false
    };


    componentDidMount() {
        this.fetchChatChannels()
    }


    fetchChatChannels = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/chat/user/${this.props.loggedUser.id}`)
            console.log(payload);
            this.props.loadChat(payload)
        } catch (error) {

        }
    }


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

const mapStateToProps = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadChat: data => dispatch(loadChat(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)