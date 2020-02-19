import React from 'react'
import { connect } from 'react-redux'
import { loadChatMessages } from '../../store/actions/chatActions'
import './messager.css'

class Messager extends React.Component {

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

        const { title, user } = this.props

        return (
            <div className='message-container'>
                <Fragment>
                    <div style={{ height: '500px' }} className="inbox-container" ref={c => this.container = c}>Loading...</div>
                </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Messager)