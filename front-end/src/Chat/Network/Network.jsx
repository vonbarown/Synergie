import * as React from "react";
import "./network.css";
import { connect } from "react-redux";
import Talk from "talkjs";
import { appId } from "../../secret";
import { Link } from "react-router-dom";

class Network extends React.Component {
  handleClick = userId => {
    const { loggedUser, network } = this.props;

    const user = network.find(user => user.id === userId);

    Talk.ready
      .then(() => {
        const me = new Talk.User(loggedUser);
        const other = new Talk.User(user);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: appId,
            me: me
          });
        }

        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(
          conversationId
        );

        conversation.setParticipant(me);
        conversation.setParticipant(other);

        this.chatbox = window.talkSession.createChatbox(conversation);
        this.chatbox.mount(this.container);
      })
      .catch(e => console.error(e));
  };
  render() {
    const { loggedUser } = this.props;
    return (
      <div className="collection">
        <div className="current-user-container">
          {loggedUser && (
            <div>
              <picture className="current-user-picture">
                <img alt={loggedUser.username} src={loggedUser.avatar_url} />
              </picture>
              <div className="user-info">
                <h3>{loggedUser.username}</h3>
              </div>
              <Link to="/messages" className="chat-links-btn">
                Messages
              </Link>
            </div>
          )}
        </div>
        <div className="users-container">
          {this.props.network.map(contact => {
            return (
              <div className="user" key={contact.id}>
                <div className="user-info-container">
                  <img
                    className="chat-user-img "
                    src={contact.photourl}
                    alt={contact.name}
                  />
                  <div className="user-info">
                    <p className="title">{contact.name}</p>
                  </div>
                </div>
                <div className="user-action">
                  <button onClick={userId => this.handleClick(contact.id)}>
                    Message
                  </button>
                </div>
              </div>
            );
          })}
          <div className="chatbox-container" ref={c => (this.container = c)}>
            <div id="talkjs-container" style={{ height: "300px" }}>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    network: state.chatReducer.network,
    loggedUser: state.usersReducer.loggedUser.user
  };
};

export default connect(mapStateToProps, null)(Network);
