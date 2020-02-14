import * as React from 'react';
import './chatHistory.css'
import { connect } from 'react-redux';
class ChatHistory extends React.Component {
    render() {
        return (
            <div className="collection">
                {
                    this.props.history.map(messages => {
                        return (
                            <div className="collection-item avatar" key={messages.id}>
                                <div className='message-author'>
                                    <img className='chat-user-img' src={messages.avatar_url} alt={messages.username} />
                                    <span className="title">{messages.username}</span>
                                </div>
                                <p className='message-body'>
                                    <i className="prefix mdi-action-alarm" />
                                    <span className="message-date">At {messages.time_stamp}</span>
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
        history: state.chatReducer.history
    }
}

export default connect(mapStateToProps, null)(ChatHistory)