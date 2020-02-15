import React from 'react'
import { connect } from 'react-redux'
import './layout.css'
class Layout extends React.Component {

    setUser = () => {
        const { user, socket } = this.props
        socket.emit(user)
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


export default connect(mapStateToProps, null)(Layout)