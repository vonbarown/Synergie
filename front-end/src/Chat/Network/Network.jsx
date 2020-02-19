import * as React from 'react';
import './network.css'
import { connect } from 'react-redux';
import Talk from 'talkjs';
import { appId } from '../../secret'

class Network extends React.Component {


    handleClick = (userId) => {
        const { loggedUser, network } = this.props;

        const user = network.find(user => user.user_id === userId)

        console.log('logged', loggedUser);


        Talk.ready
            .then(() => {
                const me = new Talk.User(loggedUser);
                const other = new Talk.User(user.user_id)

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: appId,
                        me: me
                    });
                }

                const conversationId = Talk.oneOnOneId(me, other);
                const conversation = window.talkSession.getOrCreateConversation(conversationId);

                conversation.setParticipant(me);
                conversation.setParticipant(other);

                this.chatbox = window.talkSession.createChatbox(conversation);
                this.chatbox.mount(this.container);
            })
            .catch(e => console.error(e));
    }
    render() {
        const { loggedUser } = this.props
        return (
            <div className='collection'>
                <div className="current-user-container">
                    {loggedUser &&
                        <div>
                            <picture className="current-user-picture">
                                <img alt={loggedUser.username} src={loggedUser.avatar_url} />
                            </picture>
                            <div className="user-info">
                                <h3>{loggedUser.username}</h3>
                            </div>
                        </div>
                    }
                </div>
                <div className='users-container'>
                    {
                        this.props.network.map(contact => {
                            return (
                                <div className='user'
                                    key={contact.user_id}>
                                    <div className='user-info-container'>
                                        <img className='chat-user-img ' src={contact.avatar_url} alt={contact.username} />
                                        <div className='user-info'>
                                            <p className="title">{contact.username}</p>
                                        </div>
                                    </div>
                                    <div className='user-action'>
                                        <button onClick={(userId) => this.handleClick(contact.user_id)}>Message</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="chatbox-container" ref={c => this.container = c}>
                        <div id="talkjs-container" style={{ height: "300px" }}><i></i></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        network: state.chatReducer.network,
        loggedUser: state.usersReducer.loggedUser.user
    }
}

export default connect(mapStateToProps, null)(Network)