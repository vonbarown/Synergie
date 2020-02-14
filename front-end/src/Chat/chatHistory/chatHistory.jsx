import * as React from 'react';
import './chatHistory.css'
import { connect } from 'react-redux';
class ChatHistory extends React.Component {
    render() {
        return (
            <ul className="collection">
                {
                    this.props.history.map(messages => {
                        return (
                            <li className="collection-item avatar">
                                <img src="//robohash.org/107378?set=set2&bgset=bg2&size=70x70" alt="107378" className="circle" />
                                <span className="title">{messages.Who}</span>
                                <p>
                                    <i className="prefix mdi-action-alarm" />
                                    <span className="message-date">{messages.When}</span>
                                    <br />
                                    <span>{messages.What}</span>
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.chatReducer.history
    }
}

export default connect(mapStateToProps, null)(ChatHistory)