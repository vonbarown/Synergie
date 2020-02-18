import * as React from 'react';
import './network.css'
import { connect } from 'react-redux';
import Talk from

    class Network extends React.Component {


        handleClick(userId) {

            /* Retrieve the two users that will participate in the conversation */
            const { currentUser } = this.state;
            const user = dummyUsers.find(user => user.id === userId)

            /* Session initialization code */
            Talk.ready
                .then(() => {
                    /* Create the two users that will participate in the conversation */
                    const me = new Talk.User(currentUser);
                    const other = new Talk.User(user)

                    /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
                    if (!window.talkSession) {
                        window.talkSession = new Talk.Session({
                            appId: "YOUR_APP_ID",
                            me: me
                        });
                    }

                    /* Get a conversation ID or create one */
                    const conversationId = Talk.oneOnOneId(me, other);
                    const conversation = window.talkSession.getOrCreateConversation(conversationId);

                    /* Set participants of the conversations */
                    conversation.setParticipant(me);
                    conversation.setParticipant(other);

                    /* Create and mount chatbox in container */
                    this.chatbox = window.talkSession.createChatbox(conversation);
                    this.chatbox.mount(this.container);
                })
                .catch(e => console.error(e));
        }
        render() {
            return (
                <div className='collection'>
                    {
                        this.props.network.map(contact => {
                            return (
                                <div className='collection-item'
                                    key={contact.id}>
                                    <div className='contact-info'>
                                        <img className='chat-user-img' src={contact.avatar_url} alt={contact.username} />
                                        <div className='meta-data'>
                                            <p className="title">{contact.username}</p>
                                        </div>
                                    </div>
                                    <div className='user-action'>
                                        <button>Message</button>
                                    </div>
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
        network: state.chatReducer.network,
        loggedUser: state.usersReducer.user
    }
}

export default connect(mapStateToProps, null)(Network)