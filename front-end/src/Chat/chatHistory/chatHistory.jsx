import * as React from 'react';
import './chatHistory.css'
import { connect } from 'react-redux';
class ChatHistory extends React.Component {
    render() {
        return (
            <div className='collection'>
                {
                    this.props.history.map(messages => {
                        return (
                            <div className='collection-item'
                                key={messages.id}>
                                <div
                                    className={
                                        messages.username !== this.props.loggedUser.user ?
                                            'message-author' :
                                            'user-message'
                                    }
                                >
                                    <img className='chat-user-img' src={messages.avatar_url} alt={messages.username} />
                                    <span className="title">{messages.username}</span>
                                    <span className="message-date">At {messages.time_stamp}</span>
                                </div>
                                <p className='message-body'>
                                    <i className="prefix mdi-action-alarm" />
                                    <br />
                                    <span>{messages.message_body}</span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.chatReducer.history,
        loggedUser: state.usersReducer.user
    }
}

export default connect(mapStateToProps, null)(ChatHistory)