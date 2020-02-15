import React from 'react'
import { connect } from 'react-redux'
import { loadChatMessages } from '../../store/actions/chatActions'
import './layout.css'

class Layout extends React.Component {

    // state = {

    // }

    componentDidMount() {
        this.refs.txtMessage.focus();

    }
    setUser = () => {
        const { user, socket } = this.props
        socket.emit(user)
    }

    handleSubmit = e => {
        e.preventDefault()

        const message = this.refs.txtMessage.value;
        const { socket } = this.props

        socket.emit('chat message', message)
        this.sendMessage()
        this.refs.txtMessage.value = '';
        this.refs.txtMessage.focus();

        return false
    }

    sendMessage = () => {
        this.props.socket.on('chat message', (msg) => {
            this.props.loadChatMessages(msg)
        })
    }


    render() {

        const { title, socket, user } = this.props
        // console.log('socket', socket);

        return (
            <div className='layout-container'>
                {title}
                <div className='chat-input'>
                    <footer className="teal">
                        <form className="chat-form" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="prefix mdi-communication-chat" />
                                    <input ref="txtMessage" type="text" className='chat-form-input' placeholder="Type your message" />
                                    <span className="chip left">
                                        <img
                                            src={user.avatar_url}
                                            alt={`${user.username} avatar`}
                                            className='user-profile-pic'
                                        />
                                        <span className='username sink-in'>{user.username}</span>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.loggedUser.user,
        socket: state.chatReducer.socket
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadChatMessages: data => dispatch(loadChatMessages(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)