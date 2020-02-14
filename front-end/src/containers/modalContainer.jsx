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

    addNewChat = async () => {
        console.log('hit');

        const chatObj = {
            chat_type: 'single',
            user_id: this.props.loggedUser.id
        }
        try {
            await axios.post(`api/chat`, chatObj)
            this.fetchChatChannels()
        } catch (error) {
            console.log(error);

        }
    }


    fetchChatChannels = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/chat/user/${this.props.loggedUser.id}`)
            console.log(payload);
            this.props.loadChat(payload)
        } catch (error) {
            console.log(error);

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

                    <Modal
                        show={this.state.show}
                        onClose={this.showModal}
                        addNewChat={this.addNewChat}
                    >
                        {
                            // <Link to='/chat'>
                            //     <button>Chat</button>
                            // </Link>

                            this.props.chat.map(el => {
                                return (
                                    <Link to={`/chat/${el.id}/user/${el.user_id}`} key={el.id}>
                                        Chat
                                    </Link>
                                )
                            })
                        }

                    </Modal>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user,
        chat: state.chatReducer.chats
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadChat: data => dispatch(loadChat(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)