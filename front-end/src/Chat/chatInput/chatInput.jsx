import React from 'react'
import './chatinput.css'
import { connect } from 'react-redux';
import { sendMessage } from '../../store/actions/chatActions'
import axios from 'axios'

class ChatInput extends React.Component {

    componentDidMount() {
        this.refs.txtMessage.focus();
    }

    sendUserMessage = async (msgObj) => {
        try {
            await axios.post(`/api/message`, msgObj)

        } catch (error) {

        }
    }

    handleSubmit = e => {
        e.preventDefault()

        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }

        const messageObj = {
            chatMember_id: this.props.loggedUser.id,
            message_body: message,
            chat_id: this.props.chatId,
            time_stamp: new Date().toLocaleString(),
        };

        try {


            this.sendUserMessage(messageObj)

            // this.props.sendMessage(messageObj)
            this.refs.txtMessage.value = '';
            this.refs.txtMessage.focus();

        } catch (error) {
            console.log('chatInput', error);

        }
    }


    render() {
        console.log('id', this.props.loggedUser.id);

        return (
            <div className='chat-input'>
                <footer className="teal">
                    <form className="chat-form" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="prefix mdi-communication-chat" />
                                <input ref="txtMessage" type="text" className='chat-form-input' placeholder="Type your message" />
                                <span className="chip left">
                                    <img
                                        src={this.props.loggedUser.avatar_url}
                                        alt={`${this.props.loggedUser.username} avatar`}
                                        className='user-profile-pic'
                                    />
                                    <span className='username sink-in'>{this.props.loggedUser.username}</span>
                                </span>
                            </div>
                            <div className="input-field col s2">
                                <button type="submit" className="chat-submit-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: data => dispatch(sendMessage(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)