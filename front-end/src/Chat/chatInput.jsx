import React from 'react'
import './chatinput.css'
import { connect } from 'react-redux';
class ChatInput extends React.Component {
    render() {
        return (
            <div className='chat-input'>
                <footer className="teal">
                    <form className="chat-form">
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="prefix mdi-communication-chat" />
                                <input type="text" placeholder="Type your message" />
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
                                <button type="submit" className="waves-effect waves-light btn-floating btn-large">
                                    <i className="mdi-content-send" />
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
const mapStateToPros = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user
    }
}

export default connect(mapStateToPros, null)(ChatInput)